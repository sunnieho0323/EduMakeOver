import type { ReactNode } from "react";
import { StudioUserChip } from "./StudioUserChip";

type Props = {
  title: ReactNode;
  subtitle: string;
  variant?: "generate" | "edit";
};

export function StudioPageHeader({ title, subtitle, variant = "generate" }: Props) {
  const isEdit = variant === "edit";
  const titleClass = isEdit
    ? "text-3xl sm:text-4xl font-black tracking-tight uppercase leading-none"
    : "text-2xl sm:text-4xl font-black tracking-tight uppercase leading-none";
  const subtitleClass = isEdit
    ? "text-[11px] sm:text-xs text-[var(--on-surface-variant)] uppercase tracking-[0.22em] mt-2"
    : "text-[var(--on-surface-variant)] text-xs mt-2 uppercase tracking-widest font-medium";

  return (
    <div
      className={`flex items-start justify-between gap-4 ${
        isEdit ? "mb-6 sm:mb-8" : "mb-8 sm:mb-10"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <button
          type="button"
          id="sidebar-toggle"
          className="lg:hidden shrink-0 p-2 rounded-lg border border-[var(--outline)] bg-[color:rgba(255,255,255,0.03)] text-[var(--on-surface)] hover:border-[color:rgba(255,77,109,0.5)] transition-colors"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div className="min-w-0">
          <h1 className={titleClass}>{title}</h1>
          <p className={subtitleClass}>{subtitle}</p>
        </div>
      </div>
      <StudioUserChip />
    </div>
  );
}
