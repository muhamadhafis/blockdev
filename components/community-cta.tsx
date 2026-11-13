"use client";

import React from "react";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function CommunityCta() {
  return (
    <section id="kontak" className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-zinc-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md border border-zinc-200 bg-gradient-to-b from-blue-50/30 via-white to-zinc-50 p-8 sm:p-14 lg:p-20 text-center  overflow-hidden">
          {/* Subtle Ambient Radial Light in Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/10 blur-[130px] rounded-full" />

          {/* Title */}
          <h2 className="relative z-10 text-2xl sm:text-5xl font-semibold tracking-tight text-zinc-950 max-w-4xl mx-auto leading-tight">
            Ready to Build Indonesia&apos;s Tech Future?
          </h2>

          {/* Description */}
          <p className="relative z-10 mt-5 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Join 15,000+ builders who share ideas, find co-founders, and ship together.
          </p>

          {/* Primary & Ghost CTAs */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://t.me/blockdev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" withArrow className="w-full sm:w-auto">
                <Send className="h-4 w-4 mr-2" />
                <span>JOIN TELEGRAM</span>
              </Button>
            </Link>

            <Link
              href="https://discord.com/invite/VrjqHVgbNA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>JOIN DISCORD</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
