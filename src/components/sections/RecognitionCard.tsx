"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import type { JournalismRecognition } from "@/types/content";

export function RecognitionCard({ item }: { item: JournalismRecognition }) {
  const [open, setOpen] = useState(false);
  const isRemote = item.image?.src.startsWith("http") ?? false;

  return (
    <>
      <article className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card">
        <header className="border-b border-border bg-muted/40 px-5 py-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            {item.category}
          </span>
        </header>
        {item.title && (
          <div className="px-5 py-4">
            {item.titleHref ? (
              <a
                href={item.titleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-1.5 text-sm font-semibold leading-snug transition-colors hover:text-primary"
              >
                <span>{item.title}</span>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
              </a>
            ) : (
              <p className="text-sm font-semibold leading-snug">{item.title}</p>
            )}
          </div>
        )}
        {item.image && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative block aspect-video w-full overflow-hidden bg-muted"
            aria-label={`Open image: ${item.image.alt}`}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              unoptimized={isRemote}
            />
          </button>
        )}
        <ul className="space-y-2 px-5 py-5 text-sm leading-relaxed text-foreground/80">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
      {item.image && (
        <Lightbox
          src={open ? item.image.src : null}
          alt={item.image.alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
