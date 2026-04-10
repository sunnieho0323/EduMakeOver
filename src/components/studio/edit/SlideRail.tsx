import Link from "next/link";
import { SLIDE_THUMBS } from "./slideThumbs";

export function SlideRail() {
  return (
    <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)]">
      <div className="rounded-2xl border border-[color:rgba(61,48,64,0.6)] bg-[color:rgba(16,13,16,0.6)] backdrop-blur-md p-4 space-y-4">
        <Link
          href="/studio/generate"
          className="text-xs uppercase tracking-[0.18em] text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] transition-colors inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to studio
        </Link>

        <button
          type="button"
          className="w-full btn-gradient rounded-full py-3 text-xs font-black uppercase tracking-[0.22em]"
        >
          + Add slide
        </button>

        <div className="pt-2 space-y-3">
          {SLIDE_THUMBS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`group w-full text-left rounded-2xl border transition-all overflow-hidden ${
                s.active
                  ? "border-[color:rgba(255,77,109,0.55)] shadow-[0_0_0_1px_rgba(255,77,109,0.25)]"
                  : "border-[color:rgba(61,48,64,0.55)] hover:border-[color:rgba(240,192,96,0.45)]"
              }`}
              aria-pressed={s.active}
            >
              <div className={`h-20 ${s.bg} relative`}>
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[var(--coral)] blur-2xl opacity-30" />
                  <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[var(--mint)] blur-2xl opacity-20" />
                </div>
                <div className="absolute bottom-2 left-3 text-[10px] font-black tracking-[0.22em] text-[color:rgba(255,255,255,0.55)]">
                  {s.id}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
