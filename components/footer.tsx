import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-600 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/blockdev.png"
                alt="BlockDev Logo"
                width={140}
                height={27}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
              A builder community in Indonesia focused on advancing emerging technology such as Blockchain, AI, Robotics, and future innovation.
            </p>

            <div className="pt-2 text-xs font-mono text-zinc-500">
              Initiated by <strong className="text-zinc-900 font-semibold">William Sutanto</strong> & the Indonesian Builder Ecosystem Team.
            </div>
          </div>

          {/* Navigasi */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              Main Menu
            </h4>
            <ul className="space-y-1 text-xs font-mono">
              <li>
                <Link href="#tentang" className="inline-block py-2 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#knowledge" className="inline-block py-2 hover:text-blue-600 transition-colors">
                  Knowledge
                </Link>
              </li>
              <li>
                <Link href="#hackathon" className="inline-block py-2 hover:text-blue-600 transition-colors">
                  Hackathon
                </Link>
              </li>
              <li>
                <Link href="#acara" className="inline-block py-2 hover:text-blue-600 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="inline-block py-2 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Komunitas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              Community
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="https://t.me/blockdev_official"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  Telegram (Official)
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com/invite/VrjqHVgbNA"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  Discord Server
                </Link>
              </li>
              <li>
                <Link
                  href="https://linktr.ee/blockdev_org"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  Linktree Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              Social Media
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="https://x.com/blockdev_org"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/blockdev_org"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@blockdev_org"
                  target="_blank"
                  className="inline-block py-2 hover:text-blue-600 transition-colors"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 BlockDev. All rights reserved.</p>
          <p>EMPOWERING INDONESIA&apos;S BUILDERS</p>
        </div>
      </div>
    </footer>
  );
}
