import type { ReactNode } from "react";

export function PlaceholderPanel({
  label,
  children,
  actions,
}: {
  label: string;
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
      <div className="panel">
        <div className="pglow" />
        <div className="p-8">
          <div className="zlabel mb-6">{label}</div>
          <p className="text-[var(--on-surface-variant)]">{children}</p>
          <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </div>
  );
}
