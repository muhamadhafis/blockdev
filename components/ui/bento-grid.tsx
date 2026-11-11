import React from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./spotlight-card";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  tag,
  icon: Icon,
  className,
  graphic,
  footer,
  colSpan = 1,
}: {
  title: string;
  description: string;
  tag?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  graphic?: React.ReactNode;
  footer?: React.ReactNode;
  colSpan?: 1 | 2 | 3;
}) {
  return (
    <SpotlightCard
      className={cn(
        "flex flex-col justify-between group",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "lg:col-span-3",
        className
      )}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
          )}
          {tag && (
            <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-600 border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>

      {/* Graphic / Visual Slot */}
      {graphic && (
        <div className="my-5 w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5">
          {graphic}
        </div>
      )}

      {/* Footer / CTA */}
      {footer && <div className="mt-4 pt-3 border-t border-zinc-150">{footer}</div>}
    </SpotlightCard>
  );
}
