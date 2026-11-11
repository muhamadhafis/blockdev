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
      tagline: "Tingkatkan arsitektur produkmu dan rebut grant global.",
      benefits: [
        "Akses ke Hackathon dengan prize pool puluhan ribu USD",
        "Benchmark & audit arsitektur smart contract bersama peer builders",
        "Riset terdepan implementasi AI autonomous agents & onchain robotics",
        "Peluang direkrut oleh protokol global tier-1",
      ],
      ctaText: "Mulai Bangun Sekarang",
      ctaLink: "https://discord.com/invite/VrjqHVgbNA",
    },
    {
      id: "students",
      title: "Mahasiswa & Tech Enthusiasts",
      icon: BookOpen,
      badge: "Beginners",
      tagline: "Mulai perjalanan emerging tech dari nol dengan mentor terpercaya.",
      benefits: [
        "Workshop dan bootcamp mingguan gratis tanpa biaya registrasi",
        "Roadmap belajar terstruktur dari dasar Blockchain hingga AI",
        "Mendapatkan rekan tim (team matching) untuk kompetisi hackathon",
        "Portofolio nyata berbasis GitHub yang diakui industri",
      ],
      ctaText: "Gabung Kelas & Bootcamp",
      ctaLink: "https://t.me/blockdev_official",
    },
    {
      id: "founders",
      title: "Startups & Emerging Founders",
      icon: Briefcase,
      badge: "Founders",
      tagline: "Ubah prototipe hackathon menjadi startup bernilai tinggi.",
      benefits: [
        "Akses program inkubasi dengan cloud credits (DigitalOcean, AWS, GCP)",
        "Mentorship privat bersama William Sutanto & serial entrepreneurs",
        "Demo Day eksklusif di hadapan angel investors dan venture capitals",
        "Bantuan validasi produk langsung ke 15.000+ member komunitas",
      ],
      ctaText: "Daftar Jalur Inkubasi",
      ctaLink: "https://linktr.ee/blockdev_org",
    },
    {
      id: "partners",
      title: "Protocols, Grants & Enterprise",
      icon: Handshake,
      badge: "Partners",
      tagline: "Jangkau ribuan developer paling aktif dan berbakat di Asia Tenggara.",
      benefits: [
        "Co-organizing hackathon resmi dengan jangkauan ratusan tim builder",
        "Developer relations & tech evangelism untuk adopsi SDK/API Anda",
        "Penyaluran developer grants langsung ke proyek yang tervalidasi",
        "Event kolaborasi tingkat regional & internasional",
      ],
      ctaText: "Hubungi Kerjasama",
      ctaLink: "mailto:partnership@blockdev.org",
    },
  ];

  const current = personas[activeTab];

  return (
    <section id="knowledge" className="py-24 border-t border-zinc-200 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 rounded-full font-medium">
            ECOSYSTEM FIT
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
            Untuk Siapa BlockDev Dirancang?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Setiap pilar BlockDev disesuaikan dengan titik perjalanan karir dan kebutuhan ekosistem teknologi Anda.
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
                100% didukung komunitas terbuka
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
