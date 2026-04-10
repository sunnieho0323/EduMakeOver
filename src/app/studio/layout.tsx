import type { ReactNode } from "react";
import Link from "next/link";
import { STUDIO_FOOTER_NAV, STUDIO_MAIN_NAV } from "@/components/studio/studioNav";
import { StudioLayoutClient } from "@/components/StudioLayoutClient";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] overflow-hidden min-h-screen">
      <div
        id="sidebar-backdrop"
        className="fixed inset-0 z-40 bg-black/60 lg:hidden cursor-pointer"
        role="presentation"
        aria-hidden="true"
      />

      <div className="orbs" aria-hidden="true">
        <div className="o o1" />
        <div className="o o2" />
        <div className="o o3" />
      </div>

      <nav
        id="studio-sidebar"
        className="h-screen w-64 max-w-[85vw] fixed left-0 top-0 bg-[#0c0a0c] flex flex-col p-6 border-r border-[var(--outline)] z-50 transition-transform duration-300 ease-out shadow-2xl shadow-black/50"
      >
        <div className="mb-10">
          <div className="flex items-center justify-between gap-3">
            <Link
              className="flex items-center gap-3 min-w-0 hover:opacity-90 transition-opacity"
              href="/"
            >
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="#080608"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-black truncate">
                Edu<span className="text-[var(--coral)]">Makeover</span>
              </span>
            </Link>

            <button
              type="button"
              id="sidebar-close"
              className="lg:hidden shrink-0 p-2 rounded-lg text-[var(--on-surface-variant)] hover:bg-[var(--surface-high)] hover:text-[var(--on-surface)] transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="mt-4">
            <p className="text-[10px] uppercase tracking-widest text-[var(--on-surface-variant)]">
              Creator Studio
            </p>
            <p className="text-xs font-black text-[var(--gold)]">
              Academic Mode
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          {STUDIO_MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              className="flex items-center gap-3 text-[var(--on-surface-variant)] px-4 py-3 hover:bg-[var(--surface-high)] hover:text-[var(--on-surface)] transition-all rounded-lg"
              href={item.href}
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="space-y-1 border-t border-[var(--outline)] pt-4">
          {STUDIO_FOOTER_NAV.map((item) => (
            <a
              key={item.label}
              className="flex items-center gap-3 text-[var(--on-surface-variant)] px-4 py-2 hover:text-[var(--on-surface)] transition-all"
              href={item.href}
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              <span className="text-xs">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <main className="lg:ml-64 ml-0 h-screen overflow-y-auto relative z-10">
        {children}
      </main>

      <StudioLayoutClient />
    </div>
  );
}
