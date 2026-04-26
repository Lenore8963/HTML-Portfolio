import { FadeIn } from "@/components/sections/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type Cols = 2 | 3;

export function ProjectsGrid({
  projects,
  cols = 3,
  compact = false,
  className,
}: {
  projects: Project[];
  cols?: Cols;
  compact?: boolean;
  className?: string;
}) {
  const gridCols = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={cn("grid gap-6 md:gap-8", gridCols, className)}>
      {projects.map((project, i) => (
        <FadeIn key={project.id} delay={i * 0.05} className="h-full">
          <ProjectCard project={project} compact={compact} />
        </FadeIn>
      ))}
    </div>
  );
}
