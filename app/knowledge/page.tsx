import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_VIDEOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Knowledge | BlockDev",
  description:
    "A knowledge hub to support the builder community in understanding the latest developments in technology.",
};

function KnowledgeCard({
  item,
  kind,
}: {
  item: { slug: string; title: string; image: string; excerpt: string };
  kind: "Article" | "Video";
}) {
  return (
    <Link href={`/knowledge/${item.slug}`} className="block">
      <article className="group/col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-200 hover:brightness-105">
        <div className="relative w-full h-40 bg-zinc-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-mono uppercase text-zinc-400">{kind}</span>
          <h3 className="mt-1 text-base font-semibold text-zinc-950">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-3">{item.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Knowledge
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              A place to learn, share, and grow together. BlockDev Knowledge is a hub of
              knowledge supporting the builder community in understanding the latest
              technology developments.
            </p>
          </header>

          {/* Articles */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Articles
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOWLEDGE_ARTICLES.map((item) => (
                <KnowledgeCard key={item.slug} item={item} kind="Article" />
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
                <KnowledgeCard key={item.slug} item={item} kind="Video" />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
