"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { StoryDialog } from "@/components/sections/StoryDialog";
import { geoArticles } from "@/data/journalism";
import type { JournalismArticle } from "@/types/content";

type GlobePoint = {
  lat: number;
  lng: number;
  size: number;
  color: string;
  label: string;
  article: JournalismArticle;
};

type GlobeRing = {
  lat: number;
  lng: number;
  maxR: number;
  propagationSpeed: number;
  repeatPeriod: number;
};

// react-globe.gl is browser-only — dynamic import disables SSR.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as unknown as React.FC<
  Record<string, unknown>
>;

export function JournalismGlobe() {
  const { resolvedTheme } = useTheme();
  const [active, setActive] = useState<JournalismArticle | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 600, height: 600 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.max(280, Math.min(720, rect.width));
      setSize({ width: w, height: w });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const points: GlobePoint[] = useMemo(
    () =>
      geoArticles.map((a) => ({
        lat: a.coords!.lat,
        lng: a.coords!.lng,
        size: 0.55,
        color: a.region === "canada" ? "#f5e625" : "#eb6864",
        label: `${a.coords!.location} — ${a.category}`,
        article: a,
      })),
    [],
  );

  const rings: GlobeRing[] = useMemo(
    () =>
      geoArticles.map((a) => ({
        lat: a.coords!.lat,
        lng: a.coords!.lng,
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 1800,
      })),
    [],
  );

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const globeImageUrl = isDark
    ? "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
    : "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg";

  return (
    <>
      <div className="relative">
        <div
          ref={containerRef}
          className="relative mx-auto aspect-square w-full max-w-[640px]"
        >
          {mounted && (
            <Globe
              width={size.width}
              height={size.height}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl={globeImageUrl}
              bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
              showAtmosphere
              atmosphereColor="#eb6864"
              atmosphereAltitude={0.18}
              pointsData={points}
              pointLat="lat"
              pointLng="lng"
              pointAltitude={0.02}
              pointRadius="size"
              pointColor="color"
              pointLabel="label"
              pointsMerge={false}
              onPointClick={(p: unknown) => {
                const point = p as GlobePoint;
                setActive(point.article);
              }}
              ringsData={rings}
              ringColor={() => (t: number) => `rgba(235, 104, 100, ${1 - t})`}
              ringMaxRadius="maxR"
              ringPropagationSpeed="propagationSpeed"
              ringRepeatPeriod="repeatPeriod"
            />
          )}
          {!mounted && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 animate-pulse rounded-full bg-primary/20" />
            </div>
          )}
        </div>

        {/* Marker legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#eb6864] shadow-[0_0_10px_rgba(235,104,100,0.6)]" />
            <span className="text-foreground/60">China &amp; international</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f5e625] shadow-[0_0_10px_rgba(245,230,37,0.5)]" />
            <span className="text-foreground/60">Canada</span>
          </div>
          <span className="text-foreground/40">· Click any marker to read the story</span>
        </div>
      </div>
      <StoryDialog article={active} onClose={() => setActive(null)} />
    </>
  );
}
