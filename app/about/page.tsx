import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | BlockDev",
  description:
    "BlockDev (Yayasan Literasi Rantai Digital) is an Indonesian foundation focused on developing builders in emerging technology.",
};

const ACTIVITIES = [
  {
    title: "Hackathon",
    description:
      "Innovative competitions where builders sharpen their skills, validate ideas, and unlock collaboration opportunities.",
  },
  {
    title: "Workshop",
    description:
      "Interactive hands-on sessions with experienced mentors, so your skills are ready to be applied in the real world.",
  },
  {
    title: "Community Meetup",
    description:
      "Casual gatherings that connect builders, developers, and technology enthusiasts across Indonesia.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              About BlockDev
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              BlockDev (Yayasan Literasi Rantai Digital) is an Indonesian foundation
              focused on developing builders in emerging technology such as Blockchain,
              AI, and Robotics — not only as developers, but also equipping them with an
              entrepreneurial spirit and direct connections to communities, startups,
              companies, and institutions shaping the emerging tech ecosystem in Indonesia
              and globally.
            </p>
          </header>

          {/* Learn. Build. Connect. */}
          <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Learn. Build. Connect.
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p>
                BlockDev is a community for anyone who wants to learn, build, and grow
                together in emerging technology. Here, developers, builders, students,
                and technology enthusiasts can meet, share knowledge, and collaborate.
              </p>
              <p>
                Through workshops, meetups, learning programs, and various collaborations,
                we want to help more people understand technology, improve their skills,
                and turn ideas into something that can be built.
              </p>
              <p>
                If you want to learn, share, or build something together with the
                community, BlockDev is the place to start.
              </p>
            </div>
          </section>

          {/* Activities */}
          <section className="mt-16">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Our Activities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl">
              We actively run various programs to support the builder ecosystem in Indonesia.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {ACTIVITIES.map((activity) => (
                <div
                  key={activity.title}
                  className="rounded-2xl border border-zinc-200 p-6 transition-all duration-200 hover:brightness-105"
                >
                  <h3 className="text-lg font-semibold text-zinc-950">{activity.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mt-16">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Our Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Behind BlockDev is a team dedicated to fostering collaboration, innovation,
              and the growth of Indonesia&apos;s builder community.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative mx-auto w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 45vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-zinc-950">{member.name}</h3>
                  <p className="text-xs text-zinc-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
