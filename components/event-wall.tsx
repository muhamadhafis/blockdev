"use client";

import React, { useSyncExternalStore } from "react";
import DriftWall from "./ui/DriftWall";
import { SectionHeader } from "./ui/section-header";

const subscribeMediaQuery = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(min-width: 640px)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getSmSnapshot = () => window.matchMedia("(min-width: 640px)").matches;
const getSmServerSnapshot = () => false;

const EVENTS = [
  { image: "/images/events/arbitrum-open-house-singapore.jpg", title: "Arbitrum Open House — Singapore" },
  { image: "/images/events/astra-commons-jakarta.png", title: "Astra Commons Jakarta" },
  { image: "/images/events/blockchain-life-2026.png", title: "Blockchain Life 2026" },
  { image: "/images/events/kelas-rutin-batch-5.jpg", title: "Kelas Rutin Batch 5" },
  { image: "/images/events/monad-metropolis.jpg", title: "Monad Metropolis" },
  { image: "/images/events/workshop-web3-stikom-bali.jpg", title: "Workshop Web3 STIKOM Bali" },
];

const EVENT_LINK = "https://blockdev.org/event";

export function EventWall() {
  const isSmUp = useSyncExternalStore(
    subscribeMediaQuery,
    getSmSnapshot,
    getSmServerSnapshot
  );

  // Loop the 6 photos so every column has enough tiles to drift seamlessly
  const items = [...EVENTS, ...EVENTS].map((event) => ({
    image: event.image,
    title: event.title,
    href: EVENT_LINK,
  }));

  return (
    <section
      id="event-wall"
      className="py-16 sm:py-24 border-t border-zinc-200/90 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EVENT GALLERY"
          title="Sekilas Momen dari Acara Kami"
          description="Dari meetup rutin sampai konferensi regional — intip suasananya, lalu gabung di acara berikutnya."
        />
      </div>

      {/* Full-bleed drifting wall */}
      <div className="h-[420px] sm:h-[520px] -mt-6 sm:-mt-8">
        <DriftWall
          items={items}
          columns={isSmUp ? 5 : 3}
          tileWidth={isSmUp ? 200 : 160}
          tileHeight={isSmUp ? 132 : 106}
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
    </section>
  );
}
