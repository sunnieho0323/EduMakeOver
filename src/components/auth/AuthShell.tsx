import type { ReactNode } from "react";
import { AuthPageFooter } from "./AuthPageFooter";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--on-surface)] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-[120px] bg-[#fd9b64]/5" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-[#ff6b96]/5" />
      </div>

      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        {children}
      </main>

      <AuthPageFooter />
    </div>
  );
}
