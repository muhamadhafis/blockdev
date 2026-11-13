import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Hackathon | BlockDev",
  description:
    "Intensive competitions for developers, builders, and creators to build emerging technology solutions.",
};

const INTRO = [
  "Hackathon BlockDev adalah kompetisi intensif bagi developer, builder, dan kreator untuk menciptakan solusi berbasis emerging technology seperti Blockchain, AI, Robotics, dan lainnya dalam waktu terbatas.",
  "Peserta akan berkolaborasi, membangun prototipe, dan mempresentasikan ide inovatif mereka di hadapan mentor serta juri dari industri.",
];

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Hackathon
            </h1>
            <div className="mt-4 space-y-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
              {INTRO.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </header>

          {/* No active hackathons */}
          <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-8 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              No active hackathons right now
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
              Stay tuned on our official channels — the next competition will be
              announced on Telegram and Discord first.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href="https://t.me/blockdev_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Telegram →
                </span>
              </a>
              <a
                href="https://discord.com/invite/VrjqHVgbNA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Discord →
                </span>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
