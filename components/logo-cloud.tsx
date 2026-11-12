"use client";

import React, { useSyncExternalStore } from "react";
import LogoLoop, { type LogoItemImage } from "./ui/LogoLoop";
import { SectionHeader } from "./ui/section-header";

const subscribeMediaQuery = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(min-width: 640px)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getSmSnapshot = () => {
  return window.matchMedia("(min-width: 640px)").matches;
};

const getSmServerSnapshot = () => {
  return false;
};

const PARTNER_LOGOS: LogoItemImage[] = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/partners/${i + 1}.svg`,
  alt: `Partner ${i + 1}`,
  title: `Partner ${i + 1}`,
}));

export function LogoCloud() {
  const isSmUp = useSyncExternalStore(
    subscribeMediaQuery,
    getSmSnapshot,
    getSmServerSnapshot
  );

  const row1 = PARTNER_LOGOS.slice(0, 10);
  const row2 = PARTNER_LOGOS.slice(10, 20);

  // Responsive Dimensions: compact on mobile (< sm), larger on desktop (>= sm)
  const logoHeight = isSmUp ? 256 : 72;
  const gap = isSmUp ? 32 : 20;
  const tiltX = isSmUp ? 32 : 16;
  const speed = isSmUp ? 55 : 40;

  return (
    <section id="partners" className="py-16 sm:py-24 border-t border-zinc-200/90 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Consistent Section Header */}
        <SectionHeader
          title="Backed & Trusted by Leading Ecosystems"
          description="Collaborating with top protocols, university alliances, and high-growth technology enterprises."
        />
      </div>

      {/* Dual Row React Bits LogoLoop */}
      <div className="flex flex-col gap-2 sm:gap-4 w-full">
        {/* Row 1: Scrolls Left */}
        <LogoLoop
          logos={row1}
          direction="left"
          speed={speed}
          logoHeight={logoHeight}
          gap={gap}
          tiltX={tiltX}
          muted={0.7}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.15}
          draggable={true}
          ariaLabel="Trusted partner logos row 1"
        />

        {/* Row 2: Scrolls Right */}
        <LogoLoop
          logos={row2}
          direction="right"
          speed={speed}
          logoHeight={logoHeight}
          gap={gap}
          tiltX={tiltX}
          muted={0.7}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.15}
          draggable={true}
          ariaLabel="Trusted partner logos row 2"
        />
      </div>
    </section>
  );
}
