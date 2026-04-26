"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { certifications } from "@/data/certifications";

export function CertificationGallery() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="border-b border-border bg-muted/40 px-5 py-4 text-sm font-semibold leading-snug">
              {cert.title}
            </div>
            <button
              type="button"
              onClick={() => setOpen({ src: cert.image, alt: cert.alt })}
              className="relative aspect-[4/3] w-full overflow-hidden bg-muted"
              aria-label={`Open larger image: ${cert.alt}`}
            >
              <Image
                src={cert.image}
                alt={cert.alt}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-border px-5 py-3 text-xs font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              Verify credential
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
      <Lightbox
        src={open?.src ?? null}
        alt={open?.alt ?? ""}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
