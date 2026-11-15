import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { PageHeader } from "@/components/ui/page-header";
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
    variant: "telegram" as const,
  },
  {
    label: "Discord Server",
    href: "https://discord.com/invite/VrjqHVgbNA",
    description: "Voice chats, study groups, and event coordination with the community.",
    variant: "discord" as const,
  },
];

const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com/blockdev_org", variant: "x" as const },
  { label: "Instagram", href: "https://www.instagram.com/blockdev_org", variant: "instagram" as const },
  { label: "YouTube", href: "https://www.youtube.com/@blockdev_org", variant: "youtube" as const },
];

export default function ContactPage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Contact"
            description="Join the community or reach out to the BlockDev team — we are most responsive on Telegram and Discord."
          />

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
                    <Button variant={channel.variant} size="sm">
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
                  >
                    <Button variant={social.variant} size="sm">
                      <span>{social.label}</span>
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
