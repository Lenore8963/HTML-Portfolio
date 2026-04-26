"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats: { value: number; suffix?: string; label: string; sublabel: string }[] = [
  { value: 15, suffix: "+", label: "Investigative stories", sublabel: "across 4 continents" },
  { value: 2, suffix: "×", label: "Hackathon champion", sublabel: "leading winning teams" },
  { value: 7, suffix: "+", label: "Major awards", sublabel: "for environmental journalism" },
  { value: 10, suffix: "+", label: "Programming languages", sublabel: "in active toolkit" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  return (
    <motion.span ref={ref} aria-label={`${to}${suffix}`}>
      {display}
    </motion.span>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="bg-card p-6 sm:p-8"
        >
          <div className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            <Counter to={stat.value} suffix={stat.suffix} />
          </div>
          <p className="mt-3 text-sm font-semibold">{stat.label}</p>
          <p className="mt-1 text-xs text-foreground/55">{stat.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}
