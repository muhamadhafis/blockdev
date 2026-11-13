import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Main Menu",
    links: [
      { label: "About", href: "/about" },
      { label: "Events", href: "/event" },
      { label: "Hackathon", href: "/hackathon" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Knowledge",
    links: [
      { label: "Knowledge", href: "/knowledge" },
      { label: "Course", href: "/course" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Telegram (Official)", href: "https://t.me/blockdev_official" },
      { label: "Discord Server", href: "https://discord.com/invite/VrjqHVgbNA" },
      { label: "Linktree Portal", href: "https://linktr.ee/blockdev_org" },
    ],
  },
  {
    heading: "Social Media",
    links: [
      { label: "X (Twitter)", href: "https://x.com/blockdev_org" },
      { label: "Instagram", href: "https://www.instagram.com/blockdev_org" },
      { label: "YouTube", href: "https://www.youtube.com/@blockdev_org" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand (left on desktop, top on mobile) */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/blockdev.png"
                alt="BlockDev Logo"
                width={140}
                height={27}
                className="h-7 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Link columns (right on desktop, stacked below logo on mobile).
              Hovering the column dims all links; hovering one link lights it up. */}
          {footerLinks.map((column) => (
            <div key={column.heading} className="group/col">
              <h4 className="text-xs font-sans uppercase tracking-wider text-zinc-500">
                {column.heading}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block text-zinc-100 transition-colors duration-150 group-hover/col:text-zinc-600 hover:text-white!"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800 text-xs text-zinc-500 font-sans">
          <p>© 2026 BlockDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
