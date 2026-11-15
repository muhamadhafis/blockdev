"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "dark"
    | "telegram"
    | "discord"
    | "x"
    | "instagram"
    | "youtube";
  size?: "xs" | "sm" | "md" | "lg" | "responsive";
  withArrow?: boolean;
  showBrandIcon?: boolean;
}

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      showBrandIcon = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const brandIconClass = cn("shrink-0", {
      "h-3.5 w-3.5": size === "xs",
      "h-4 w-4": size === "sm" || size === "md",
      "h-5 w-5": size === "lg",
      "h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5": size === "responsive",
    });

    const BrandIcon = !showBrandIcon
      ? null
      : variant === "telegram"
      ? TelegramIcon
      : variant === "discord"
      ? DiscordIcon
      : variant === "x"
      ? XIcon
      : variant === "instagram"
      ? InstagramIcon
      : variant === "youtube"
      ? YouTubeIcon
      : null;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center font-sans uppercase tracking-wider transition-all duration-200 select-none group",
          withArrow ? "justify-between" : "justify-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          {
            // Primary (Electric Blue with top-lit reflection + optional arrow pill)
            "bg-radial from-[#2b6af7] via-[#2563EB] to-[#1d4ed8] text-white border border-blue-400/40 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "primary",

            // Secondary (Foto 1: Solid White background with black font-sans text)
            "bg-white text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300 active:scale-[0.98] cursor-pointer":
              variant === "secondary",

            // Ghost (Charcoal translucent 20% with white font-sans text)
            "bg-[#1c1c1f]/20 text-white hover:brightness-110 border border-white/10 active:scale-[0.98] cursor-pointer":
              variant === "ghost",

            // Dark (Solid charcoal / old ghost style, readable on light backgrounds)
            "bg-[#1c1c1f] text-white hover:brightness-110 border border-white/10 active:scale-[0.98] cursor-pointer":
              variant === "dark",

            // Outline (clean light border)
            "bg-transparent text-zinc-800 border border-zinc-300 hover:bg-zinc-100/80 hover:text-zinc-950":
              variant === "outline",

            // Telegram (Official Brand Blue Gradient + border)
            "bg-radial from-[#41B3E5] via-[#229ED9] to-[#1B8AC4] text-white border border-sky-300/30 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "telegram",

            // Discord (Official Blurple Gradient + border)
            "bg-radial from-[#7983F5] via-[#5865F2] to-[#4450C9] text-white border border-indigo-400/30 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "discord",

            // X / Twitter (Official Sleek Black + border)
            "bg-[#000000] text-white border border-white/20 hover:brightness-125 active:scale-[0.98] cursor-pointer":
              variant === "x",

            // Instagram (Official Brand Gradient + border)
            "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white border border-pink-400/30 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "instagram",

            // YouTube (Official Brand Red Gradient + border)
            "bg-radial from-[#FF1A1A] via-[#E60000] to-[#B30000] text-white border border-red-400/30 hover:brightness-105 active:scale-[0.98] cursor-pointer":
              variant === "youtube",

            // Fixed Sizes
            "h-8 rounded-md px-3.5 text-xs sm:h-11": size === "xs",
            "h-11 rounded-md px-3.5 text-xs": size === "sm",
            "h-13 rounded-md px-5 text-xs sm:text-sm": size === "md",
            "h-14 rounded-md px-6 text-sm sm:text-base": size === "lg",

            // Responsive Size: Mobile = sm (h-9, text-xs) -> Tablet = md (h-11, text-sm) -> Desktop = lg (h-12, text-sm/base)
            "h-9 rounded-md px-3.5 text-xs sm:h-11 sm:px-5 sm:text-xs md:text-sm lg:h-12 lg:px-6 lg:text-sm":
              size === "responsive",
          },
          className
        )}
        {...props}
      >
        <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
          {BrandIcon && <BrandIcon className={brandIconClass} />}
          {children}
        </span>
        {withArrow && (
          <span className="ml-2 sm:ml-3 flex h-6 w-6 sm:h-6 sm:w-6 items-center justify-center rounded-sm bg-white text-blue-600 shadow-sm">
            <ArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
