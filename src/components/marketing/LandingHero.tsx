import Link from "next/link";

export function LandingHero() {
  return (
    <section className="relative min-h-[850px] flex items-center justify-center overflow-hidden px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] btn-gradient opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            BORING <br /> ACADEMIC CONTENT?{" "}
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--gold)] bg-clip-text text-transparent">
              WE HELP YOU.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--on-surface-variant)] max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Stop putting your audience to sleep. Transforming dry academic text
            into easy-to-understand MEMEs and viral social content in seconds.
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <Link
              href="/studio/generate"
              className="inline-flex items-center justify-center px-8 py-4 btn-gradient rounded-md font-black text-lg hover:scale-95 active:scale-90 transition-transform shadow-[0_20px_40px_rgba(253,155,100,0.2)]"
            >
              Try Meme Mode
            </Link>
            <button
              type="button"
              className="px-8 py-4 bg-[var(--surface-high)] border border-[color:rgba(255,255,255,0.08)] rounded-md font-black text-lg hover:bg-[color:rgba(255,255,255,0.06)] transition-all"
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="bg-[var(--surface-high)] p-6 rounded-xl shadow-[0_40px_40px_rgba(253,155,100,0.08)] border border-[color:rgba(255,255,255,0.08)] rotate-3">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest text-[var(--coral)] font-black">
                Transformation Active
              </span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--coral)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--gold)]" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-[color:rgba(255,255,255,0.05)] rounded-full" />
              <div className="h-4 w-full bg-[color:rgba(255,255,255,0.05)] rounded-full" />
              <div className="h-4 w-1/2 btn-gradient rounded-full" />
            </div>
            <div className="mt-8 bg-black/30 rounded-lg p-4 border border-[color:rgba(255,255,255,0.08)] text-center">
              <p className="text-2xl font-black italic">
                &quot;When the thesis is finally 100% brainrot compliant.&quot;
              </p>
              <div className="mt-4 aspect-video bg-black/30 rounded-md overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl bg-gradient-to-r from-[var(--coral)] to-[var(--gold)] bg-clip-text text-transparent">
                  mood
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
