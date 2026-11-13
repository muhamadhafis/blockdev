import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Masonry from "@/components/ui/Masonry";
import { GALLERY_PHOTOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | BlockDev",
  description:
    "Real moments from BlockDev seminars, workshops, and hackathons across Indonesia.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Real moments from our seminars, workshops, and hackathons.
            </p>
          </header>

          {/* Masonry Grid — lightbox on click, no external links */}
          <div className="mt-10">
            <Masonry
              items={GALLERY_PHOTOS}
              columnWidth={280}
              gap={16}
              radius={16}
              animateFrom="bottom"
              hoverEffect="zoom"
              captions="hover"
              lightbox={true}
              draggable={true}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
