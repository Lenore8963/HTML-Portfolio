import type { Metadata } from "next";
import { Globe2, Newspaper } from "lucide-react";
import Link from "next/link";
import { JournalismCard } from "@/components/sections/JournalismCard";
import { FadeIn } from "@/components/sections/FadeIn";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { Container } from "@/components/ui/Container";
import { canadaArticles, canadaSummary } from "@/data/journalism-canada";

export const metadata: Metadata = {
  title: "Journalism — Canada",
  description: canadaSummary,
};

export default function JournalismCanadaPage() {
  return (
    <>
      <ReadingProgress />
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--gradient-from),_transparent_70%)]"
        />
        <Container className="pt-20 pb-14">
          <FadeIn className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Newspaper className="h-3.5 w-3.5" /> Canada
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Journalism in <span className="text-gradient">Canada</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base text-foreground/65 sm:text-lg">
              {canadaSummary}
            </p>
            <Link
              href="/#globe"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:bg-muted"
            >
              <Globe2 className="h-4 w-4" /> See it on the globe
            </Link>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-16">
        <div className="masonry">
          {canadaArticles.map((article) => (
            <JournalismCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}
