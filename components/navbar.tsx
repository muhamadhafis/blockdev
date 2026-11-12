"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight - 80;
      setIsHero(window.scrollY < heroThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Knowledge", href: "#knowledge" },
    { name: "Hackathon", href: "#hackathon" },
    { name: "Acara", href: "#acara" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isHero
          ? "bg-black/25 border-white/10 shadow-none"
          : "bg-white/90 border-zinc-200/80 shadow-xs"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Brand Logo + Nav Links (grouped together) */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <Image
              src={isHero ? "/images/blockdev.png" : "/images/blockdev.png"}
              alt="BlockDev Logo"
              width={160}
              height={31}
              priority
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isHero
                    ? "text-zinc-100 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Menu Masuk: Ghost Button (Disabled) */}
          <Button
            variant="ghost"
            size="sm"
            disabled
            title="Fitur masuk sedang dipersiapkan"
            className={isHero ? "text-white/80 border-white/10 hover:text-white" : ""}
          >
            Masuk
          </Button>

          {/* Action CTA: Style Second (White with subtle border) */}
          <Link
            href="https://linktr.ee/blockdev_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm">
              Gabung
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isHero ? "text-white hover:text-zinc-200" : "text-zinc-700 hover:text-zinc-950"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl px-5 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-700 hover:text-zinc-950 py-1.5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 flex flex-col gap-2.5">
            <Button variant="ghost" disabled className="w-full">
              Masuk
            </Button>
            <Link
              href="https://linktr.ee/blockdev_org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="secondary" className="w-full">
                Gabung Komunitas
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
