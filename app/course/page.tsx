import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { DASHBOARD_URL, KNOWLEDGE_VIDEOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Course | BlockDev",
  description:
    "Structured learning programs from BlockDev — from blockchain fundamentals to hands-on smart contract engineering.",
};

const MODULES = [
  {
    title: "Blockchain Fundamentals",
    description:
      "Understand how blockchain works, wallets, and the Web3 landscape from zero.",
  },
  {
    title: "Smart Contract Engineering",
    description:
      "Hands-on sessions writing, testing, and deploying smart contracts with mentors.",
  },
  {
    title: "Builder Track",
    description:
      "Build real projects together with the community and get feedback from the ecosystem.",
  },
];

export default function CoursePage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Course"
            description="Structured learning programs from BlockDev — from blockchain fundamentals to hands-on smart contract engineering, guided by experienced mentors."
          >
            <div className="mt-8">
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" withArrow>
                  <span>OPEN COURSE DASHBOARD</span>
                </Button>
              </a>
            </div>
          </PageHeader>

          {/* Modules */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Learning Modules
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {MODULES.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-zinc-200 p-6 transition-all duration-200 hover:brightness-105"
                >
                  <h3 className="text-lg font-semibold text-zinc-950">{module.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Preview lessons */}
          <section className="mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Preview Lessons
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {KNOWLEDGE_VIDEOS.map((video) => (
                <a
                  key={video.slug}
                  href={`/knowledge/${video.slug}`}
                  className="group/col inline-flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-all duration-150 hover:brightness-105 hover:text-zinc-950"
                >
                  <span>{video.title}</span>
                  <span className="text-xs font-sans uppercase text-zinc-400 group-hover/col:text-zinc-600">
                    Video
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
