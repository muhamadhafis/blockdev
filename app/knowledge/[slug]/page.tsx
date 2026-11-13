import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { DetailArticle } from "@/components/ui/detail-article";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_VIDEOS, type KnowledgeItem } from "@/lib/data";

export const instant = false;

const ALL_KNOWLEDGE = [
  ...KNOWLEDGE_ARTICLES.map((item) => ({ item, kind: "Article" as const })),
  ...KNOWLEDGE_VIDEOS.map((item) => ({ item, kind: "Video" as const })),
];

export function generateStaticParams() {
  return ALL_KNOWLEDGE.map((entry) => ({ slug: entry.item.slug }));
}

async function getItem(slug: string) {
  return ALL_KNOWLEDGE.find((entry) => entry.item.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = await getItem(slug);
  if (!found) return { title: "Not Found | BlockDev" };
  return {
    title: `${found.item.title} | BlockDev`,
    description: found.item.excerpt,
  };
}

export default async function KnowledgeDetailPage({
  params,
}: PageProps<"/knowledge/[slug]">) {
  const { slug } = await params;
  const found = await getItem(slug);

  if (!found) {
    return (
      <PageShell>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-zinc-500">Content not found.</p>
        </div>
      </PageShell>
    );
  }

  const { item, kind } = found;
  const others = ALL_KNOWLEDGE.filter((k) => k.item.slug !== item.slug)
    .slice(0, 4)
    .map(({ item: other, kind: otherKind }) => ({
      href: `/knowledge/${other.slug}`,
      title: other.title,
      note: otherKind,
    }));

  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DetailArticle
            backHref="/knowledge"
            backLabel="All Knowledge"
            image={item.image}
            title={item.title}
            meta={[kind]}
            paragraphs={item.description}
            others={others}
            othersHeading="Other Content"
          />
        </div>
      </div>
    </PageShell>
  );
}
