import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDocuments } from "../api/documentApi.js";
import { useEffect } from "react";
import { supabase } from "../config/supabase.js";
import ForceGraph2D from "react-force-graph-2d"

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [entities, setEntities] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const graphContainerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const fetchDocs = async () => {
    try {
      const data = await fetchDocuments();
      setDocuments(data.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  useEffect(() => {
    if (!selectedDocId) return;

    const loadGraphData = async () => {
      const [
        { data: entityData, error: entityError },
        { data: relationshipData, error: relationshipError },
      ] = await Promise.all([
        supabase
          .from("entities")
          .select("id, name")
          .eq("document_id", selectedDocId),
        supabase
          .from("relationships")
          .select("source_entity, target_entity, relation")
          .eq("document_id", selectedDocId),
      ]);

      if (entityError) {
        console.error("Error fetching entities:", entityError);
        return;
      }

      if (relationshipError) {
        console.error("Error fetching relationships:", relationshipError);
        return;
      }

      setEntities(entityData);
      setRelationships(relationshipData);
    };

    loadGraphData();
  }, [selectedDocId]);

  useEffect(()=>{
    const nodes =entities.map(e => ({ id: e.id, label: e.name }))
    const links= relationships.map(r => ({ source: r.source_entity, target: r.target_entity, label: r.relation }))
    setGraphData({ nodes, links })
  },[entities,relationships])

  useEffect(() => {
    const measure = () => {
      if (!graphContainerRef.current) return;
      const { width, height } = graphContainerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <main className="flex min-h-screen overflow-hidden pt-16">
      {/* Left Sidebar */}
      <aside className="w-72 bg-(--bg-card) border-r border-(--border-input) flex flex-col">
        {/* Title */}
        <div className="p-4 border-b border-(--border-input)">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-white text-sm font-semibold">Workspace</h1>
          </div>
          <p className="text-(--text-muted) text-xs">Neural Engine</p>
        </div>

        {/* Page Links */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2 space-y-1">
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-(--color-primary)/10 text-white group"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px] text-(--color-primary)">
                share_reviews
              </span>
              <span className="text-sm font-medium">Knowledge Graph</span>
            </a>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-md text-(--text-muted) hover:bg-(--bg-input) hover:text-white transition-colors"
              to="/documents"
            >
              <span className="material-symbols-outlined text-[20px]">
                menu_book
              </span>
              <span className="text-sm font-medium">Documents</span>
            </Link>
          </nav>

          {/* Documents Section */}
          <div className="mt-4">
            <h3 className="px-5 pb-2 text-[11px] font-bold text-(--text-dim) uppercase tracking-widest">
              Documents
            </h3>
            <div className="px-2 space-y-0.5">
              {documents.length !== 0 ? (
                documents.map((doc) => {
                  const isPdf =
                    doc.name.split(".").pop()?.toLowerCase() === "pdf";

                  const statusMap = {
                    uploaded: {
                      label: "Uploaded",
                      dot: "bg-slate-500",
                    },
                    processing: {
                      label: "Processing",
                      dot: "bg-yellow-500 animate-pulse",
                    },
                    completed: {
                      label: "Completed",
                      dot: "bg-(--color-graph)",
                    },
                    failed: {
                      label: "Failed",
                      dot: "bg-red-500",
                    },
                  };

                  const { label, dot } =
                    statusMap[doc.status] || statusMap.uploaded;

                  return (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-(--bg-input) group cursor-pointer"
                      onClick={() => {
                        if (doc.status !== "completed") return;
                        setSelectedDocId(doc.id);
                      }}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="size-8 rounded bg-(--border-input) flex items-center justify-center text-white shrink-0">
                          <span className="material-symbols-outlined text-sm">
                            {isPdf ? "picture_as_pdf" : "description"}
                          </span>
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs text-white font-medium truncate">
                            {doc.name}
                          </p>
                          <p className="text-[10px] text-(--text-dim)">
                            {label}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`size-2 rounded-full shrink-0 ${dot}`}
                      ></div>
                    </div>
                  );
                })
              ) : (
                <p className="px-3 py-2 text-[11px] text-(--text-dim)">
                  No documents uploaded
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 bg-(--bg-dark)/50 border-t border-(--border-input)">
          <div className="flex items-center justify-between text-[10px] text-(--text-dim)">
            <span>© 2026 GraphIQ. Built for Intellectual Clarity.</span>
          </div>
        </div>
      </aside>

      {/* Center Graph */}
      <section ref={graphContainerRef} className="flex-1 relative graph-grid bg-(--bg-dark) overflow-hidden cursor-move">
        {dimensions.width > 0 && dimensions.height > 0 && (
          <ForceGraph2D
            graphData={graphData}
            nodeLabel="label"
            linkLabel="label"
            width={dimensions.width}
            height={dimensions.height}
          />
        )}

        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
          <button className="size-10 bg-(--bg-card) border border-(--border-input) rounded-md flex items-center justify-center hover:bg-(--bg-input) transition-colors">
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
          <button className="size-10 bg-(--bg-card) border border-(--border-input) rounded-md flex items-center justify-center hover:bg-(--bg-input) transition-colors">
            <span className="material-symbols-outlined text-lg">remove</span>
          </button>
          <button className="size-10 bg-(--bg-card) border border-(--border-input) rounded-md flex items-center justify-center hover:bg-(--bg-input) transition-colors">
            <span className="material-symbols-outlined text-lg">
              center_focus_weak
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
