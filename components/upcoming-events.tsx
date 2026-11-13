"use client";

import React from "react";
import { SpotlightCard } from "./ui/spotlight-card";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function UpcomingEvents() {
  const events = [
    {
      title: "Monad Metropolis: High-Throughput Dev Gathering",
      category: "Developer Meetup",
      date: "09 Sep 2026",
      location: "Jakarta & Hybrid",
      status: "Registration Open",
      isLive: true,
      description:
        "Explore parallel EVM architecture, execution engine optimization, and live coding with Monad engineers.",
      link: "https://blockdev.org/event",
    },
    {
      title: "Astra Commons Hackathon & Innovation Summit",
      category: "Flagship Hackathon",
      date: "24 Sep 2026",
      location: "Jakarta, Indonesia",
      status: "Registration Open",
      isLive: true,
      description:
        "A 48-hour competition building AI & Blockchain based decentralized solutions with a total grant prize of $25,000.",
      link: "https://blockdev.org/event",
    },
    {
      title: "Arbitrum Open House: Layer-2 Scaling",
      category: "International Connect",
      date: "12 Oct 2026",
      location: "Singapore & Online",
      status: "Coming Soon",
      isLive: false,
      description:
        "An exclusive discussion on Nitro architecture, Stylus (Rust on EVM), and opportunities for Southeast Asian builders.",
      link: "https://blockdev.org/event",
    },
  ];

  return (
    <section id="acara" className="py-16 sm:py-24 border-t border-zinc-200 bg-zinc-50/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 rounded-full font-medium">
              LIVE & UPCOMING
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Latest Events & Hackathons
            </h2>
            <p className="mt-3 text-base text-zinc-600 max-w-2xl">
              Don't miss the chance to learn directly from world-class core developers and expand your builder network.
            </p>
          </div>

          <Link href="https://blockdev.org/event" target="_blank">
            <Button variant="secondary" size="sm" className="hidden md:inline-flex text-xs">
              <span>ALL EVENTS</span>
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <SpotlightCard
              key={idx}
              className="flex flex-col justify-between p-6 border-zinc-200 bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {event.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                      event.isLive
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                    }`}
                  >
                    {event.isLive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    )}
                    {event.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-zinc-950 tracking-tight leading-snug">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-150 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link href={event.link} target="_blank" className="w-full mt-2">
                  <Button variant="secondary" size="sm" className="w-full text-xs">
                    <span>DETAIL & RSVP</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* All Events button (mobile: shown below grid, hidden in header on md+) */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="https://blockdev.org/event" target="_blank">
            <Button variant="secondary" size="sm" className="text-xs">
              <span>ALL EVENTS</span>
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
