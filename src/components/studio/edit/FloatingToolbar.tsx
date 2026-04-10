import { EDIT_TOOLBAR } from "./editToolbar";

export function FloatingToolbar() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex items-center gap-2 rounded-full border border-[color:rgba(61,48,64,0.6)] bg-[color:rgba(8,6,8,0.75)] backdrop-blur-md px-2 py-2 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        {EDIT_TOOLBAR.map((t) => (
          <button
            key={t.label}
            type="button"
            className={`flex flex-col items-center justify-center w-[64px] sm:w-[72px] py-2 rounded-full transition-colors ${
              t.active
                ? "bg-[var(--coral)] text-[var(--bg)]"
                : "text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
            }`}
            aria-pressed={t.active === true}
          >
            <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
            <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em]">
              {t.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
