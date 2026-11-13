import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

async function getEvent(slug: string) {
  return EVENTS.find((event) => event.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/event/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event Not Found | BlockDev" };
  return {
    title: `${event.title} | BlockDev`,
    description: event.excerpt,
  };
}

export default async function EventDetailPage({
  params,
}: PageProps<"/event/[slug]">) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-28">
          <p className="text-zinc-500">Event not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const otherEvents = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/event"
            className="inline-flex items-center gap-1.5 text-sm font-mono uppercase text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>

          {/* Hero image */}
          <div className="mt-6 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Meta */}
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono uppercase text-zinc-500">
              {event.date && <span>{event.date}</span>}
              {event.author && <span>By {event.author}</span>}
            </div>
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              {event.title}
            </h1>
          </header>

          {/* Description */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            {event.description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Register CTA */}
          {event.registerUrl && (
            <div className="mt-8">
              <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" withArrow>
                  <span>REGISTER</span>
                </Button>
              </a>
            </div>
          )}

          {/* Other events */}
          {otherEvents.length > 0 && (
            <section className="mt-16 border-t border-zinc-200 pt-8">
              <h2 className="text-lg font-semibold text-zinc-950">Other Events</h2>
              <ul className="mt-4 space-y-3">
                {otherEvents.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/event/${other.slug}`}
                      className="group/col inline-flex items-center justify-between w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-all duration-150 hover:brightness-105 hover:text-zinc-950"
                    >
                      <span>{other.title}</span>
                      <span className="text-xs font-mono uppercase text-zinc-400 group-hover/col:text-zinc-600">
                        {other.date}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
