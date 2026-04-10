"use client";

import type { ChangeEvent, RefObject } from "react";

type Props = {
  dumpRef: RefObject<HTMLTextAreaElement | null>;
  uploadStatus: string;
  imagePreviews: Array<{ name: string; url: string }>;
  onDocsChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImagesChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function DumpPanel({
  dumpRef,
  uploadStatus,
  imagePreviews,
  onDocsChange,
  onImagesChange,
}: Props) {
  return (
    <div className="panel h-full">
      <div className="pglow" />
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="zlabel">The Dump</div>
          <span className="text-[10px] tracking-widest uppercase text-[color:rgba(168,155,168,0.4)]">
            Source Material
          </span>
        </div>

        <div className="relative flex-1 flex flex-col gap-4">
          <textarea
            ref={dumpRef}
            id="dump-textarea"
            className="w-full flex-1 bg-[var(--surface-variant)] rounded-xl border border-[var(--outline)] focus:border-[var(--coral)] focus:ring-1 focus:ring-[color:rgba(255,77,109,0.2)] text-[var(--on-surface)] p-6 text-base resize-none placeholder:text-[var(--outline)] min-h-[200px]"
            placeholder="Paste your research paper or lecture notes here..."
          />

          <input
            type="file"
            id="file-docs"
            className="hidden"
            multiple
            accept=".pdf,.ppt,.pptx,.txt,text/plain,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
            onChange={onDocsChange}
          />
          <input
            type="file"
            id="file-images"
            className="hidden"
            multiple
            accept="image/*"
            onChange={onImagesChange}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <label
              htmlFor="file-docs"
              className="flex-1 flex items-center justify-center gap-2 bg-[var(--surface-high)] border border-[var(--outline)] hover:border-[var(--coral)] transition-colors py-4 rounded-lg text-xs uppercase font-bold text-[var(--on-surface-variant)] hover:text-[var(--coral)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">
                upload_file
              </span>
              PDF / PPT / Text File
            </label>
            <label
              htmlFor="file-images"
              className="flex-1 flex items-center justify-center gap-2 bg-[var(--surface-high)] border border-[var(--outline)] hover:border-[var(--mint)] transition-colors py-4 rounded-lg text-xs uppercase font-bold text-[var(--on-surface-variant)] hover:text-[var(--mint)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">image</span>
              Image
            </label>
          </div>

          <p
            className="text-[11px] text-[color:rgba(168,155,168,0.9)] leading-relaxed"
            role="status"
            aria-live="polite"
          >
            {uploadStatus}
          </p>

          <div className="flex flex-wrap gap-2">
            {imagePreviews.map((p) => (
              <div
                key={p.url}
                className="relative h-16 w-16 rounded-lg overflow-hidden border border-[var(--outline)] shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.url}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
