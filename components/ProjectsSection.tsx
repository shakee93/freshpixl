"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, BarChart3, CheckCircle2, Globe2, Rocket } from "lucide-react";

type Category = "Websites" | "Mobile Apps" | "Plugins" | "Products" | "SEO" | "Branding" | "Software";

const categories: { id: Category; label: string }[] = [
  { id: "Websites", label: "Websites" },
  { id: "Mobile Apps", label: "Mobile Apps" },
  { id: "Plugins", label: "Plugins" },
  { id: "Products", label: "Products" },
  { id: "SEO", label: "SEO" },
  { id: "Branding", label: "Branding" },
  { id: "Software", label: "Software" },
];

type Project = {
  id: string;
  title: string;
  client: string;
  description: string;
  category: Category;
  resultPills: string[];
  meta: string;
  ctaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
};

const projects: Project[] = [
  // Websites
  {
    id: "gq-mobiles",
    title: "GQ Mobiles – Headless E‑commerce",
    client: "GQ Mobile",
    description: "High-speed WordPress + Next.js storefront with SEO-first architecture and Genie payments integration.",
    category: "Websites",
    resultPills: ["200% faster load", "+70% organic traffic", "Headless WP + Next.js"],
    meta: "Websites · SEO",
    ctaLabel: "Visit Site",
    imageSrc: "/homepage/gq.jpg",
    imageAlt: "GQ Mobiles headless ecommerce website shown on laptop",
  },
  {
    id: "green-farming",
    title: "GreenFarming.lk – Fresh Produce Website",
    client: "Green Farming",
    description: "Wholesale marketplace for fresh fruits & vegetables with mobile‑first experience.",
    category: "Websites",
    resultPills: ["10k+ bulk discounts", "SEO + mobile‑first"],
    meta: "Websites · SEO",
    ctaLabel: "Visit Site",
    imageSrc: "/homepage/greenfarming.jpg",
    imageAlt: "GreenFarming fresh produce website design on laptop",
  },
  {
    id: "toolcity",
    title: "ToolCity.lk – Industrial Tools & Machinery",
    client: "Tool City",
    description: "Online store for industrial tools in Sri Lanka, optimized for conversions.",
    category: "Websites",
    resultPills: ["2x faster load", "Higher conversion rate"],
    meta: "Websites · E‑commerce",
    ctaLabel: "Visit Site",
    imageSrc: "/homepage/lulu.jpg",
    imageAlt: "GreenFarming fresh produce website design on laptop",
  },

  // Mobile Apps
  {
    id: "freshmart-app",
    title: "FreshMart – Grocery Delivery App",
    client: "FreshMart",
    description: "iOS and Android app for same-day grocery delivery with real-time order tracking.",
    category: "Mobile Apps",
    resultPills: ["4.8★ app rating", "35% higher retention"],
    meta: "Mobile Apps · Product",
    ctaLabel: "View Case Study",
  },
  {
    id: "fleettrack-app",
    title: "FleetTrack – Logistics Companion",
    client: "FleetTrack",
    description: "Driver-first mobile app with offline routes and automatic delivery updates.",
    category: "Mobile Apps",
    resultPills: ["98% delivery accuracy", "40% fewer support tickets"],
    meta: "Mobile Apps · SaaS",
    ctaLabel: "View Case Study",
  },

  // Plugins
  {
    id: "rapidload-plugin",
    title: "RapidLoad – Performance Plugin",
    client: "RapidLoad",
    description: "Performance optimization plugin powering thousands of high-traffic WordPress sites.",
    category: "Plugins",
    resultPills: ["90+ PageSpeed scores", "10k+ active installs"],
    meta: "Plugins · Performance",
    ctaLabel: "View Plugin",
  },
  {
    id: "seo-schema-plugin",
    title: "Schema Builder – SEO Plugin",
    client: "SEO Studio",
    description: "Schema automation plugin that helps brands win more rich snippets.",
    category: "Plugins",
    resultPills: ["3x rich results", "Simplified content ops"],
    meta: "Plugins · SEO",
    ctaLabel: "View Plugin",
  },

  // Products
  {
    id: "booking-suite",
    title: "BookingSuite – Reservation Platform",
    client: "BookingSuite",
    description: "End‑to‑end booking experience for boutique hotels and villas.",
    category: "Products",
    resultPills: ["2.4x bookings", "Unified guest journeys"],
    meta: "Products · SaaS",
    ctaLabel: "View Product",
  },
  {
    id: "pos-hub",
    title: "POS Hub – Retail OS",
    client: "POS Hub",
    description: "Cloud POS product with real-time inventory and multi‑store management.",
    category: "Products",
    resultPills: ["Sync across channels", "Single source of truth"],
    meta: "Products · Retail",
    ctaLabel: "View Product",
  },

  // SEO
  {
    id: "organic-seo",
    title: "Organic Growth SEO Program",
    client: "D2C Collective",
    description: "Technical SEO, content, and performance work that compounds over time.",
    category: "SEO",
    resultPills: ["+170% organic traffic", "3x revenue from search"],
    meta: "SEO · Strategy",
    ctaLabel: "View Results",
  },
  {
    id: "b2b-seo",
    title: "B2B SEO Engine",
    client: "SaaS Foundry",
    description: "Search strategy built for long‑sales‑cycle B2B software companies.",
    category: "SEO",
    resultPills: ["4x demo requests", "Authority content system"],
    meta: "SEO · B2B",
    ctaLabel: "View Results",
  },

  // Branding
  {
    id: "lumen-brand",
    title: "Lumen – Brand Refresh",
    client: "Lumen Studio",
    description: "Digital-first identity system rolled out across web, product, and campaigns.",
    category: "Branding",
    resultPills: ["Consistent visuals", "Recognizable everywhere"],
    meta: "Branding · Digital",
    ctaLabel: "View Brand System",
  },
  {
    id: "northlane-brand",
    title: "Northlane – SaaS Positioning",
    client: "Northlane",
    description: "Narrative, visuals, and web presence aligned around a single clear promise.",
    category: "Branding",
    resultPills: ["Sharpened messaging", "Premium perception"],
    meta: "Branding · SaaS",
    ctaLabel: "View Brand System",
  },

  // Software
  {
    id: "ops-dashboard",
    title: "OpsBoard – Operations Dashboard",
    client: "Ops Collective",
    description: "Custom dashboard that unifies orders, tickets, and SLAs in one view.",
    category: "Software",
    resultPills: ["Single pane of glass", "Faster decision‑making"],
    meta: "Software · Internal Tools",
    ctaLabel: "View Case Study",
  },
  {
    id: "data-sync",
    title: "DataSync – Integration Layer",
    client: "DataSync",
    description: "Service layer that keeps CRMs, billing, and analytics perfectly in sync.",
    category: "Software",
    resultPills: ["Zero manual exports", "Reliable reporting"],
    meta: "Software · Platform",
    ctaLabel: "View Case Study",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Websites");

  const visibleProjects = projects
    .filter((project) => project.category === activeCategory)
    .slice(0, 3);

  return (
    <section className="w-full bg-white px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-plus-jakarta text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-[40px]">
            Projects that deliver real results
          </h2>
          <p className="max-w-2xl text-sm font-medium font-instrument-small text-[#00000099]">
            Each project tells a story — from the challenge to the solution, and the impact we created.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={[
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 hover:border-zinc-300",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E5E7EB] bg-[#00000008] shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="px-3 pt-3">
                <div className="relative h-[225px] w-full overflow-hidden rounded-2xl">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-[#1AEFD0] via-emerald-400 to-sky-500" />
                  )}
                  <div className="pointer-events-none absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-neutral-900 backdrop-blur-md shadow-sm">
                      {project.client}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1.5">
                  <h3 className="font-plus-jakarta text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.resultPills.map((pill, i) => {
                    const Icon =
                      /faster|load|speed/i.test(pill)
                        ? Rocket
                        : /traffic|organic|revenue|conversion/i.test(pill)
                        ? BarChart3
                        : i === 2
                        ? Globe2
                        : CheckCircle2;
                    return (
                      <span
                        key={pill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-medium text-zinc-700"
                      >
                        <Icon className="h-3 w-3 text-zinc-500" />
                        {pill}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto border-t border-zinc-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#00000099]">{project.meta}</span>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#14D79C] px-4 py-1.5 text-xs font-semibold text-black shadow-sm transition hover:bg-[#10c08b]"
                  >
                    {project.ctaLabel}
                    <span className="opacity-40 font-light">|</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

