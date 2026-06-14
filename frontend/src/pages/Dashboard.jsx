import { Link } from "react-router-dom";

const Dashboard = () => {
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
              <div className="flex items-center justify-between p-3 rounded-md hover:bg-(--bg-input) group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-(--border-input) flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm">
                      picture_as_pdf
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-white font-medium truncate">
                      Test.pdf
                    </p>
                    <p className="text-[10px] text-(--text-dim)">Indexed</p>
                  </div>
                </div>
                <div className="size-2 rounded-full bg-(--color-graph)"></div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-md hover:bg-(--bg-input) group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-(--border-input) flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm">
                      description
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-white font-medium truncate">
                      Test.txt
                    </p>
                    <p className="text-[10px] text-(--text-dim)">Processing</p>
                  </div>
                </div>
                <div className="size-2 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>
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
      <section className="flex-1 relative graph-grid bg-(--bg-dark) overflow-hidden cursor-move">
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

      {/* Right Sidebar */}
      <aside className="w-80 bg-(--bg-card) border-l border-(--border-input) flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-(--border-input) flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-(--color-primary) text-[20px]">
              smart_toy
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              GraphIQ Assistant
            </h3>
          </div>
          <button className="text-(--text-dim) hover:text-white">
            <span className="material-symbols-outlined text-lg">more_vert</span>
          </button>
        </div>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6"></div>

        {/* Question Box */}
        <div className="p-4 border-t border-(--border-input) bg-(--bg-card)">
          <div className="relative">
            <textarea
              className="w-full bg-(--bg-input) border-none rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:ring-1 focus:ring-(--color-primary) placeholder-(--text-dim) resize-none custom-scrollbar"
              placeholder="Ask about your document..."
              rows="1"
            ></textarea>
            <button className="absolute right-3 bottom-3 text-(--color-primary) hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Dashboard;
