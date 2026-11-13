"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Sparkles, Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function CommunityCta() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-zinc-200 bg-gradient-to-b from-blue-50/30 via-white to-zinc-50 p-8 sm:p-14 lg:p-20 text-center shadow-lg overflow-hidden">
          {/* Subtle Ambient Radial Light in Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/10 blur-[130px] rounded-full" />

          {/* Tag */}
          <div className="relative z-10 flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>JOIN THE MOVEMENT</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-950 max-w-3xl mx-auto leading-tight">
            Siap Membangun Masa Depan Teknologi Indonesia?
          </h2>

          <p className="relative z-10 mt-5 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah bersama 15.000+ developer, mahasiswa, dan inovator di ekosistem BlockDev. Diskusikan ide, temukan co-founder, dan bangun karyamu hari ini.
          </p>

          {/* Dual Community CTAs */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://t.me/blockdev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" withArrow className="w-full sm:w-auto">
                <Send className="h-4 w-4 mr-2" />
                <span>GABUNG TELEGRAM</span>
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
                <span>GABUNG DISCORD</span>
              </Button>
            </Link>
          </div>

          {/* Newsletter Box */}
          <div className="relative z-10 mt-12 pt-10 border-t border-zinc-200 max-w-md mx-auto">
            <p className="text-xs font-mono uppercase text-zinc-500 mb-3 tracking-wider">
              Dapatkan info hackathon & program terbaru via email:
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-semibold py-2">
                <Check className="h-4 w-4" />
                <span>Terima kasih! Kamu telah terdaftar di newsletter BlockDev.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="masukkan email anda..."
                  required
                  className="flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-2xs"
                />
                <Button type="submit" variant="secondary" size="md">
                  SUBSCRIBE
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
