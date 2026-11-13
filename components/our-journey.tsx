"use client";

import React, { useMemo, useState, useSyncExternalStore } from "react";
import Masonry from "./ui/Masonry";
import { Button } from "./ui/button";
import { SectionHeader } from "./ui/section-header";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { GALLERY_PHOTOS } from "@/lib/data";

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

export function OurJourney() {
  const isSmUp = useSyncExternalStore(
    subscribeMediaQuery,
    getSmSnapshot,
    getSmServerSnapshot
  );
  // Extra pages of images loaded via "SEE MORE": +2 per click on mobile (< sm), +5 on sm and above
  const [extraPages, setExtraPages] = useState(0);

  // Default limit: 3 images on mobile (< sm), 8 images on sm and above (>= sm)
  const defaultLimit = isSmUp ? 8 : 3;
  const pageSize = isSmUp ? 5 : 2;
  const currentLimit = Math.min(
    defaultLimit + extraPages * pageSize,
    GALLERY_PHOTOS.length
  );

  const visibleItems = useMemo(
    () => GALLERY_PHOTOS.slice(0, currentLimit),
    [currentLimit]
  );

  const hasMore = currentLimit < GALLERY_PHOTOS.length;
  const canReset = extraPages > 0;

  const handleShowMore = () => {
    setExtraPages((prev) => prev + 1);
  };

  const handleShowLess = () => {
    setExtraPages(0);
    const section = document.getElementById("journey");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="journey" className="py-16 sm:py-24 border-t border-zinc-200/90 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Our Journey"
          description="Check out real moments from our seminars, workshops and hackathons."
        />

        {/* Masonry Grid */}
        <div className="w-full">
          <Masonry
            items={visibleItems}
            columnWidth={280}
            gap={16}
            radius={16}
            animateFrom="bottom"
            hoverEffect="zoom"
            captions="none"
            lightbox={true}
            draggable={true}
          />
        </div>

        {/* See More / Show Less + See Gallery Action */}
        {(hasMore || canReset) && (
          <div className="mt-12 flex justify-center gap-2">
            {extraPages === 0 && hasMore ? (
              <Button
                type="button"
                variant="dark"
                size="sm"
                onClick={handleShowMore}
                className="px-6"
              >
                <span>SEE MORE</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  variant="dark"
                  size="sm"
                  onClick={handleShowLess}
                  className="px-6"
                >
                  <span>SHOW LESS</span>
                  <ChevronUp className="h-4 w-4 shrink-0" />
                </Button>
                <Link href="/gallery">
                  <Button type="button" variant="primary" size="sm" className="px-6">
                    <span>SEE GALLERY</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
