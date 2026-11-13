"use client";

import React from "react";
import ScrollReveal from "./ui/ScrollReveal";

export function BentoFeatures() {
  const aboutText =
    "BlockDev is a builder community in Indonesia focused on developing builders in emerging technologies such as Blockchain, AI, Robotics, and more, not only as developers, but also equipping them with an entrepreneurial spirit to contribute meaningfully and connect directly with key elements of the industry, ranging from communities and startups to companies and institutions that shape the emerging tech ecosystem, both in Indonesia and globally.";

  return (
    <section
      id="about"
      className="relative flex items-center justify-center border-t border-zinc-200/80 bg-white px-5 py-20 sm:h-[100dvh] sm:min-h-[100dvh] sm:px-8 lg:px-16 sm:overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center sm:text-justify">
        {/* Description only, no title, with ScrollReveal (trigger: past half screen / top 50%) */}
        <ScrollReveal
          highlightColor="#2b6af7"
          mode="scrub"
          splitBy="words"
          effect="fade"
          stagger={0.2}
          duration={0.8}
          smoothing={0}
          baseOpacity={0.15}
          baseRotation={0}
          baseOffset={0}
          enableBlur={false}
          blurStrength={4}
          wordAnimationStart="top 50%"
          wordAnimationEnd="bottom 35%"
          containerClassName="w-full"
          textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 leading-[1.65] sm:leading-[1.6] max-w-4xl mx-auto"
        >
          {aboutText}
        </ScrollReveal>
      </div>
    </section>
  );
}
