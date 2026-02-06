const LandingPage = () => {
  return (
    <>
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="mx-auto px-6 text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--color-primary)/10 border border-(--color-primary)/10 ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-primary) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-primary)"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-(--color-primary)">
              Thinking In Graphs
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
