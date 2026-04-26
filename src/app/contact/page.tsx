import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/sections/FadeIn";
import { Container } from "@/components/ui/Container";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
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
              <MessageCircle className="h-3.5 w-3.5" /> Say hi
            </span>
            <div className="mt-6 relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-card shadow-lg">
              <Image
                src="/images/chen.jpg"
                alt={`Profile photo of ${site.name}`}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="mt-4 max-w-md text-foreground/60">
              The fastest way to reach me is by email. I respond within a few days.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container size="md" className="pt-12 pb-20">
        <FadeIn delay={0.1} className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Email
              </p>
              <p className="mt-1 break-all text-sm font-semibold transition-colors group-hover:text-primary">
                {site.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Address
              </p>
              <address className="mt-1 text-sm not-italic text-foreground/80">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
                <br />
                {site.address.line4}
              </address>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Find me on
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </>
  );
}
