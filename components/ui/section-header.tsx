import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "text-center mx-auto mb-12 sm:mb-16" : "text-left mb-12",
        className
      )}
    >
      {badge && (
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {badge}
        </p>
      )}
      <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
