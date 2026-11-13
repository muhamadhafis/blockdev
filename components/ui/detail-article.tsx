import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface OtherItem {
  href: string;
  title: string;
  /** Small mono note on the right (date or kind). */
  note?: string;
}

interface DetailArticleProps {
  /** Route of the listing page (back arrow target). */
  backHref: string;
  backLabel: string;
  image: string;
  title: string;
  /** Small mono labels shown above the title (date, author, kind...). */
  meta?: string[];
  paragraphs: string[];
  /** Optional action area under the text (e.g. Register button). */
  actions?: React.ReactNode;
  others?: OtherItem[];
  othersHeading?: string;
}

/** Standard article-style detail layout shared by event and knowledge pages. */
export function DetailArticle({
  backHref,
  backLabel,
  image,
  title,
  meta = [],
  paragraphs,
  actions,
  others,
  othersHeading = "Other Content",
}: DetailArticleProps) {
  return (
    <>
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm font-sans uppercase text-zinc-500 hover:text-zinc-950 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabel}
      </Link>

      <div className="mt-6 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <header className="mt-8">
        {meta.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-sans uppercase text-zinc-500">
            {meta.map((entry) => (
              <span key={entry}>{entry}</span>
            ))}
          </div>
        )}
        <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
          {title}
        </h1>
      </header>

      <div className="mt-6 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
        {paragraphs.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {actions && <div className="mt-8">{actions}</div>}

      {others && others.length > 0 && (
        <section className="mt-16 border-t border-zinc-200 pt-8">
          <h2 className="text-lg font-semibold text-zinc-950">{othersHeading}</h2>
          <ul className="mt-4 space-y-3">
            {others.map((other) => (
              <li key={other.href}>
                <Link
                  href={other.href}
                  className="group/col inline-flex items-center justify-between w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-all duration-150 hover:brightness-105 hover:text-zinc-950"
                >
                  <span>{other.title}</span>
                  {other.note && (
                    <span className="text-xs font-sans uppercase text-zinc-400 group-hover/col:text-zinc-600">
                      {other.note}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
