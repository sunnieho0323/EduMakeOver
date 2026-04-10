export function CanvasPreview() {
  return (
    <div className="rounded-[26px] bg-[#d1d1d1] text-black overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.55)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px]">
        <div className="p-10 sm:p-12">
          <h2 className="text-5xl font-black tracking-tight">TitleTitle</h2>
          <p className="mt-6 text-base text-black/60 max-w-md leading-relaxed">
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </p>

          <div className="mt-12 flex items-center gap-6 text-xs font-bold tracking-[0.18em] uppercase text-black/45">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
              Refine with AI
            </span>
            <span>2026 Editorial</span>
          </div>
        </div>

        <div className="bg-black/10 p-6 flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.imgflip.com/1yxkcp.jpg"
              alt="Meme preview"
              className="w-[320px] max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
