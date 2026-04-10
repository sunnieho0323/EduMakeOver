import type { ReactNode } from "react";
import { MarketingFooter } from "@/components/MarketingFooter";
import { MarketingHeader } from "@/components/MarketingHeader";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingHeader />
      <main className="pt-24 flex-1">{children}</main>
      <MarketingFooter />
    </>
  );
}

