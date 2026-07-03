import { supabase } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";
import { extractRawText } from "../utils/textExtractor.js";
import { extractEntities } from "../utils/entityExtractor.js";

export const docUpload = async (req, res) => {
  try {
    const filename = req.file.originalname;

    const storageId = uuidv4();

    const filePath = `${req.id}/${storageId}/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false,
      });

    if (uploadError) {
      return res.status(400).json({
        message: "Upload failed",
        error: uploadError.message,
      });
    }

    const { data: publicUrlData } = supabase.storage
      .from("documents")
      .getPublicUrl(filePath);

    const fileUrl = publicUrlData.publicUrl;

    const { data, error: dbError } = await supabase
      .from("documents")
      .insert([
        {
          user_id: req.id,
          file_name: filename,
          file_url: fileUrl,
          file_type: req.file.mimetype,
          file_size: req.file.size,
          status: "uploaded",
        },
      ])
      .select()
      .single();

    if (dbError) {
      await supabase.storage.from("documents").remove([filePath]);

      return res.status(500).json({
        message: "Failed to save document",
        error: dbError.message,
      });
    }

    return res.status(200).json({
      message: "File uploaded successfully",
      data: {
        document_id: data.id,
        filename: data.file_name,
        status: data.status,
        file_url: data.file_url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const fetchDocuments = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const { data, error } = await supabase
      .from("documents")
      .select(
        "id, file_name, file_url, file_type, file_size, status, created_at",
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch documents",
      });
    }

    return res.status(200).json({
      data: data.map((doc) => ({
        id: doc.id,
        name: doc.file_name,
        url: doc.file_url,
        fileType: doc.file_type,
        fileSize: doc.file_size,
        status: doc.status,
        created_at: doc.created_at,
      })),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const fetchDocumentsById = async (req, res) => {
  try {
    const userId = req.id;
    const documentId = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const { data, error } = await supabase
      .from("documents")
      .select(
        "id, file_name, file_url, file_type, file_size, status, created_at",
      )
      .eq("id", documentId)
      .eq("user_id", userId)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    return res.status(200).json({
      data: {
        id: data.id,
        name: data.file_name,
        file_url: data.file_url,
        file_type: data.file_type,
        file_size: data.file_size,
        status: data.status,
        created_at: data.created_at,
        entities: [],
        graph: null,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const userId = req.id;
    const documentId = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const { data: doc, error: fetchError } = await supabase
      .from("documents")
      .select("id,file_name, file_url")
      .eq("id", documentId)
      .eq("user_id", userId)
      .single();

    if (fetchError || !doc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    const url = new URL(doc.file_url);
    let filePath = url.pathname.split("/documents/")[1];

    filePath = decodeURIComponent(filePath);

    if (!filePath) {
      return res.status(500).json({
        message: "Invalid file path",
      });
    }

    const { error: storageError } = await supabase.storage
      .from("documents")
      .remove([filePath]);

    if (storageError) {
      return res.status(500).json({
        message: "Failed to delete file from storage",
      });
    }

    const { error: dbError } = await supabase
      .from("documents")
      .delete()
      .eq("id", documentId)
      .eq("user_id", userId);

    if (dbError) {
      return res.status(500).json({
        message: "File deleted but DB cleanup failed",
        error: dbError.message,
      });
    }

    return res.status(200).json({
      message: `${doc.file_name} deleted successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const processDocument = async (req, res) => {
  try {
    const userId = req.id;
    const documentId = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const { data: doc, error: fetchError } = await supabase
      .from("documents")
      .select("id,file_name, file_url, file_type")
      .eq("id", documentId)
      .eq("user_id", userId)
      .single();

    if (fetchError || !doc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    const { data: updateDoc, error: updateError } = await supabase
      .from("documents")
      .update({ status: "processing" })
      .eq("id", documentId);

    if (updateError) {
      return res.status(500).json({
        message: "Status unable to update",
      });
    }

    const fileType = doc.file_type;
    const url = new URL(doc.file_url);
    let filePath = url.pathname.split("/documents/")[1];

    filePath = decodeURIComponent(filePath);

    if (!filePath) {
      return res.status(500).json({
        message: "Invalid file path",
      });
    }

    const { data: downloadDoc, error: downloadError } = await supabase.storage
      .from("documents")
      .download(filePath);

    if (downloadError) {
      return res.status(500).json({
        message: "Document unable to download",
      });
    }

    const fileBuffer = Buffer.from(await downloadDoc.arrayBuffer());

    const cleanText = await extractRawText(fileBuffer, fileType);

    const entities = await extractEntities(cleanText);

    return res.status(200).json({
      message: "Entities: ",
      entities,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
