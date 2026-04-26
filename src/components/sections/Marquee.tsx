import { skillGroups } from "@/data/skills";

export function SkillsMarquee() {
  const items = skillGroups.flatMap((g) => g.items);
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="flex w-max animate-marquee gap-3 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/75"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
