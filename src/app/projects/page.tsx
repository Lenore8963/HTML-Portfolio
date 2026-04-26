import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/sections/FadeIn";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { personalProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Personal projects",
  description:
    "Personal experiments at the intersection of AI, narrative, and visualization — Trust Me I'm an AI, Red Threads OSINT, Justice Journeys.",
};

export default function PersonalProjectsPage() {
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
              <Sparkles className="h-3.5 w-3.5" /> Personal
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Personal <span className="text-gradient">experiments</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base text-foreground/65 sm:text-lg">
              Side projects at the intersection of AI, narrative, and visualization — built to test
              ideas, not specs.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-16" size="xl">
        <ProjectsGrid projects={personalProjects} cols={3} />
        <FadeIn className="mt-16 flex flex-wrap items-center justify-center gap-3 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            See industry work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/school"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            School &amp; hackathons
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Container>
    </>
  );
}
