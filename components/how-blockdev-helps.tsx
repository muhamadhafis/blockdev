"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

export function HowBlockDevHelps() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const cards = [
    {
      num: "01",
      title: "Community Event & Seminar",
      description:
        "Build valuable connections with fellow builders, share experiences, and discover new collaboration opportunities.",
      category: "NETWORKING",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    },
    {
      num: "02",
      title: "Bootcamp",
      description:
        "Join an intensive session that combines theory and hands-on practice, designed to equip you with real-world skills to thrive in the world of emerging technologies.",
      category: "CURRICULUM",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    },
    {
      num: "03",
      title: "Workshop",
      description:
        "Learn directly through practice with experienced mentors, so your skills are ready to be applied in the real world.",
      category: "HANDS-ON",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    },
    {
      num: "04",
      title: "Incubation",
      description:
        "Turn your ideas into real solutions through intensive mentoring and access to the emerging tech ecosystem",
      category: "LAUNCHPAD",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80",
    },
    {
      num: "05",
      title: "Hackathon",
      description:
        "Sharpen your skills, validate your ideas, and unlock collaboration opportunities through technology-based innovation competitions.",
      category: "COMPETITION",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="growth" className="py-24 sm:py-32 border-t border-zinc-200/90 bg-zinc-50/50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="sticky top-20 sm:top-24 z-20 text-center max-w-3xl mx-auto mb-8 pt-2 will-change-transform transition-[transform] duration-75"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950">
            How BlockDev Helps You Grow
          </h2>
          <p className="mt-2 text-xs sm:text-base text-zinc-600 max-w-xl mx-auto line-clamp-2 sm:line-clamp-none">
            From hands-on learning to global venture incubation, explore how we accelerate every stage of your builder journey.
          </p>
        </div>

        {/* ScrollStack Container */}
        <div className="w-full max-w-4xl mx-auto">
          <ScrollStack
            headerRef={headerRef}
            useWindowScroll={true}
            itemDistance={140}
            itemStackDistance={10}
            stackPosition="28vh"
            itemScale={0.04}
            baseScale={0.85}
            dimAmount={0.15}
            blurAmount={0}
            smoothScroll={false}
          >
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
