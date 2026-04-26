"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 top-32 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>
      {/* grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,_color-mix(in_srgb,_var(--color-foreground)_8%,_transparent)_1px,_transparent_0)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,_black_30%,_transparent_75%)]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <MapPin className="h-3 w-3" />
          Based in Vancouver, BC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 text-balance text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block">{site.name}</span>
          <span className="mt-2 block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Engineer × Journalist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-foreground/65 sm:text-lg"
        >
          I build software end-to-end — full-stack, mobile, machine-learning, cloud — and have spent
          a decade reporting environmental and social-justice stories from China to Canada to the
          Galápagos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" />
            View my work
          </Link>
          <Link
            href="#globe"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-muted"
          >
            Explore the globe
            <ArrowDown className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-14 h-32 w-32 overflow-hidden rounded-full ring-4 ring-card shadow-2xl"
        >
          <Image
            src="/images/chen.jpg"
            alt={`Profile photo of ${site.name}`}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
