import type { Metadata } from "next";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/sections/FadeIn";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { workProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Industry projects: production engineering on OpenHousing and Dancefloor — building data-rich, customer-facing platforms.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--gradient-from),_transparent_70%)]"
        />
        <Container className="pt-20 pb-14">
          <FadeIn className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Briefcase className="h-3.5 w-3.5" /> Industry
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Work in <span className="text-gradient">production</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base text-foreground/65 sm:text-lg">
              The platforms I help ship every day — data-rich products serving real users,
              policymakers, and communities.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-16" size="xl">
        <ProjectsGrid projects={workProjects} cols={2} />
        <FadeIn className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            See personal experiments
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Container>
    </>
  );
}
