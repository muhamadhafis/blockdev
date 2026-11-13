"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import DriftWall from "./ui/DriftWall";
import { SectionHeader } from "./ui/section-header";
import { Button } from "./ui/button";
import { EVENTS } from "@/lib/data";

const subscribeMediaQuery = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(min-width: 640px)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getSmSnapshot = () => window.matchMedia("(min-width: 640px)").matches;

const getSmServerSnapshot = () => false;

export function EventWall() {
  const isSmUp = useSyncExternalStore(
    subscribeMediaQuery,
    getSmSnapshot,
    getSmServerSnapshot
  );

  // Loop the events so every column has enough tiles to drift seamlessly.
  // No href: tiles are non-clickable — the page is a summary, the CTA below is the single link out.
  const items = [...EVENTS, ...EVENTS].map((event) => ({
    image: event.image,
    title: event.title,
  }));

  return (
    <section
      id="event-wall"
      className="py-16 sm:py-24 border-t border-zinc-200/90 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Glimpses of Our Events"
          description="From regular meetups to regional conferences."
        />
      </div>

      {/* Full-bleed drifting wall */}
      <div className="h-[420px] sm:h-[520px] -mt-6 sm:-mt-8">
        <DriftWall
          items={items}
          columns={isSmUp ? 4 : 3}
          tileWidth={isSmUp ? 200 : 160}
          tileHeight={isSmUp ? 113 : 90}
          gap={16}
          tilt={16}
          turn={0}
          perspective={1200}
          depth={120}
          speed={30}
          direction="up"
          variance={1}
          parallax={0.6}
          lift={24}
          fade={0.5}
          dim={0.7}
          grayscale
          overlayColor="#ffffff"
        />
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link href="/event">
          <Button variant="primary" size="md" withArrow>
            <span>SEE MORE EVENTS</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
