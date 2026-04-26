import type { Metadata } from "next";
import { Heart, PawPrint } from "lucide-react";
import { FamilyCard } from "@/components/sections/FamilyCard";
import { FadeIn } from "@/components/sections/FadeIn";
import { Container } from "@/components/ui/Container";
import { family } from "@/data/family";

export const metadata: Metadata = {
  title: "Family",
  description: "Beloved family members — meet The Baron and Winnie.",
};

export default function FamilyPage() {
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
              <PawPrint className="h-3.5 w-3.5" /> At home
            </span>
            <h1 className="mt-5 flex items-center gap-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              <Heart className="h-9 w-9 text-primary" />
              Beloved family members
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base text-foreground/65 sm:text-lg">
              The fluffier half of the household — meet The Baron and Winnie.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container size="md" className="py-16">
        <div className="space-y-10">
          {family.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.05}>
              <FamilyCard member={member} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  );
}
