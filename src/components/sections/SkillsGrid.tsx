import { skillGroups } from "@/data/skills";
import { FadeIn } from "@/components/sections/FadeIn";

export function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skillGroups.map((group, i) => (
        <FadeIn
          key={group.heading}
          delay={i * 0.05}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <h3 className="text-lg font-semibold tracking-tight">{group.heading}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}
