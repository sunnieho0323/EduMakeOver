"use client";

import type { ChangeEvent } from "react";
import { useCallback, useRef, useState } from "react";
import {
  ControlBoardPanel,
  type ControlMode,
} from "@/components/studio/ControlBoardPanel";
import { DumpPanel } from "@/components/studio/DumpPanel";
import { INTRO_FEATURES } from "@/components/studio/introFeatures";
import { IntroFeatureCard } from "@/components/studio/IntroFeatureCard";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";

export default function GeneratePageClient() {
  const [controlMode, setControlMode] = useState<ControlMode>("meme");
  const [uploadStatus, setUploadStatus] = useState("");
  const [imagePreviews, setImagePreviews] = useState<
    Array<{ name: string; url: string }>
  >([]);
  const dumpRef = useRef<HTMLTextAreaElement | null>(null);

  const onDocsChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length) return;

      const notes: string[] = [];
      const insertions: string[] = [];

      await Promise.all(
        Array.from(files).map(async (file) => {
          const isTxt =
            file.type === "text/plain" || /\.txt$/i.test(file.name);
          if (isTxt) {
            try {
              const text = await file.text();
              insertions.push(`--- ${file.name} ---\n${text}`);
              notes.push(`${file.name} (text inserted)`);
            } catch {
              notes.push(`${file.name} (read failed)`);
            }
          } else {
            notes.push(`${file.name} (PDF/PPT — processing later)`);
          }
        }),
      );

      if (dumpRef.current && insertions.length) {
        dumpRef.current.value +=
          (dumpRef.current.value ? "\n\n" : "") + insertions.join("\n\n");
      }

      setUploadStatus(`Documents: ${notes.join(" · ")}`);
      e.target.value = "";
    },
    [],
  );

  const onImagesChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length) return;

      const next: Array<{ name: string; url: string }> = [];
      const parts: string[] = [];

      Array.from(files).forEach((file) => {
        if (!file.type?.startsWith("image/")) return;
        const kb = (file.size / 1024).toFixed(1);
        parts.push(`${file.name} (${kb} KB)`);
        next.push({ name: file.name, url: URL.createObjectURL(file) });
      });

      setImagePreviews((prev) => {
        prev.forEach((p) => URL.revokeObjectURL(p.url));
        return next;
      });
      setUploadStatus(parts.length ? `Images: ${parts.join(" · ")}` : "");
      e.target.value = "";
    },
    [],
  );

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 lg:pt-12 pb-24">
      <StudioPageHeader
        title={
          <>
            Academic <span className="text-[var(--coral)]">Ascension</span>
          </>
        }
        subtitle="Transforming clinical data into viral curriculum."
      />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DumpPanel
              dumpRef={dumpRef}
              uploadStatus={uploadStatus}
              imagePreviews={imagePreviews}
              onDocsChange={onDocsChange}
              onImagesChange={onImagesChange}
            />
            <ControlBoardPanel
              controlMode={controlMode}
              onModeChange={setControlMode}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {INTRO_FEATURES.map((f) => (
              <IntroFeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
