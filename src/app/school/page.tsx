import type { Metadata } from "next";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { CertificationGallery } from "@/components/sections/CertificationGallery";
import { FadeIn } from "@/components/sections/FadeIn";
import { HackathonCard } from "@/components/sections/HackathonCard";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hackathons, schoolProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "School & Hackathons",
  description:
    "Academic projects, hackathon wins, and certifications from my Master's in Computer Science at Northeastern.",
};

export default function SchoolPage() {
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
              <GraduationCap className="h-3.5 w-3.5" /> Education
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              School &amp; <span className="text-gradient">achievements</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base text-foreground/65 sm:text-lg">
              Master of Computer Science · Northeastern University · 2022–2025. Academic projects,
              hackathon wins, and certifications.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-16" size="xl">
        <section>
          <FadeIn>
            <SectionHeading icon={<GraduationCap className="h-7 w-7" />} eyebrow="Coursework">
              Academic projects
            </SectionHeading>
          </FadeIn>
          <ProjectsGrid projects={schoolProjects} cols={3} />
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading icon={<Trophy className="h-7 w-7" />} eyebrow="Competitions">
              Hackathons
            </SectionHeading>
          </FadeIn>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:gap-8">
            {hackathons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <HackathonCard item={item} />
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading icon={<Award className="h-7 w-7" />} eyebrow="Credentials">
              Certifications
            </SectionHeading>
          </FadeIn>
          <CertificationGallery />
        </section>
      </Container>
    </>
  );
}
