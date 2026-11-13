"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

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
              <Button variant="ghost" size="lg" className="bold w-full sm:w-auto bg-radial from-[#41B3E5] via-[#229ED9] to-[#1B8AC4]">
                <TelegramIcon className="h-5 w-5 mr-2" />
                <span>JOIN TELEGRAM</span>
              </Button>
            </Link>

            <Link
              href="https://discord.com/invite/VrjqHVgbNA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="w-full sm:w-auto bg-radial from-[#7983F5] via-[#5865F2] to-[#4450C9]">
                <DiscordIcon className="h-5 w-5 mr-2" />
                <span>JOIN DISCORD</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
