export function StudioUserChip({
  name = "Alex Curator",
  badge = "Pro Mode",
  className = "",
}: {
  name?: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      <div className="text-right leading-tight hidden sm:block">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] text-[var(--gold)] uppercase font-bold tracking-tighter">
          {badge}
        </p>
      </div>
      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-[var(--coral)] p-0.5">
        <div className="h-full w-full rounded-full bg-[color:rgba(255,255,255,0.08)]" />
      </div>
    </div>
  );
}
