import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import { DetailArticle } from "@/components/ui/detail-article";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";

export const instant = false;

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
      <PageShell>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-zinc-500">Event not found.</p>
        </div>
      </PageShell>
    );
  }

  const others = EVENTS.filter((e) => e.slug !== event.slug)
    .slice(0, 3)
    .map((e) => ({ href: `/event/${e.slug}`, title: e.title, note: e.date }));

  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DetailArticle
            backHref="/event"
            backLabel="All Events"
            image={event.image}
            title={event.title}
            meta={[event.date, event.author].filter(Boolean)}
            paragraphs={event.description}
            actions={
              event.registerUrl ? (
                <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md" withArrow>
                    <span>REGISTER</span>
                  </Button>
                </a>
              ) : undefined
            }
            others={others}
            othersHeading="Other Events"
          />
        </div>
      </div>
    </PageShell>
  );
}
