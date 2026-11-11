import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "outline" | "glow";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        {
          "border border-zinc-800 bg-zinc-900/80 text-zinc-300 backdrop-blur-md":
            variant === "default",
          "border border-emerald-500/30 bg-emerald-950/40 text-emerald-300":
            variant === "success",
          "border border-zinc-700/60 bg-transparent text-zinc-400":
            variant === "outline",
          "border border-emerald-500/40 bg-zinc-950 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]":
            variant === "glow",
        },
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
      )}
      {children}
    </div>
  );
}
