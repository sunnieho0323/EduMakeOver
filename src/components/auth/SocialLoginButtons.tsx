export function SocialLoginButtons() {
  return (
    <>
      <div className="flex items-center gap-4 my-10 pl-2">
        <div className="h-px flex-1 bg-[#4a4748]/20" />
        <span className="text-[10px] text-[#4a4748] font-bold tracking-widest">
          EXTERNAL NODES
        </span>
        <div className="h-px flex-1 bg-[#4a4748]/20" />
      </div>

      <div className="grid grid-cols-2 gap-4 pl-2">
        <button
          type="button"
          className="bg-[#282526] hover:bg-[#2f2b2d] py-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-[color:rgba(74,71,72,0.1)] transition-all active:scale-95 group/social"
        >
          <span className="material-symbols-outlined text-[var(--on-surface-variant)] group-hover/social:text-[#fd9b64] transition-colors text-xl">
            hub
          </span>
          <span className="text-[10px] font-bold text-[var(--on-surface-variant)] group-hover/social:text-[var(--on-surface)]">
            GOOGLE
          </span>
        </button>
        <button
          type="button"
          className="bg-[#282526] hover:bg-[#2f2b2d] py-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-[color:rgba(74,71,72,0.1)] transition-all active:scale-95 group/social"
        >
          <span className="material-symbols-outlined text-[var(--on-surface-variant)] group-hover/social:text-[#ff6b96] transition-colors text-xl">
            blur_on
          </span>
          <span className="text-[10px] font-bold text-[var(--on-surface-variant)] group-hover/social:text-[var(--on-surface)]">
            DISCORD
          </span>
        </button>
      </div>
    </>
  );
}
