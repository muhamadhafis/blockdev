import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | BlockDev",
  description:
    "Get in touch with BlockDev — join our Telegram, Discord, or reach us on social media.",
};

const CHANNELS = [
  {
    label: "Telegram (Official)",
    href: "https://t.me/blockdev_official",
    description: "Our main hub for daily discussions, announcements, and builder networking.",
  },
  {
    label: "Discord Server",
    href: "https://discord.com/invite/VrjqHVgbNA",
    description: "Voice chats, study groups, and event coordination with the community.",
  },
];

const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com/blockdev_org" },
  { label: "Instagram", href: "https://www.instagram.com/blockdev_org" },
  { label: "YouTube", href: "https://www.youtube.com/@blockdev_org" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              Contact
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Join the community or reach out to the BlockDev team — we are most
              responsive on Telegram and Discord.
            </p>
          </header>

          {/* Channels */}
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="rounded-2xl border border-zinc-200 p-6 transition-all duration-200 hover:brightness-105"
              >
                <h2 className="text-lg font-semibold text-zinc-950">{channel.label}</h2>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {channel.description}
                </p>
                <div className="mt-5">
                  <a href={channel.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" withArrow>
                      <span>JOIN NOW</span>
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Socials */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">
              Social Media
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/col inline-flex items-center rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-700 transition-all duration-150 hover:brightness-105 hover:text-zinc-950"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
