"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import type { JournalismArticle } from "@/types/content";

export function StoryDialog({
  article,
  onClose,
}: {
  article: JournalismArticle | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!article) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-video w-full bg-muted">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
                unoptimized={article.image.src.startsWith("http")}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex flex-wrap items-center gap-2 text-xs text-white/90">
                <span className="rounded-full bg-primary px-2.5 py-1 font-semibold">
                  {article.category}
                </span>
                {article.coords && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-medium backdrop-blur-sm">
                    <MapPin className="h-3 w-3" />
                    {article.coords.location}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-medium backdrop-blur-sm">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </span>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-3">
                {article.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug">{link.label}</p>
                      {link.subLabel && (
                        <p className="mt-0.5 text-xs text-foreground/50">{link.subLabel}</p>
                      )}
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40 transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-foreground/80">
                {article.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <Link
                  href={`/journalism/${article.region}`}
                  className="text-xs font-semibold uppercase tracking-wider text-primary transition-opacity hover:opacity-80"
                >
                  View all {article.region === "canada" ? "Canadian" : "Chinese"} stories →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
