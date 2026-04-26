import { ArrowRight, Code2, Newspaper } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/sections/FadeIn";

const cs = {
  icon: Code2,
  eyebrow: "Engineering",
  title: "Shipping software, day and night",
  description:
    "Master's in Computer Science at Northeastern. By day, building production data and social products; by night, AI-driven side projects spanning narrative games, OSINT visualization, and legal-ed.",
  highlights: [
    "Dancefloor.social — current focus: social network for the global dance community (private beta)",
    "OpenHousing.ca — AI housing-transparency platform mapping Vancouver's rental market and ownership data",
    "Side projects: Trust Me I'm an AI · Red Threads OSINT · Justice Journeys",
    "Stack: TypeScript, React/Next.js, Node, Python ML, AWS, Azure",
  ],
  cta: { label: "Browse my work", href: "#work" },
  accent: "from-primary/30 via-primary/10 to-transparent",
};

const journo = {
  icon: Newspaper,
  eyebrow: "Journalism",
  title: "Award-winning environmental reporting",
  description:
    "More than a decade of investigative environmental journalism — from China's marine conservation to Canada's housing equity. Field-reporter at COP22–COP26.",
  highlights: [
    "Article on illegal land reclamation in Zhanjiang approved by Premier Li Keqiang",
    "Reports prompted real policy change — fines, blacklists, and a rare police apology",
    "Earth Journalism Network and China Dialogue fellow at three UN climate summits",
    "U.S. State Department International Visitor Leadership Program · Singapore Asian Environmental Journalism Award",
  ],
  cta: { label: "Read the stories", href: "#globe" },
  accent: "from-accent/30 via-accent/10 to-transparent",
};

export function Tracks() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {[cs, journo].map((track, i) => {
        const Icon = track.icon;
        return (
          <FadeIn key={track.eyebrow} delay={i * 0.08}>
            <Link
              href={track.cta.href}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl"
            >
              <div
                aria-hidden="true"
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${track.accent} opacity-60 blur-3xl transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    {track.eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65 sm:text-base">
                  {track.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/75">
                  {track.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {track.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </FadeIn>
        );
      })}
    </div>
  );
}
