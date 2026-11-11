"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "responsive";
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-200 select-none group",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          {
            // Primary (Electric Blue with top-lit reflection + optional arrow pill)
            "bg-gradient-to-b from-[#2b6af7] via-[#2563EB] to-[#1d4ed8] text-white border border-blue-400/40 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "primary",

            // Secondary (Foto 1: Solid White background with black font-mono text)
            "bg-white text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300 active:scale-[0.98] cursor-pointer":
              variant === "secondary",

            // Ghost (Foto 2: Charcoal / Dark Gray with white font-mono text)
            "bg-[#1c1c1f] text-white hover:bg-[#27272b] border border-white/10 active:scale-[0.98] cursor-pointer":
              variant === "ghost",

            // Outline (clean light border)
            "bg-transparent text-zinc-800 border border-zinc-300 hover:bg-zinc-100/80 hover:text-zinc-950":
              variant === "outline",

            // Fixed Sizes
            "h-9 rounded-xl px-3.5 text-xs": size === "sm",
            "h-11 rounded-xl px-5 text-xs sm:text-sm": size === "md",
            "h-12 rounded-xl px-6 text-sm sm:text-base": size === "lg",

            // Responsive Size: Mobile = sm (h-9, text-xs) -> Tablet = md (h-11, text-sm) -> Desktop = lg (h-12, text-sm/base)
            "h-9 rounded-xl px-3.5 text-xs sm:h-11 sm:px-5 sm:text-xs md:text-sm lg:h-12 lg:px-6 lg:text-sm":
              size === "responsive",
          },
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <span className="ml-2 sm:ml-3 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
