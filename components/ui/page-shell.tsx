import React from "react";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

/**
 * Shared page frame: Navbar on top, Footer at the bottom, and the standard
 * page background/typography. Use it on every route.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
