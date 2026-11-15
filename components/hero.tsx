"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* 1. Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* 2. Base Dark Tint */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* 3. Dark Gradient (dipertebal hingga ke atas) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/50 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 1. Headline (Teks Terang Putih) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl tracking-[-0.04em] text-white leading-[1.08] max-w-5xl drop-shadow-md"
        >
          Empowering Indonesia’s Builders
        </motion.h1>

        {/* 2. Description (Teks Terang) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed drop-shadow-sm"
        >
          Learn, build, and connect through a growing builder network across Indonesia.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="https://linktr.ee/blockdev_org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="md"
              withArrow
              className="w-full sm:w-auto"
            >
              JOIN BLOCKDEV
            </Button>
          </Link>

          <Link href="#event-wall" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="md"
              className="w-full sm:w-auto"
            >
              EXPLORE PROGRAMS
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
