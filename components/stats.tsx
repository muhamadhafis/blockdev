"use client";

import React from "react";
import CountUp from "./ui/CountUp";
import { SectionHeader } from "./ui/section-header";

const STATS = [
  { value: 15, suffix: "K+", label: "Community Members" },
  { value: 100, suffix: "+", label: "Events" },
  { value: 800, suffix: "+", label: "Innovative Solutions" },
];

export function Stats() {
  return (
    <section
      id="stats"
      className="py-16 sm:py-24 border-t border-zinc-200/90 bg-white relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Building Indonesia's Builder Community"
          description="From small meetups to nation-wide programs, our community keeps growing with every builder who joins."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <CountUp
                to={stat.value}
                mode="roll"
                easing="spring"
                trigger="view"
                duration={2.4}
                suffix={stat.suffix}
                autoReplay={2}
                replayOnHover
                className="text-6xl sm:text-7xl font-semibold tracking-tight text-zinc-950"
              />
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
