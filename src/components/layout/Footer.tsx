import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-muted/30">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="mt-1 text-xs text-foreground/60">
              © {year} {site.name}. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="#top"
                className="text-foreground/70 transition-colors hover:text-primary"
              >
                Back to top
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
