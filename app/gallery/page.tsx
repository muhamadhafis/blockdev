import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import Masonry from "@/components/ui/Masonry";
import { GALLERY_PHOTOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | BlockDev",
  description:
    "Real moments from BlockDev seminars, workshops, and hackathons across Indonesia.",
};

export default function GalleryPage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Gallery"
            description="Real moments from our seminars, workshops, and hackathons."
          />

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
      </div>
    </PageShell>
  );
}
