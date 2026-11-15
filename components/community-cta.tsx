"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function CommunityCta() {
  return (
    <section id="kontak" className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-zinc-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md border border-blue-400/40 bg-radial from-[#2b6af7] via-[#2563EB] to-[#1d4ed8] p-8 sm:p-14 lg:p-20 text-center overflow-hidden">
          {/* Subtle Ambient Radial Light in Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/20 blur-[130px] rounded-full" />

          {/* Title */}
          <h2 className="relative z-10 text-2xl sm:text-5xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Ready to Build Indonesia&apos;s Tech Future?
          </h2>

          {/* Description */}
          <p className="relative z-10 mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join 15,000+ builders who share ideas, find co-founders, and ship together.
          </p>

          {/* Primary & Ghost CTAs */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-2">
            <Link
              href="https://t.me/blockdev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="telegram" size="lg" className="w-full sm:w-auto font-bold">
                <span>JOIN TELEGRAM</span>
              </Button>
            </Link>

            <Link
              href="https://discord.com/invite/VrjqHVgbNA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="discord" size="lg" className="w-full sm:w-auto font-bold">
                <span>JOIN DISCORD</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
