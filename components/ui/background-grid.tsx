import * as React from "react";
import { cn } from "@/lib/utils";

export function BackgroundGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Subtle Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top Ambient Light Glow (Electric Blue / Indigo) */}
      <div className="pointer-events-none absolute top-[-140px] left-1/2 -translate-x-1/2 w-[650px] md:w-[950px] h-[400px] bg-gradient-to-b from-blue-600/20 via-blue-700/10 to-transparent blur-[140px] rounded-full" />

      {children}
    </div>
  );
}
