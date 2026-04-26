import { ArrowUpRight, Calendar } from "lucide-react";
import { ProjectMedia } from "@/components/sections/ProjectMedia";
import type { Project } from "@/types/content";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const href =
    project.url ?? (project.media.kind === "youtube"
      ? `https://www.youtube.com/watch?v=${project.media.videoId}`
      : undefined);

  const isItchUrl = href?.includes("itch.io") ?? false;

  const cardClass =
    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl";

  const cover = (
    <div className="relative aspect-video w-full">
      <ProjectMedia media={project.media} />
      {project.year && (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm">
          <Calendar className="h-3 w-3" />
          {project.year}
        </span>
      )}
    </div>
  );

  const body = (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 className="flex items-start justify-between gap-2 text-xl font-bold tracking-tight">
          <span className="leading-tight">{project.title}</span>
          {href && (
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          )}
        </h3>
        <p className="mt-1 text-sm text-foreground/60">{project.tagline}</p>
        {project.role && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/80">
            {project.role}
          </p>
        )}
      </div>

      {project.tech.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground/70"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {!compact && project.description.length > 0 && (
        <ul className="space-y-2 text-sm leading-relaxed text-foreground/75">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      {compact && project.description[0] && (
        <p className="text-sm leading-relaxed text-foreground/70">{project.description[0]}</p>
      )}

      {project.url && (
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-xs text-foreground/50">
            {project.url.replace(/^https?:\/\//, "")}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
            {isItchUrl ? "Play on itch.io" : "Visit live"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {cover}
        {body}
      </a>
    );
  }
  return (
    <article className={cardClass}>
      {cover}
      {body}
    </article>
  );
}
