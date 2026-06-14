import { useState } from "react";
import { docUpload } from "../../api/documentApi";

const DocumentUpload = ({ closeUploadModal }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setProgress(20);

      const formData = new FormData();

      setProgress(40);

      formData.append("file", file);

      setProgress(60);

      const data = await docUpload(formData);

      setProgress(100);

      setTimeout(() => {
        closeUploadModal();
      }, 400);

      return data;
    } catch (error) {
      console.error("Upload failed: ", error);
    } finally {
      setLoading(false);
    }
  };

  const getFileType = (file) => {
    if (!file) return "FILE";

    const type = file.type;

    if (type === "application/pdf") return "PDF";
    if (
      type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      return "DOCX";

    const ext = file.name.split(".").pop();
    return ext ? ext.toUpperCase() : "FILE";
  };

  return (
    <>
      <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <div className="card-surface w-full max-w-xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-6 flex items-start justify-between">
            <div>
              <h2 className="text-[20px] font-semibold text-(--text-main) leading-tight">
                Upload Document
              </h2>
              <p className="text-[14px] text-(--(--text-muted)) mt-1">
                Add a research paper to your knowledge base
              </p>
            </div>
            <button
              className="text-(--text-muted) hover:text-(--color-graph) transition-colors p-1 cursor-pointer"
              onClick={closeUploadModal}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="px-6 pb-6">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            {!file && (
              <label
                htmlFor="fileUpload"
                className="border-2 border-dashed border-(--border-input) rounded-xl py-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover-lift hover:glow-primary hover:border-(--color-primary)"
              >
                <div className="w-12 h-12 bg-(--color-graph)/5 rounded flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-(--color-graph)">
                    upload_file
                  </span>
                </div>
                <p className="text-(--text-main) font-medium">
                  Drag &amp; drop your document or{" "}
                  <span className="text-(--color-graph)">click to browse</span>
                </p>
                <p className="text-(--text-muted) font-mono text-sm mt-1 uppercase tracking-tight leading-none">
                  PDF, DOCX (Max 50MB)
                </p>
              </label>
            )}

            {file && (
              <div className="mt-6 space-y-4">
                <div className="bg-(--bg-dark)/50 border border-(--border-input) p-3 rounded flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold px-2 py-0.5 rounded border border-(--color-graph)/20">
                      {getFileType(file)}
                    </div>
                    <div>
                      <p className="text-sm text-(--bg-light) font-medium truncate max-w-60">
                        {file.name}
                      </p>
                      <p className="text-[13px] font-[10px] text-(--text-muted)">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="fileUpload"
                      className="text-(--text-muted) hover:text-(--bg-light) text-[13px] transition-colors cursor-pointer"
                    >
                      Replace
                    </label>
                    <span className="text-(--border-input)">|</span>
                    <button
                      className="text-(--text-muted) hover:text-red-400 transition-colors cursor-pointer pt-1"
                      onClick={() => {
                        setFile(null);
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>

                {loading && (
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[15px] text-(--color-graph) font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-(--color-graph) rounded-full animate-pulse"></span>
                        Uploading...
                      </span>
                      <span className="text-[12px] font-medium text-(--text-muted)">
                        {progress}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-(--border-input) rounded-full overflow-hidden">
                      <div
                        className="h-full bg-(--color-graph) rounded-full cta-gradient"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="bg-(--bg-card)/50 p-6 flex items-center justify-end gap-3 border-t border-(--border-input)">
            <button
              className="px-6 py-2.5 rounded-xl font-medium text-(--text-muted) hover:text-(--text-main) hover:bg-(--bg-light)/5 transition-all text-[14px] cursor-pointer"
              onClick={closeUploadModal}
            >
              Cancel
            </button>
            <button
              className="cta-gradient px-8 py-2.5 rounded-xl font-bold text-white shadow-(--shadow-soft-primary) hover:scale-[1.02] active:scale-95 transition-all text-[14px] cursor-pointer"
              onClick={handleUpload}
              disabled={!file || loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentUpload;
