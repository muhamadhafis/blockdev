"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* 1. Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* 2. Base Dark Tint (agar video agak kegelapan & tidak diputihkan) */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* 3. Top Gradient (transisi gelap halus di bawah navbar) */}
      <div className="absolute top-0 inset-x-0 h-44 bg-linear-to-b from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* 4. Bottom Dark Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 1. Headline (Teks Terang Putih) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-white leading-[1.08] max-w-4xl drop-shadow-md"
        >
          Empowering Indonesia’s Builders
        </motion.h1>

        {/* 2. Description (Teks Terang) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-100 max-w-2xl font-normal leading-relaxed drop-shadow-sm"
        >
          Learn, build, and connect through a growing builder network across Indonesia
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
              size="responsive"
              withArrow
              className="w-full sm:w-auto"
            >
              GABUNG BLOCKDEV
            </Button>
          </Link>

          <Link href="#hackathon" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="responsive"
              className="w-full sm:w-auto"
            >
              EKSPLORASI PROGRAM
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
