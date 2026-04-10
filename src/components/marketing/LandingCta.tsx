import Link from "next/link";

export function LandingCta() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto bg-black/20 rounded-2xl p-12 text-center border border-[color:rgba(255,255,255,0.08)] shadow-[0_40px_80px_rgba(253,155,100,0.05)]">
        <h2 className="text-5xl md:text-6xl font-black mb-8">
          Ready to{" "}
          <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--gold)] bg-clip-text text-transparent">
            Educate
          </span>{" "}
          the Masses?
        </h2>
        <p className="text-xl text-[var(--on-surface-variant)] mb-12 max-w-2xl mx-auto">
          Join 5,000+ creators who have stopped making boring content and
          started building high-impact academic movements.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/studio/generate"
            className="inline-flex items-center justify-center px-12 py-5 btn-gradient rounded-md font-black text-xl hover:scale-105 active:scale-95 transition-transform"
          >
            Launch Studio
          </Link>
          <button
            type="button"
            className="px-12 py-5 bg-white text-black rounded-md font-black text-xl hover:bg-[var(--on-surface-variant)] hover:text-white transition-colors"
          >
            View Samples
          </button>
        </div>
      </div>
    </section>
  );
}
