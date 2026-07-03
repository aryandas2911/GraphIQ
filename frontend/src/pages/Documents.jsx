import { useEffect, useState } from "react";
import DocumentUpload from "../components/Modals/DocumentUpload.jsx";
import {
  deleteDocument,
  fetchDocuments,
  processDocument,
} from "../api/documentApi.js";

const Documents = () => {
  const [uploadModal, setUploadModal] = useState(false);

  const closeUploadModal = () => {
    setUploadModal(false);
  };

  const [documents, setDocuments] = useState([]);

  const fetchDocs = async () => {
    try {
      const data = await fetchDocuments();
      setDocuments(data.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDocument(id);
      fetchDocs();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const [processingIds, setProcessingIds] = useState([]);

  const handleProcess = async (id) => {
    setProcessingIds((prev) => [...prev, id]);
    try {
      await processDocument(id);
    } catch (error) {
      console.error("Error processing document:", error);
    } finally {
      setProcessingIds((prev) => prev.filter((pid) => pid !== id));
      fetchDocs();
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <>
      <main className="mx-auto px-8 pt-27 pb-6">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-[28px] font-semibold leading-tight">
              Uploaded Documents
            </h2>
            <p className="text-slate-400 text-sm">
              Manage and analyze your documents through graph-augmented
              retrieval.
            </p>
          </div>
          <button
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md cta-gradient text-(--bg-dark) font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-(--color-primary)/10 cursor-pointer"
            onClick={() => {
              setUploadModal(true);
            }}
          >
            <span className="material-symbols-outlined text-sm">
              upload_file
            </span>
            <span>Upload Paper</span>
          </button>
        </div>

        {/* Split View Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Paper Cards */}
          <div
            className={`space-y-4 ${
              documents.length === 0 ? "w-full" : "lg:w-[75%]"
            }`}
          >
            {/* Tabs Component */}
            <div className="border-b border-(--border-input) flex gap-8 mb-6">
              <a
                className="border-b-2 border-(--color-primary) pb-3 text-sm font-semibold text-white"
                href="#"
              >
                All Files
              </a>
            </div>

            {/* Document box */}
            {documents.length !== 0 ? (
              documents.map((doc) => (
                <div
                  key={doc.id}
                  className="group relative bg-(--bg-card) border border-(--border-input) rounded-xl p-5 transition-all hover:border-slate-700 hover:bg-(--bg-card)/80 cursor-pointer"
                >
                  {(() => {
                    const isProcessing =
                      processingIds.includes(doc.id) ||
                      doc.status === "processing";

                    if (isProcessing) {
                      return (
                        <button
                          disabled
                          className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full text-slate-500 cursor-not-allowed"
                        >
                          <span className="material-symbols-outlined text-base animate-spin">
                            progress_activity
                          </span>
                        </button>
                      );
                    }

                    if (doc.status === "completed") {
                      return (
                        <button
                          disabled
                          className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full text-green-500 cursor-default"
                        >
                          <span className="material-symbols-outlined text-base">
                            check_circle
                          </span>
                        </button>
                      );
                    }

                    return (
                      <button
                        className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full text-slate-500 hover:text-(--color-primary) transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProcess(doc.id);
                        }}
                        title={
                          doc.status === "failed"
                            ? "Retry processing"
                            : "Process document"
                        }
                      >
                        <span className="material-symbols-outlined text-base">
                          {doc.status === "failed"
                            ? "restart_alt"
                            : "play_circle"}
                        </span>
                      </button>
                    );
                  })()}

                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold px-2.5 py-1 rounded-full border border-(--color-graph)/20">
                      {doc.status?.toUpperCase()}
                    </span>

                    <span className="text-slate-500 text-xs font-medium pr-8">
                      {formatDate(doc.created_at)}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-(--color-primary)">
                    {doc.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        account_tree
                      </span>
                      {doc.entityCount} entities
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>
                      {doc.relationshipCount} relationships
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <p className="text-slate-400 text-sm">
                      {doc.name.split(".").pop()?.toUpperCase()} •{" "}
                      {(doc.fileSize / 1024 / 1024).toFixed(2)} MB
                    </p>

                    <button
                      className="text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
                      onClick={() => {
                        handleDelete(doc.id);
                      }}
                    >
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-(--text-muted)">
                <p className="text-lg font-medium">No Documents Uploaded</p>
                <p className="text-sm mt-2">
                  Upload your first document to get started
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Insights Panel */}
          {documents.length !== 0 && (
            <div className="lg:w-[25%]">
              <div className="sticky top-24 bg-(--bg-card) border border-(--border-input) rounded-xl p-6 overflow-hidden">
                <h4 className="text-sm font-bold text-(--color-primary) uppercase tracking-widest mb-4">
                  Insights
                </h4>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                    Abstract Summary
                  </p>
                  <p className="text-sm text-slate-300 italic border-l-2 pl-4">
                    "Change for each file"
                  </p>
                </div>

                <button className="w-full mt-8 py-2 bg-(--border-input) text-sm rounded flex justify-center gap-2">
                  Launch Graph Explorer
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-(--bg-dark) py-6 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-md font-bold text-white tracking-tight">
            GraphIQ
          </span>

          <div className="text-xs text-(--text-muted)/50">
            © 2026 GraphIQ. Built for Intellectual Clarity.
          </div>
        </div>
      </footer>

      {uploadModal && (
        <DocumentUpload
          closeUploadModal={closeUploadModal}
          refreshDocuments={fetchDocs}
        />
      )}
    </>
  );
};

export default Documents;
