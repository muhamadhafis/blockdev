"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

export function HowBlockDevHelps() {
  const cards = [
    {
      num: "01",
      title: "Community Event & Seminar",
      description:
        "Build valuable connections with fellow builders, share experiences, and discover new collaboration opportunities.",
      category: "NETWORKING",
      image:
        "https://blockdev.sgp1.cdn.digitaloceanspaces.com/asset/journey/728bee70-0cd0-4ba1-83c4-5dc7e0a5d6cc.jpg",
    },
    {
      num: "02",
      title: "Bootcamp",
      description:
        "Join an intensive session that combines theory and hands-on practice, designed to equip you with real-world skills to thrive in the world of emerging technologies.",
      category: "CURRICULUM",
      image:
        "https://blockdev.sgp1.cdn.digitaloceanspaces.com/asset/journey/11b5d6b5-83f8-4687-9318-033f23fac877.jpg",
    },
    {
      num: "03",
      title: "Workshop",
      description:
        "Learn directly through practice with experienced mentors, so your skills are ready to be applied in the real world.",
      category: "HANDS-ON",
      image:
        "https://blockdev.sgp1.cdn.digitaloceanspaces.com/asset/journey/acf30eb8-0b7e-4367-89a1-4d7324430600.jpg",
    },
    {
      num: "04",
      title: "Incubation",
      description:
        "Turn your ideas into real solutions through intensive mentoring and access to the emerging tech ecosystem",
      category: "LAUNCHPAD",
      image:
        "https://blockdev.sgp1.cdn.digitaloceanspaces.com/asset/journey/aa1fc478-1c8c-4515-8db8-1c667db28c3d.jpg",
    },
    {
      num: "05",
      title: "Hackathon",
      description:
        "Sharpen your skills, validate your ideas, and unlock collaboration opportunities through technology-based innovation competitions.",
      category: "COMPETITION",
      image:
        "https://blockdev.sgp1.cdn.digitaloceanspaces.com/asset/journey/6032b6a9-60e5-4450-964a-ff1edd823861.jpg",
    },
  ];

  return (
    <section id="growth" className="pt-4 sm:pt-24 pb-16 sm:pb-24 border-t border-zinc-200/90 bg-zinc-50/50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ScrollStack Container (title is the first stack item) */}
        <div className="w-full max-w-4xl mx-auto">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={140}
            itemStackDistance={10}
            stackPosition="max(18vh, 140px)"
            itemScale={0.04}
            baseScale={0.85}
            dimAmount={0.15}
            blurAmount={0}
            smoothScroll={false}
          >
            {/* Section header as first stack item — pins, then gets covered by the cards */}
            <div className="text-center max-w-3xl mx-auto pt-2 pb-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950">
                How BlockDev Helps You Grow
              </h2>
              <p className="mt-2 text-xs sm:text-base text-zinc-600 max-w-xl mx-auto">
                From hands-on learning to global venture incubation, explore how we accelerate every stage of your builder journey.
              </p>
            </div>

            {cards.map((card) => (
              <ScrollStackItem key={card.num}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center h-full">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center space-y-4 py-2">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-inner bg-zinc-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
