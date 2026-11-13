import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_VIDEOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Knowledge | BlockDev",
  description:
    "A knowledge hub to support the builder community in understanding the latest developments in technology.",
};

export default function KnowledgePage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Knowledge"
            description="A place to learn, share, and grow together. BlockDev Knowledge is a hub of knowledge supporting the builder community in understanding the latest technology developments."
          />

          {/* Articles */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Articles
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOWLEDGE_ARTICLES.map((item) => (
                <ContentCard
                  key={item.slug}
                  href={`/knowledge/${item.slug}`}
                  image={item.image}
                  title={item.title}
                  excerpt={item.excerpt}
                  badge="Article"
                />
              ))}
            </div>
          </section>

          {/* Videos */}
          <section className="mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Videos
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOWLEDGE_VIDEOS.map((item) => (
                <ContentCard
                  key={item.slug}
                  href={`/knowledge/${item.slug}`}
                  image={item.image}
                  title={item.title}
                  excerpt={item.excerpt}
                  badge="Video"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
