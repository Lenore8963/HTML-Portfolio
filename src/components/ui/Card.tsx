import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "border-b border-border bg-muted/40 px-6 py-4 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("px-6 py-5", className)}>{children}</div>;
}

export function CardList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item, i) => (
        <li key={i} className="px-6 py-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
          {item}
        </li>
      ))}
    </ul>
  );
}
