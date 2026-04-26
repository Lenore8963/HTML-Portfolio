import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  icon,
  children,
  align = "center",
  eyebrow,
  className,
}: {
  icon?: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {icon && <span className="text-primary">{icon}</span>}
        <span>{children}</span>
      </h2>
    </div>
  );
}
