"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./ui/spotlight-card";
import { Terminal, BookOpen, Briefcase, Handshake, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function TargetAudience() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: "engineers",
      title: "Engineers & Deep-Tech Builders",
      icon: Terminal,
      badge: "Builders",
      tagline: "Level up your product architecture and compete for global grants.",
      benefits: [
        "Access to hackathons with prize pools worth tens of thousands of USD",
        "Benchmark & audit smart contract architecture with peer builders",
        "Cutting-edge research on AI autonomous agents & onchain robotics",
        "Recruitment opportunities from tier-1 global protocols",
      ],
      ctaText: "Start Building Now",
      ctaLink: "https://discord.com/invite/VrjqHVgbNA",
    },
    {
      id: "students",
      title: "Students & Tech Enthusiasts",
      icon: BookOpen,
      badge: "Beginners",
      tagline: "Start your emerging tech journey from zero with trusted mentors.",
      benefits: [
        "Free weekly workshops and bootcamps with no registration fee",
        "A structured learning roadmap from Blockchain fundamentals to AI",
        "Team matching for hackathon competitions",
        "A real, industry-recognized GitHub-based portfolio",
      ],
      ctaText: "Join Classes & Bootcamps",
      ctaLink: "https://t.me/blockdev_official",
    },
    {
      id: "founders",
      title: "Startups & Emerging Founders",
      icon: Briefcase,
      badge: "Founders",
      tagline: "Turn your hackathon prototype into a high-value startup.",
      benefits: [
        "Access to incubation programs with cloud credits (DigitalOcean, AWS, GCP)",
        "Private mentorship with William Sutanto & serial entrepreneurs",
        "Exclusive Demo Day in front of angel investors and venture capitals",
        "Product validation support across 15,000+ community members",
      ],
      ctaText: "Apply to the Incubation Track",
      ctaLink: "https://linktr.ee/blockdev_org",
    },
    {
      id: "partners",
      title: "Protocols, Grants & Enterprise",
      icon: Handshake,
      badge: "Partners",
      tagline: "Reach thousands of the most active and talented developers in Southeast Asia.",
      benefits: [
        "Official hackathon co-organizing with reach to hundreds of builder teams",
        "Developer relations & tech evangelism for your SDK/API adoption",
        "Direct distribution of developer grants to validated projects",
        "Regional & international collaborative events",
      ],
      ctaText: "Contact for Partnership",
      ctaLink: "mailto:partnership@blockdev.org",
    },
  ];

  const current = personas[activeTab];

  return (
    <section id="knowledge" className="py-16 sm:py-24 border-t border-zinc-200 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 rounded-full font-medium">
            ECOSYSTEM FIT
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
            Who Is BlockDev Designed For?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Every BlockDev pillar is tailored to your career journey and your place in the tech ecosystem.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={persona.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-blue-500 bg-blue-50/50 text-blue-950 shadow-xs font-semibold"
                    : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:text-zinc-950 hover:border-zinc-300"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    isSelected ? "text-blue-600" : "text-zinc-500"
                  }`}
                />
                <span className="text-xs sm:text-sm truncate">
                  {persona.title.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Spotlight Card */}
        <SpotlightCard className="p-8 sm:p-10 border-zinc-200 bg-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 font-semibold">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Target Track #{activeTab + 1}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                {current.title}
              </h3>
              <p className="text-base text-zinc-600 font-medium">
                {current.tagline}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:items-start lg:items-end justify-center shrink-0">
              <Link href={current.ctaLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" withArrow className="w-full sm:w-auto">
                  {current.ctaText}
                </Button>
              </Link>
              <span className="mt-2 text-xs text-zinc-500">
                100% backed by an open community
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
