import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events | BlockDev",
  description:
    "Meet, learn, and collaborate at BlockDev events across Indonesia — from regular meetups to regional conferences.",
};

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Events
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              BlockDev events are spaces to meet, learn, and collaborate in emerging
              technology such as Blockchain, AI, and Robotics. Every agenda is designed
              to connect builders, developers, and organizations that want to grow together.
            </p>
          </header>

          {/* Event Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <Link key={event.slug} href={`/event/${event.slug}`} className="block">
                <article
                  className="group/col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-200 hover:brightness-105"
                >
                  <div className="relative w-full h-44 sm:h-48 bg-zinc-100">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    {event.date && (
                      <p className="text-xs font-mono uppercase text-zinc-400">{event.date}</p>
                    )}
                    <h2 className="mt-1 text-base font-semibold text-zinc-950">{event.title}</h2>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-3">{event.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
