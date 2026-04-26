import { ImageOff, PlayCircle } from "lucide-react";
import Image from "next/image";
import type { ProjectMedia as ProjectMediaType } from "@/types/content";

export function ProjectMedia({ media }: { media: ProjectMediaType }) {
  if (media.kind === "itch") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-muted">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fa5c5c] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/40 ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-105">
            <PlayCircle className="h-4 w-4 fill-white/20" />
            Play on itch.io
          </span>
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          itch.io
        </span>
      </div>
    );
  }

  if (media.kind === "youtube") {
    const thumb = `https://img.youtube.com/vi/${media.videoId}/maxresdefault.jpg`;
    return (
      <div className="relative h-full w-full overflow-hidden bg-muted">
        <Image
          src={thumb}
          alt="Project demo thumbnail"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          <PlayCircle className="h-3 w-3" /> Demo
        </span>
      </div>
    );
  }

  if (media.kind === "image") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-muted">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_color-mix(in_srgb,_var(--color-primary)_22%,_transparent),_transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,_color-mix(in_srgb,_var(--color-accent)_22%,_transparent),_transparent_55%)]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center text-7xl font-extrabold tracking-tighter text-foreground/15 sm:text-8xl"
      >
        {media.initials}
      </span>
      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm">
        <ImageOff className="h-3 w-3" /> Screenshot pending
      </span>
    </div>
  );
}
