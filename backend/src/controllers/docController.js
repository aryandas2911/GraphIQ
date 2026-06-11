import { supabase } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

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

    console.log(req.id);

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
