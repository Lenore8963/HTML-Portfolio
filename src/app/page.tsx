import { ArrowRight, Briefcase, Globe2, GraduationCap, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/sections/FadeIn";
import { Hero } from "@/components/sections/Hero";
import { JournalismGlobe } from "@/components/sections/JournalismGlobe";
import { SkillsMarquee } from "@/components/sections/Marquee";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Stats } from "@/components/sections/Stats";
import { Tracks } from "@/components/sections/Tracks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalProjects, workProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Container className="pb-24" size="xl">
        <FadeIn as="section" className="-mt-10">
          <Stats />
        </FadeIn>

        <section className="mt-24">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Two careers, one curious mind
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              The highlights, on both sides
            </h2>
          </FadeIn>
          <div className="mt-12">
            <Tracks />
          </div>
        </section>

        {/* GLOBE */}
        <section id="globe" className="mt-28">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeading icon={<Globe2 className="h-7 w-7" />} eyebrow="Reporting from the field">
              Stories from around the world
            </SectionHeading>
            <p className="mx-auto -mt-6 max-w-xl text-balance text-foreground/65">
              Fifteen investigations across four continents — from a Burnaby tree-sit to the
              Galápagos. Spin the globe and click any marker to read the story.
            </p>
          </FadeIn>
          <div className="mt-12">
            <JournalismGlobe />
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mt-28">
          <FadeIn className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              icon={<Briefcase className="h-7 w-7" />}
              eyebrow="Industry"
              align="left"
              className="mb-0"
            >
              Work in production
            </SectionHeading>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:opacity-80"
            >
              All work <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <p className="mx-auto mt-2 mb-10 max-w-2xl text-foreground/65">
            What I&apos;m building day-to-day — data-rich consumer and B2B platforms shipped to real
            users.
          </p>
          <ProjectsGrid projects={workProjects} cols={2} />
        </section>

        {/* PERSONAL */}
        <section id="personal" className="mt-28">
          <FadeIn className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              icon={<Sparkles className="h-7 w-7" />}
              eyebrow="Personal"
              align="left"
              className="mb-0"
            >
              Side experiments
            </SectionHeading>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:opacity-80"
            >
              All experiments <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <p className="mx-auto mt-2 mb-10 max-w-2xl text-foreground/65">
            Late-night experiments at the intersection of AI, narrative, and visualization.
          </p>
          <ProjectsGrid projects={personalProjects} cols={3} compact />
        </section>

        {/* SCHOOL link card */}
        <FadeIn as="section" className="mt-28">
          <Link
            href="/school"
            className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl sm:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--gradient-from),_transparent_60%)]"
            />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Education
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    School projects, hackathons &amp; certifications
                  </h3>
                  <p className="mt-2 text-sm text-foreground/65">
                    Master&apos;s coursework at Northeastern, two hackathon wins, and verified
                    cloud / Java credentials.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 self-start rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform group-hover:-translate-y-0.5 sm:self-center">
                Browse
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </FadeIn>
      </Container>

      <FadeIn as="section" className="my-12">
        <FadeIn className="mx-auto mb-6 max-w-2xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Toolkit
          </span>
          <h2 className="mt-2 flex items-center justify-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <Wrench className="h-7 w-7 text-primary" /> Skills &amp; tools
          </h2>
        </FadeIn>
        <SkillsMarquee />
      </FadeIn>

      <Container className="pb-24" size="xl">
        <FadeIn as="section" className="mt-20">
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--gradient-from),_transparent_70%)]"
            />
            <Sparkles className="mx-auto h-7 w-7 text-primary" />
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build or break a story together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/65">
              Whether you have a software project, an investigation, or a wild idea — I&apos;d love
              to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
