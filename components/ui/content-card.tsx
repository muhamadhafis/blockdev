import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  href: string;
  image: string;
  title: string;
  excerpt: string;
  /** Small mono label above the title (e.g. date or content kind). */
  badge?: string;
}

/** Uniform image card used in grid sections (events, knowledge, courses). */
export function ContentCard({ href, image, title, excerpt, badge }: ContentCardProps) {
  return (
    <Link href={href} className="block">
      <article className="group/col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-200 hover:brightness-105">
        <div className="relative w-full h-44 sm:h-48 bg-zinc-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          {badge && (
            <p className="text-xs font-sans uppercase text-zinc-400">{badge}</p>
          )}
          <h3 className="mt-1 text-base font-semibold text-zinc-950">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
