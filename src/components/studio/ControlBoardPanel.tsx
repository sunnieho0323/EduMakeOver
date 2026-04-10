"use client";

import Link from "next/link";

export type ControlMode = "meme" | "gif" | "slang";

function modeLabel(mode: ControlMode) {
  switch (mode) {
    case "meme":
      return "Meme Mode";
    case "gif":
      return "GIF Pack";
    case "slang":
      return "Gen-Z Slang";
  }
}

const MODES: Array<{
  mode: ControlMode;
  icon: string;
}> = [
  { mode: "meme", icon: "sentiment_very_satisfied" },
  { mode: "gif", icon: "gif_box" },
  { mode: "slang", icon: "rocket_launch" },
];

type Props = {
  controlMode: ControlMode;
  onModeChange: (m: ControlMode) => void;
};

export function ControlBoardPanel({ controlMode, onModeChange }: Props) {
  return (
    <div className="panel h-full">
      <div className="pglow" />
      <div className="p-8 flex flex-col h-full">
        <div className="zlabel mb-8">Control Board</div>

        <div className="space-y-10 flex-1">
          <div className="grid grid-cols-3 gap-4">
            {MODES.map((b) => {
              const active = controlMode === b.mode;
              return (
                <button
                  key={b.mode}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onModeChange(b.mode)}
                  className={
                    active
                      ? "flex flex-col items-center justify-center gap-3 p-6 rounded-xl btn-gradient"
                      : "flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-[var(--surface-variant)] border border-[var(--outline)] text-[var(--on-surface-variant)] hover:border-[var(--mint)] hover:text-[var(--mint)] transition-all"
                  }
                >
                  <span className="material-symbols-outlined text-2xl">
                    {b.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    {modeLabel(b.mode)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
                Brainrot Level
              </label>
              <span className="font-bold text-base text-[var(--coral)] uppercase italic">
                Maximum Chaos
              </span>
            </div>
            <input
              className="w-full h-1.5 bg-[var(--outline)] rounded-lg appearance-none cursor-pointer accent-[var(--coral)]"
              max={100}
              min={0}
              type="range"
              defaultValue={85}
            />
            <div className="flex justify-between text-[10px] font-bold text-[color:rgba(168,155,168,0.4)] tracking-wider">
              <span>ACADEMIC RIGOR</span>
              <span>PURE BRAINROT</span>
            </div>
            <div className="w-full">
              <Link
                href="/studio/edit"
                className="inline-flex w-full justify-center items-center px-14 sm:px-20 md:px-28 py-4 btn-gradient rounded-xl text-xs font-black uppercase whitespace-nowrap tracking-[0.14em] sm:tracking-widest shadow-xl shadow-[color:rgba(255,77,109,0.2)]"
              >
                GENERATE STUDIO PACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
