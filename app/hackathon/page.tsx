import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hackathon | BlockDev",
  description:
    "Intensive competitions for developers, builders, and creators to build emerging technology solutions.",
};

const INTRO = [
  "The BlockDev Hackathon is an intensive competition for developers, builders, and creators to build emerging technology solutions — Blockchain, AI, Robotics, and more — within a limited time.",
  "Participants collaborate, build prototypes, and present their innovative ideas in front of industry mentors and judges.",
];

export default function HackathonPage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Hackathon"
            description={INTRO[0]}
          >
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
              {INTRO[1]}
            </p>
          </PageHeader>

          {/* No active hackathons */}
          <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-8 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              No active hackathons right now
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
              Stay tuned on our official channels — the next competition will be
              announced on Telegram and Discord first.
            </p>
            <div className="mt-6 flex justify-center gap-6">
              <a
                href="https://t.me/blockdev_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" withArrow>
                  <span>TELEGRAM</span>
                </Button>
              </a>
              <a
                href="https://discord.com/invite/VrjqHVgbNA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <span>DISCORD</span>
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
