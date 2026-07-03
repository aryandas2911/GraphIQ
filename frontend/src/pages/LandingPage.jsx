import { useNavigate } from "react-router-dom";
import DotField from "../components/DotField/DotField";
import SplitText from "../components/SplitText/SplitText";
import StarBorder from "../components/StarBorder/StarBorder";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 z-0">
        <DotField
          dotRadius={2.5}
          dotSpacing={20}
          bulgeStrength={60}
          glowRadius={140}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(245, 246, 248, 0.45)"
          gradientTo="rgba(245, 246, 248, 0.15)"
          glowColor="rgba(230, 232, 235, 0.45)"
        />
      </div>
      <main className="relative z-10 pt-32 pb-10">
        {/* Hero Section */}
        <section className="mx-auto px-6 text-center mb-24">
          {/* Hero Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--color-primary)/10 border border-(--color-primary)/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-primary) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-primary)"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-(--color-primary)">
              Thinking In Graphs
            </span>
          </div>

          {/* Hero Section Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            <SplitText
              tag="span"
              text="Turn Documents into an"
              splitType="words"
              className="text-(--text-main)"
              delay={80}
              duration={0.8}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="0px"
            />
            <br className="hidden md:block" />
            <SplitText
              tag="span"
              text="Interactive Knowledge Graph"
              splitType="words"
              className="[&_.split-word]:text-transparent [&_.split-word]:bg-clip-text [&_.split-word]:bg-linear-to-r [&_.split-word]:from-white [&_.split-word]:to-(--text-muted)"
              delay={80}
              duration={0.8}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="0px"
            />
          </h1>

          {/* Hero Section Description */}
          <p className="text-lg text-(--text-muted) max-w-2xl mx-auto mb-10 leading-relaxed">
            GraphIQ uses advanced LLMs to parse your documents and PDFs,
            automatically mapping relationships and hidden insights into a
            searchable, visual network.
          </p>

          {/* Hero CTA Button */}
          <div className="flex items-center justify-center mb-19">
            <StarBorder
              as="button"
              color="#1fe0cd"
              speed="4s"
              thickness={2}
              className="w-full sm:w-auto shadow-2xl shadow-(--color-primary)/10 hover:scale-[1.02] transition-transform cursor-pointer text-lg"
              onClick={() => navigate("/signup")}
            >
              Upload a Document
            </StarBorder>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mx-auto px-6 py-24 border-t border-white/5 border-b">
          <div className="text-center mb-24">
            <h2 class="text-[10px] font-bold tracking-[0.2em] text-(--color-primary) uppercase mb-4">
              Methodology
            </h2>
            <h3 class="text-3xl font-semibold text-white">How it Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-19">
            {/* Card 1 */}
            <SpotlightCard
              className="group p-6 hover:border-(--color-primary)/30 transition-all"
              spotlightColor="rgba(31, 224, 205, 0.15)"
            >
              <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-(--color-primary)/10 transition-colors">
                <span class="material-symbols-outlined text-(--text-muted) group-hover:text-(--color-primary)">
                  upload_file
                </span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">1. Upload</h4>
              <p class="text-sm text-(--text-muted) leading-relaxed">
                Drop your PDFs or research papers into the secure workspace.
              </p>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard
              className="group p-6 hover:border-(--color-primary)/30 transition-all"
              spotlightColor="rgba(31, 224, 205, 0.15)"
            >
              <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-(--color-primary)/10 transition-colors">
                <span class="material-symbols-outlined text-(--text-muted) group-hover:text-(--color-primary)">
                  psychology
                </span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">
                2. AI Understands
              </h4>
              <p class="text-sm text-(--text-muted) leading-relaxed">
                Our models extract entities, concepts, and semantic
                relationships.
              </p>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard
              className="group p-6 hover:border-(--color-primary)/30 transition-all"
              spotlightColor="rgba(31, 224, 205, 0.15)"
            >
              <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-(--color-primary)/10 transition-colors">
                <span class="material-symbols-outlined text-(--text-muted) group-hover:text-(--color-primary)">
                  schema
                </span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">3. Graph Built</h4>
              <p class="text-sm text-(--text-muted) leading-relaxed">
                Relationships are mapped automatically into a visual network.
              </p>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard
              className="group p-6 hover:border-(--color-primary)/30 transition-all"
              spotlightColor="rgba(31, 224, 205, 0.15)"
            >
              <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-(--color-primary)/10 transition-colors">
                <span class="material-symbols-outlined text-(--text-muted) group-hover:text-(--color-primary)">
                  search_insights
                </span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">
                4. Search &amp; Explore
              </h4>
              <p class="text-sm text-(--text-muted) leading-relaxed">
                Query your knowledge base in natural language to find hidden
                links.
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-auto px-6 py-32 text-center">
          <SpotlightCard
            className="p-10 md:p-16 !rounded-4xl bg-linear-to-b from-(--bg-card) to-(--bg-dark) border border-white/5"
            spotlightColor="rgba(31, 224, 205, 0.15)"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
              >
                hub
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to map your <br />
              knowledge base?
            </h2>
            <p class="text-(--text-muted) mb-10 max-w-lg mx-auto">
              Join the AI enhanced student community using GraphIQ to uncover
              hidden connections in document data.
            </p>
            <div class="flex items-center justify-center">
              <StarBorder
                as="button"
                color="#1fe0cd"
                speed="4s"
                thickness={2}
                className="shadow-2xl shadow-(--color-primary)/20 cursor-pointer hover:scale-[1.02] transition-transform text-lg"
                onClick={() => navigate("/signup")}
              >
                Get Started Now
              </StarBorder>
            </div>
          </SpotlightCard>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
