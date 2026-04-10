import { CanvasPreview } from "@/components/studio/edit/CanvasPreview";
import { FloatingToolbar } from "@/components/studio/edit/FloatingToolbar";
import { SlideRail } from "@/components/studio/edit/SlideRail";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";

export default function StudioEditPage() {
  return (
    <section className="px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto">
        <StudioPageHeader
          variant="edit"
          title={
            <>
              Academic <span className="text-[var(--coral)]">Ascension</span>
            </>
          }
          subtitle="Transforming clinical data into viral curriculum."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          <SlideRail />

          <div className="relative">
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[var(--coral)] blur-3xl opacity-15" />
              <div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-[var(--mint)] blur-3xl opacity-10" />
              <div className="absolute top-28 left-10 h-52 w-52 rounded-full bg-[var(--gold)] blur-3xl opacity-10" />
            </div>

            <div className="rounded-[28px] border border-[color:rgba(61,48,64,0.7)] bg-[color:rgba(16,13,16,0.55)] backdrop-blur-md p-5 sm:p-6">
              <CanvasPreview />
              <FloatingToolbar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
