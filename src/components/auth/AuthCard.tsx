import type { ReactNode } from "react";

export function AuthCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-xl border border-[color:rgba(74,71,72,0.2)] bg-[var(--surface-high)] p-8 xl:p-10 shadow-[0_40px_40px_rgba(253,155,100,0.08)]">
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-xl bg-gradient-to-b from-[#fd9b64] to-[#ff6b96]"
        aria-hidden
      />
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-8 pl-2">
        {title}
      </h2>
      {children}
    </div>
  );
}
