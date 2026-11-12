"use client";

import React, { useMemo, useState, useSyncExternalStore } from "react";
import Masonry, { type MasonryItem } from "./ui/Masonry";
import { Button } from "./ui/button";
import { SectionHeader } from "./ui/section-header";
import { ChevronDown, ChevronUp } from "lucide-react";

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

const ALL_JOURNEY_ITEMS: MasonryItem[] = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 533,
    title: "BlockDev National Summit Jakarta",
    description: "Gathering 400+ builders, founders, and Web3 enthusiasts across Indonesia.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 600,
    title: "Intensive Builder Bootcamp",
    description: "Hands-on Rust & smart contract engineering session in Bandung.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 1000,
    title: "Founders & Mentors Incubation Day",
    description: "1-on-1 venture pitch and architecture review with ecosystem leaders.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 534,
    title: "BlockDev Hackathon 2026",
    description: "48-hour continuous building challenge tackling real-world decentralized protocols.",
    url: "https://blockdev.org/",
    span: 2,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 533,
    title: "Developer Community Meetup Bali",
    description: "Casual builder discussions on modular blockchains and zero-knowledge proofs.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 900,
    title: "Campus Web3 Roadshow",
    description: "Introducing blockchain fundamentals to engineering students across top universities.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 600,
    title: "Demo Day & Ecosystem Showcase",
    description: "Graduated startup teams presenting their MVPs to venture investors.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 533,
    title: "Hands-on Security & Audit Workshop",
    description: "Interactive session discovering common vulnerabilities in smart contract code.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "9",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 533,
    title: "Web3 Governance & Protocol Forum",
    description: "Keynote presentation and open panel debating decentralized network architecture.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 800,
    title: "Smart Contract Deep Dive",
    description: "Deep dive into EVM bytecode optimization and formal verification techniques.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "11",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 533,
    title: "Builders Coffee & Networking",
    description: "Casual weekend meetup connecting junior engineers with senior Web3 core contributors.",
    url: "https://blockdev.org/",
    span: 1,
  },
  {
    id: "12",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
    width: 800,
    height: 534,
    title: "Global Venture Pitch Night",
    description: "Graduation celebration and seed grant announcements for outstanding project teams.",
    url: "https://blockdev.org/",
    span: 2,
  },
];

export function OurJourney() {
  const isSmUp = useSyncExternalStore(
    subscribeMediaQuery,
    getSmSnapshot,
    getSmServerSnapshot
  );
  const [isExpanded, setIsExpanded] = useState(false);

  // Default limit: 3 images on mobile (< sm), 8 images on sm and above (>= sm)
  const defaultLimit = isSmUp ? 8 : 3;
  const currentLimit = isExpanded ? ALL_JOURNEY_ITEMS.length : defaultLimit;

  const visibleItems = useMemo(
    () => ALL_JOURNEY_ITEMS.slice(0, currentLimit),
    [currentLimit]
  );

  const hasMore = ALL_JOURNEY_ITEMS.length > defaultLimit;

  const handleToggle = () => {
    if (isExpanded) {
      const section = document.getElementById("journey");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="journey" className="py-24 sm:py-32 border-t border-zinc-200/90 bg-white relative">
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
            captions="hover"
            lightbox={true}
            draggable={true}
          />
        </div>

        {/* See More / Show Less Action */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleToggle}
              className="px-6"
            >
              <span>{isExpanded ? "SHOW LESS" : "SEE MORE"}</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 shrink-0" />
              ) : (
                <ChevronDown className="h-4 w-4 shrink-0" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
