const Documents = () => {
  return (
    <>
      <main className="mx-auto px-8 pt-27 pb-6">
        {/* Page Heading */}
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div class="flex flex-col gap-1">
            <h2 class="text-2xl md:text-[28px] font-semibold leading-tight">
              Uploaded Documents
            </h2>
            <p class="text-slate-400 text-sm">
              Manage and analyze your documents through graph-augmented
              retrieval.
            </p>
          </div>
          <button class="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md cta-gradient text-(--bg-dark) font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-(--color-primary)/10 cursor-pointer">
            <span class="material-symbols-outlined text-sm">upload_file</span>
            <span>Upload Paper</span>
          </button>
        </div>

        {/* Split View Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Paper Cards */}
          <div className="lg:w-[75%] space-y-4">
            {/* Tabs Component */}
            <div className="border-b border-(--border-input) flex gap-8 mb-6">
              <a
                class="border-b-2 border-(--color-primary) pb-3 text-sm font-semibold text-white"
                href="#"
              >
                All Files
              </a>
              <a
                class="border-b-2 border-transparent pb-3 text-sm font-medium text-slate-500 hover:text-slate-300"
                href="#"
              >
                Starred
              </a>
            </div>
            {/* Card 1 */}
            <div className="group relative bg-(--bg-card) border-2 border-(--color-primary) rounded-xl p-5 transition-all hover:bg-(--bg-card)/80 cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span class="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-(--color-graph)/20">
                  PROCESSED
                </span>
                <span class="text-slate-500 text-xs font-medium">
                  Feb 09, 2026
                </span>
              </div>
              <h3 class="text-lg font-semibold mb-2 group-hover:text-(--color-primary) transition-colors">
                Document 1
              </h3>
              <p class="text-slate-400 text-sm mb-4">
                AI/ML Paper • 2026 • MSIT
              </p>
              <div class="flex items-center gap-6 pt-4 border-t border-(--border-input)">
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    account_tree
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Entities: <span class="text-white">42</span>
                  </span>
                </div>
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    schema
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Relationships: <span class="text-white">118</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-(--bg-card) border border-(--border-input) rounded-xl p-5 transition-all hover:border-slate-700 hover:bg-(--bg-card)/80 cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span class="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-(--color-graph)/20">
                  PROCESSED
                </span>
                <span class="text-slate-500 text-xs font-medium">
                  Feb 10, 2026
                </span>
              </div>
              <h3 class="text-lg font-semibold mb-2 group-hover:text-(--color-primary) transition-colors">
                Document 2
              </h3>
              <p class="text-slate-400 text-sm mb-4">
                Web Dev Book • 2026 • SELF
              </p>
              <div class="flex items-center gap-6 pt-4 border-t border-(--border-input)">
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    account_tree
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Entities: <span class="text-white">35</span>
                  </span>
                </div>
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    schema
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Relationships: <span class="text-white">120</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-(--bg-card) border border-(--border-input) rounded-xl p-5 transition-all hover:border-slate-700 hover:bg-(--bg-card)/80 cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                  <span class="bg-(--color-graph)/10 text-(--color-graph) text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-(--color-graph)/20">
                    PROCESSED
                  </span>
                  <span class="bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-amber-500/20">
                    STARRED
                  </span>
                </div>
                <span class="text-slate-500 text-xs font-medium">
                  Feb 11, 2026
                </span>
              </div>
              <h3 class="text-lg font-semibold mb-2 group-hover:text-(--color-primary) transition-colors">
                Document 3
              </h3>
              <p class="text-slate-400 text-sm mb-4">DSA Notes • 2026 • SELF</p>
              <div class="flex items-center gap-6 pt-4 border-t border-(--border-input)">
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    account_tree
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Entities: <span class="text-white">25</span>
                  </span>
                </div>
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="material-symbols-outlined text-(--color-primary) text-lg">
                    schema
                  </span>
                  <span class="text-xs font-medium uppercase tracking-tight">
                    Relationships: <span class="text-white">198</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Insights Panel */}
          <div className="lg:w-[25%]">
            <div className="sticky top-24 bg-(--bg-card) border border-(--border-input) rounded-xl p-6 overflow-hidden">
              <h4 class="text-sm font-bold text-(--color-primary) uppercase tracking-widest mb-4">
                Insights
              </h4>

              {/* Abstract Summary */}
              <div class="mb-6">
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-tighter mb-2">
                  Abstract Summary
                </p>
                <p class="text-sm text-slate-300 leading-relaxed italic border-l-2 border-(--color-primary)/30 pl-4 py-1">
                  "The Transformer architecture replaces recurrent and
                  convolutional layers with self-attention mechanisms, achieving
                  superior translation quality and being significantly faster to
                  train."
                </p>
              </div>

              {/* Key Concepts */}
              <div class="mb-8">
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-tighter mb-3">
                  Key Concepts
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[11px] font-medium rounded border border-indigo-500/20">
                    Transformer
                  </span>
                  <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[11px] font-medium rounded border border-emerald-500/20">
                    Self-Attention
                  </span>
                  <span class="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-[11px] font-medium rounded border border-amber-500/20">
                    BLEU Score
                  </span>
                  <span class="px-2.5 py-1 bg-rose-500/10 text-rose-400 text-[11px] font-medium rounded border border-rose-500/20">
                    Positional Encoding
                  </span>
                </div>
              </div>

              {/* Graph Influence */}
              <div class="space-y-4">
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-tighter">
                  Graph Influence
                </p>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="size-2 rounded-full bg-(--color-primary) shadow-sm shadow-(--color-primary)/50"></div>
                      <span class="text-xs font-medium text-slate-200">
                        Self-Attention
                      </span>
                    </div>
                    <span class="text-[10px] font-mono text-(--color-primary)">
                      88.4%
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="size-2 rounded-full bg-(--color-primary)/60"></div>
                      <span class="text-xs font-medium text-slate-200">
                        Encoder-Decoder
                      </span>
                    </div>
                    <span class="text-[10px] font-mono text-(--color-primary)/80">
                      74.1%
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="size-2 rounded-full bg-(--color-primary)/40"></div>
                      <span class="text-xs font-medium text-slate-200">
                        Multi-Head
                      </span>
                    </div>
                    <span class="text-[10px] font-mono text-(--color-primary)/60">
                      62.8%
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="size-2 rounded-full bg-(--color-primary)/20"></div>
                      <span class="text-xs font-medium text-slate-200">
                        Layer Norm
                      </span>
                    </div>
                    <span class="text-[10px] font-mono text-(--color-primary)/40">
                      45.2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button class="w-full mt-8 py-2.5 bg-(--border-input) text-slate-300 text-sm font-semibold rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span class="material-symbols-outlined text-sm">
                  open_in_new
                </span>
                Launch Graph Explorer
              </button>
            </div>
          </div>
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
    </>
  );
};

export default Documents;
