const DocumentUpload = ({ closeUploadModal }) => {
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
            <div className="border-2 border-dashed border-(--border-input) rounded-xl py-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover-lift hover:glow-primary hover:border-(--color-primary)">
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
                PDF, DOCX (Max 10MB)
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="bg-(--bg-dark)/50 border border-(--border-input) p-3 rounded flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold px-2 py-0.5 rounded border border-(--color-graph)/20">
                    PDF
                  </div>
                  <div>
                    <p className="text-sm text-(--bg-light) font-medium truncate max-w-60">
                      attention_is_all_you_need.pdf
                    </p>
                    <p className="text-[13px] font-[10px] text-(--text-muted)">
                      1.2 MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-(--text-muted) hover:text-(--bg-light) text-[13px] transition-colors cursor-pointer">
                    Replace
                  </button>
                  <span className="text-(--border-input)">|</span>
                  <button className="text-(--text-muted) hover:text-red-400 transition-colors cursor-pointer pt-1">
                    <span className="material-symbols-outlined text-[18px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-(--text-muted) uppercase">
                  Document Title (optional)
                </label>
                <input
                  className="w-full bg-(--bg-dark) border border-(--border-input) rounded px-4 py-3 text-body-md focus:ring-1 focus:ring-(--color-graph) focus:border-(--color-graph) transition-all outline-none placeholder:text-(--text-muted)/50 mt-2"
                  placeholder="Document Title"
                  type="text"
                />
              </div>
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] text-(--color-graph) font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-(--color-graph) rounded-full animate-pulse"></span>
                    Uploading...
                  </span>
                  <span className="text-[12px] font-medium text-(--text-muted)">
                    74%
                  </span>
                </div>
                <div className="h-1 w-full bg-(--border-input) rounded-full overflow-hidden">
                  <div className="h-full bg-(--color-graph) rounded-full cta-gradient"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-(--bg-card)/50 p-6 flex items-center justify-end gap-3 border-t border-(--border-input)">
            <button
              className="px-6 py-2.5 rounded-xl font-medium text-(--text-muted) hover:text-(--text-main) hover:bg-(--bg-light)/5 transition-all text-[14px] cursor-pointer"
              onClick={closeUploadModal}
            >
              Cancel
            </button>
            <button className="cta-gradient px-8 py-2.5 rounded-xl font-bold text-white shadow-(--shadow-soft-primary) hover:scale-[1.02] active:scale-95 transition-all text-[14px] cursor-pointer">
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentUpload;
