type Accent = "coral" | "gold" | "mint";

const accentBg: Record<Accent, string> = {
  coral: "bg-[color:rgba(255,77,109,0.1)] group-hover:bg-[color:rgba(255,77,109,0.2)]",
  gold: "bg-[color:rgba(240,192,96,0.1)] group-hover:bg-[color:rgba(240,192,96,0.2)]",
  mint: "bg-[color:rgba(0,212,170,0.1)] group-hover:bg-[color:rgba(0,212,170,0.2)]",
};

const accentText: Record<Accent, string> = {
  coral: "text-[var(--coral)]",
  gold: "text-[var(--gold)]",
  mint: "text-[var(--mint)]",
};

export function IntroFeatureCard({
  icon,
  title,
  body,
  accent,
}: {
  icon: string;
  title: string;
  body: string;
  accent: Accent;
}) {
  return (
    <div className="intro-card group">
      <div
        className={`w-10 h-10 rounded-lg ${accentBg[accent]} flex items-center justify-center mb-6 transition-colors`}
      >
        <span
          className={`material-symbols-outlined ${accentText[accent]} text-xl`}
        >
          {icon}
        </span>
      </div>
      <h5 className="font-bold text-lg text-[var(--on-surface)] mb-3">
        {title}
      </h5>
      <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}
