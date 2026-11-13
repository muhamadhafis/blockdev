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

  useEffect(() => {
    // Lock body scroll while the mobile drawer is open
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#tentang" },
    { name: "Knowledge", href: "#knowledge" },
    { name: "Hackathon", href: "#hackathon" },
    { name: "Events", href: "#acara" },
    { name: "Contact", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Brand Logo + Nav Links (grouped together) */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <Image
              src={isHero ? "/images/blockdev.png" : "/images/blockdev-colored.png"}
              alt="BlockDev Logo"
              width={160}
              height={31}
              priority
              className="h-6 sm:h-5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="uppercase hidden md:flex items-center gap-7">
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

        {/* Right Side: Action Button (light on hero video, dark elsewhere) */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="https://linktr.ee/blockdev_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={isHero ? "secondary" : "ghost"} size="xs">
              Come Join Us
            </Button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 -mr-2.5 transition-colors ${
              isHero ? "text-white hover:text-zinc-200" : "text-zinc-700 hover:text-zinc-950"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-zinc-200 bg-white/95 px-5 py-6">
          <nav className="uppercase flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-700 hover:text-zinc-950 py-2.5"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
