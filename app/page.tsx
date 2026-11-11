import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BentoFeatures } from "@/components/bento-features";
import { HowBlockDevHelps } from "@/components/how-blockdev-helps";
import { TargetAudience } from "@/components/target-audience";
import { UpcomingEvents } from "@/components/upcoming-events";
import { CommunityCta } from "@/components/community-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      {/* Sticky Glass Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section (100vh Video Background) */}
        <Hero />

        {/* 2. About BlockDev Statement (100vh ScrollReveal) */}
        <BentoFeatures />

        {/* 3. How BlockDev Helps You Grow (ScrollStack Cards) */}
        <HowBlockDevHelps />

        {/* 4. Audience Breakdown: Who is BlockDev for? */}
        <TargetAudience />

        {/* 5. Live & Upcoming Events & Hackathon */}
        <UpcomingEvents />

        {/* 6. High-conversion Community Join & Newsletter */}
        <CommunityCta />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
