"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import type { JournalismArticle } from "@/types/content";

export function JournalismCard({ article }: { article: JournalismArticle }) {
  const [open, setOpen] = useState(false);
  const isRemote = article.image.src.startsWith("http");

  return (
    <>
      <article className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
        <header className="border-b border-border bg-muted/40 px-5 py-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            {article.category}
          </span>
        </header>
        <div className="space-y-2 px-5 py-4">
          {article.links.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-1.5 text-sm font-semibold leading-snug text-foreground transition-colors hover:text-primary"
              >
                <span>{link.label}</span>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
              </a>
              {link.subLabel && (
                <p className="mt-0.5 text-xs text-foreground/50">{link.subLabel}</p>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block aspect-video w-full overflow-hidden bg-muted"
          aria-label={`Open image: ${article.image.alt}`}
        >
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            unoptimized={isRemote}
          />
        </button>
        <p className="px-5 pt-3 text-xs text-foreground/50">{article.date}</p>
        <ul className="space-y-2 px-5 pb-5 pt-3 text-sm leading-relaxed text-foreground/80">
          {article.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
      <Lightbox
        src={open ? article.image.src : null}
        alt={article.image.alt}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
