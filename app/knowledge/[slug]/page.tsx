import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_VIDEOS, type KnowledgeItem } from "@/lib/data";

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
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-28">
          <p className="text-zinc-500">Content not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const { item, kind } = found;
  const others = ALL_KNOWLEDGE.filter((k) => k.item.slug !== item.slug).slice(0, 4);
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-1.5 text-sm font-mono uppercase text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Knowledge
          </Link>

          {/* Hero image */}
          <div className="mt-6 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Meta */}
          <header className="mt-8">
            <span className="inline-block rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-mono uppercase text-zinc-500">
              {kind}
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              {item.title}
            </h1>
          </header>

          {/* Description */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            {item.description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Other content */}
          {others.length > 0 && (
            <section className="mt-16 border-t border-zinc-200 pt-8">
              <h2 className="text-lg font-semibold text-zinc-950">Other Content</h2>
              <ul className="mt-4 space-y-3">
                {others.map(({ item: other, kind: otherKind }) => (
                  <li key={other.slug}>
                    <Link
                      href={`/knowledge/${other.slug}`}
                      className="group/col inline-flex items-center justify-between w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-all duration-150 hover:brightness-105 hover:text-zinc-950"
                    >
                      <span>{other.title}</span>
                      <span className="text-xs font-mono uppercase text-zinc-400 group-hover/col:text-zinc-600">
                        {otherKind}
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
