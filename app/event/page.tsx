import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events | BlockDev",
  description:
    "Meet, learn, and collaborate at BlockDev events across Indonesia — from regular meetups to regional conferences.",
};

export default function EventPage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Events"
            description="BlockDev events are spaces to meet, learn, and collaborate in emerging technology such as Blockchain, AI, and Robotics. Every agenda is designed to connect builders, developers, and organizations that want to grow together."
          />

          {/* Event Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <ContentCard
                key={event.slug}
                href={`/event/${event.slug}`}
                image={event.image}
                title={event.title}
                excerpt={event.excerpt}
                badge={event.date}
              />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
