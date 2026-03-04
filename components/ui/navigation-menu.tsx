"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

const NavigationMenu = NavigationMenuPrimitive.Root;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "flex items-center gap-1 rounded-full bg-transparent text-sm text-zinc-300",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navUnderlineClass =
  "absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out";

const textGlowFillWrapper =
  "relative inline-block";
const textGlowFillClip =
  "absolute left-0 top-0 bottom-0 w-0 overflow-hidden transition-[width] duration-300 ease-out group-hover:w-full group-data-[state=open]:w-full";
const textGlowFillGradient =
  "inline-block bg-gradient-to-r from-[#1AEFD0] via-white to-[#1AEFD0]/80 bg-clip-text text-transparent [text-shadow:0_0_12px_rgba(26,239,208,0.5)]";

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "group relative font-instrument-small inline-flex items-center justify-center rounded-full px-1 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black data-[state=open]:text-white",
      className,
    )}
    {...props}
  >
    <span className={textGlowFillWrapper}>
      <span className="relative z-10">{children}</span>
      <span className={textGlowFillClip} aria-hidden>
        <span className={textGlowFillGradient}>{children}</span>
      </span>
    </span>
    <span
      className={cn(
        navUnderlineClass,
        "left-1/2 w-2/3 -translate-x-1/2 origin-center group-hover:scale-x-100 group-data-[state=open]:scale-x-100",
      )}
      aria-hidden
    />
    <svg
      className="ml-1 h-3 w-3 text-zinc-400 transition-transform group-data-[state=open]:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName =
  NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "absolute left-0 top-full z-50 mt-3 w-max min-w-48 rounded-2xl",
      className,
    )}
    {...props}
  >
    {/* Animated border background */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl bg-[#FAFAFA1A]">
      <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-[glow-spin_5s_linear_infinite]">
        <div className="absolute -top-full left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-white/80 blur-2xl" />
      </div>
      <div className="absolute inset-px rounded-2xl bg-zinc-950/95 backdrop-blur-xl" />
    </div>
    {/* Content */}
    <div className="relative z-10 px-4 py-3 shadow-xl font-instrument-small">
      {children}
    </div>
  </NavigationMenuPrimitive.Content>
));
NavigationMenuContent.displayName =
  NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={cn(
      "group relative inline-block rounded-lg px-1 py-2 text-sm text-zinc-300 transition-colors hover:text-white font-instrument-small",
      className,
    )}
    {...props}
  >
    <span className={textGlowFillWrapper}>
      <span className="relative z-10">{children}</span>
      <span className={textGlowFillClip} aria-hidden>
        <span className={textGlowFillGradient}>{children}</span>
      </span>
    </span>
    <span
      className={cn(navUnderlineClass, "group-hover:scale-x-100")}
      aria-hidden
    />
  </NavigationMenuPrimitive.Link>
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};

