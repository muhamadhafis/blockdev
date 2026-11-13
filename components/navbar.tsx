"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isHero, setIsHero] = useState(isHome);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight - 80;
      setIsHero(isHome && window.scrollY < heroThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    // Lock body scroll while the mobile drawer is open
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks: { name: string; href: string; children?: { name: string; href: string }[] }[] = [
    { name: "About", href: "/about" },
    {
      name: "Knowledge",
      href: "/knowledge",
      children: [
        { name: "Knowledge", href: "/knowledge" },
        { name: "Course", href: "/course" },
      ],
    },
    { name: "Events", href: "/event" },
    { name: "Hackathon", href: "/hackathon" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
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
              className="h-5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="uppercase hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="group/col relative">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
                      isHero
                        ? "text-zinc-100 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover/col:visible group-hover/col:opacity-100 group-hover/col:translate-y-0 absolute left-0 top-full pt-3 transition-all duration-150">
                    <div className="min-w-44 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </nav>
        </div>

        {/* Right Side: Action Button (light on hero video, dark elsewhere) */}
        <div className="flex items-center">
          <Link
            href="https://linktr.ee/blockdev_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={isHero ? "secondary" : "dark"} size="xs">
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
