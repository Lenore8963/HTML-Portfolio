import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

export function Container({
  children,
  size = "lg",
  className,
}: {
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>{children}</div>;
}
