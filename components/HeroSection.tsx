import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { StatsIcon } from "./StatsIcon";

const stats = [
  {
    value: "10+ Years",
    description: "of Devs who love coffee",
  },
  {
    value: "10+ Core Engineers",
    description: "behind RapidLoad AI",
    href: "https://rapidload.io",
  },
  {
    value: "100% Success Rate",
    description: "Our Upwork Agency Profile",
    href: "https://www.upwork.com",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black pt-20 px-6">
      {/* Pill badge */}
      <div className="relative mb-8 rounded-full">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full bg-[#FAFAFA1A]">
          <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-[glow-spin_4s_linear_infinite]">
            <div className="absolute -top-full left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-white/80 blur-[30px]" />
          </div>
          <div className="absolute inset-px rounded-full bg-black" />
        </div>
        <div className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 14.66%)' }}>
          <span className="h-2 w-2 rounded-full bg-[#1AEFD0] animate-pulse" />
          <span className="text-sm text-zinc-400 font-instrument-small">
            Build Your Online Identity Today
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="max-w-3xl text-center text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-[94px] font-plus-jakarta">
        Expertly Built.
        <br />
        Your idea.
      </h1>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/book"
          className="relative group inline-block rounded-full cursor-pointer"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)' }}>
            <div className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[glow-spin_4s_linear_infinite]">
              <div className="absolute -top-full left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-white/80 blur-2xl" />
            </div>
            <div className="absolute inset-[4px] rounded-full bg-white" />
          </div>
          <span className="relative z-10 block px-16 py-2 m-[4px] rounded-full bg-white">
            <span className="flex items-center justify-center gap-2 text-black lg:text-[18px] text-[16px] font-bold whitespace-nowrap font-plus-jakarta">
              Book a Call
            </span>
          </span>
        </Link>
      </div>

      {/* Stats */}
      <div className="relative w-full max-w-[1200px] pb-6 lg:pt-20 pt-16 mt-16 lg:mt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0)_100%)] bg-size-[200%_100%] animate-[gradient-border-flow_6s_linear_infinite]" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="flex items-stretch gap-4 pointer-events-none">
              <StatsIcon className="h-full w-auto" />
              <div>
                <p className="lg:text-[28px] text-[24px] font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>{stat.value}</p>
                <p className="text-sm text-[#FFFFFF99] font-medium font-instrument-small">
                  {stat.description}
                  {stat.href && (
                    <a
                      href={stat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-zinc-300 transition-colors"
                    >
                      <ExternalLink className="ml-1 h-3 w-3 text-zinc-500" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
