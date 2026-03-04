"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "SEO Optimization", href: "/services/seo" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed z-50 font-sans top-4 left-1/2 -translate-x-1/2 min-w-[250px] lg:min-w-[768px]
        max-md:transition-[width,border-radius] max-md:duration-300 max-md:ease-out
        ${mobileOpen ? "max-md:w-[calc(100%-2rem)]" : "max-md:w-[280px]"}
        md:left-1/2 md:-translate-x-1/2`}
    >
      <div
        className={`relative drop-shadow-xl transition-[border-radius] duration-300 ease-out rounded-full ${mobileOpen ? "max-md:rounded-2xl" : ""}`}
      >
        {/* Background & animated border */}
        <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#FAFAFA1A] transition-[border-radius] duration-300 rounded-full`}>
          {/* Rotating blur glow */}
          <div
            className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-[glow-spin_4s_linear_infinite]"
          >
            <div className="absolute -top-full left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-white/80 blur-[50px]" />
          </div>
          <div className={`absolute inset-px bg-[#1a1a1a]/95 backdrop-blur-md transition-[border-radius] duration-300 rounded-full ${mobileOpen ? "max-md:rounded-2xl" : "rounded-full"}`} />
        </div>
        {/* Content */}
        <div className={`relative z-10 flex items-center justify-between gap-6 px-4 py-2 font-sans ${mobileOpen ? "max-md:rounded-2xl" : "rounded-full"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="27"
            viewBox="0 0 91 27"
            fill="none"
          >
            <path
              d="M23.625 8.76411V17.4873L8.53662 26.6734L0 22.5752V5.31766L8.39482 10.9331V17.4987L15.2723 13.3154L1.26206 4.26831L10.1248 0L23.625 8.55525V8.76411Z"
              fill="#1AEFD0"
            />
            <path
              d="M28.2678 12.4697V11.2412L29.6538 10.9734V9.41417C29.6538 8.20142 30.0318 6.95717 31.9218 6.95717C32.6935 6.95717 33.355 7.06742 34.0795 7.33517V8.45342C34.0638 8.45342 32.41 8.43767 32.41 8.43767C31.4808 8.42192 31.4808 8.91017 31.4808 9.74492V10.9734H33.544V12.4697H31.4808V19.3367H29.6538V12.4697H28.2678ZM34.6634 19.3367V10.9734H36.1439L36.4904 12.0287C37.1991 11.4774 38.0181 10.8789 39.1521 10.8789C39.5459 10.8789 39.9554 10.9104 40.1601 10.9892V12.7689C39.9554 12.7374 39.4356 12.7059 38.9789 12.7059C37.9394 12.7059 37.2779 12.9264 36.4904 13.6352V19.3367H34.6634ZM42.6548 14.5329H45.2693C45.8205 14.5329 46.0725 14.2967 46.0725 13.8557C46.0725 12.5799 45.8678 12.4067 44.5763 12.4067C43.1903 12.4067 42.6548 12.4539 42.6548 14.5329ZM40.8278 15.1157C40.8278 11.4774 41.8673 10.9104 44.4818 10.9104C46.7498 10.9104 47.8995 11.1467 47.8995 13.9187C47.8995 15.3204 47.1435 15.9662 45.6315 15.9662H42.6548C42.6548 17.6357 43.1588 17.8719 44.3558 17.8719C45.6945 17.8719 46.5608 17.8877 47.742 17.6987V18.9744C46.5293 19.3839 44.8913 19.4154 43.584 19.4154C41.4578 19.4154 40.8278 18.2657 40.8278 15.1157ZM48.9767 13.8084V13.0839C48.9767 11.7924 49.5279 10.8947 51.1502 10.8947C52.4732 10.8947 54.7727 10.9892 55.4814 11.2569V12.4697H51.5754C50.8509 12.4697 50.8037 12.7217 50.8037 13.1784V13.6824C50.8037 14.3282 51.1344 14.3439 51.5754 14.3439H53.7489C55.2609 14.3439 55.9067 15.2574 55.9067 16.4702V17.2892C55.9067 19.0059 54.8672 19.4154 53.8592 19.4154C52.5677 19.4154 49.9059 19.2894 49.3232 19.0217V17.8247H53.4024C53.4969 17.8247 54.0797 17.8562 54.0797 17.1789V16.6434C54.0797 16.2182 53.9379 15.9819 53.4024 15.9819H51.2604C49.7799 15.9819 48.9767 15.4307 48.9767 13.8084ZM57.2271 19.3367V7.00442H59.0541V11.9027C59.8416 11.3829 60.5818 10.8317 61.8576 10.8317C63.7161 10.8317 64.3933 12.1547 64.3933 13.6667V19.3367H62.5663V13.6509C62.5663 12.7532 62.1096 12.3752 61.4638 12.3752C60.4401 12.3752 59.9046 12.6429 59.0541 13.1627V19.3367H57.2271ZM67.6516 17.5884C68.4076 17.8404 69.1006 17.9349 70.0299 17.9349C70.8331 17.9349 71.3056 17.4624 71.3056 15.1787C71.3056 13.2414 70.8489 12.5012 70.0299 12.5012C69.0534 12.5012 68.2659 12.7689 67.6516 13.0997V17.5884ZM65.8404 23.5892V10.9734H67.2894L67.6516 11.8397C68.1241 11.4774 69.3684 10.8789 70.3921 10.8789C72.5341 10.8789 73.1326 12.8162 73.1326 15.1157C73.1326 17.4309 72.7231 19.4627 70.3921 19.4627C69.6834 19.4627 68.5021 19.2579 67.6516 18.8957V23.5892H65.8404ZM74.5452 19.3367V10.9734H76.3722V19.3367H74.5452ZM74.4349 9.69767V8.50067C74.4349 8.24867 74.5609 8.09117 74.8129 8.09117H76.1517C76.3879 8.09117 76.5139 8.28017 76.5139 8.50067V9.69767C76.5139 9.93392 76.3722 10.0599 76.1517 10.0599H74.8129C74.5924 10.0599 74.4349 9.91817 74.4349 9.69767ZM77.4876 19.3367L80.4329 15.1472L77.4876 10.9734H79.7241L81.5196 13.7297L83.3624 10.9734H85.5831L82.6221 15.1944L85.4571 19.3367H83.3624L81.5354 16.5962L79.7241 19.3367H77.4876ZM86.6968 16.3599V7.00442H88.5238V16.1394C88.5238 17.4152 88.8388 17.6987 89.3113 17.8404C89.3113 17.8404 90.3823 18.1712 90.4926 18.1712V19.3367H88.8231C87.5158 19.3367 86.6968 18.5807 86.6968 16.3599Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Desktop nav - shadcn NavigationMenu */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-0 py-2 text-sm font-medium text-[#FFFFFF99] hover:text-white font-instrument-small"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-2 font-instrument-small">
                    {serviceLinks.map((link) => (
                      <NavigationMenuLink
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/wordpress"
                  className="px-2 py-2 text-sm font-medium text-[#FFFFFF99] hover:text-white font-instrument-small"
                >
                  WordPress
                </NavigationMenuLink> 
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* CTA - white bg, black text; hover = gradient border */}
        <Link
          href="/book"
          className="relative group hidden md:inline-block p-[2px] font-semibold leading-6 text-black bg-white cursor-pointer rounded-full"
        >
          <span
            className="absolute inset-0 rounded-full bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="relative z-10 block px-3 py-1 rounded-full bg-white hover:bg-white/50 transition-all">
            <span className="relative z-10 flex items-center justify-center gap-2 text-black text-sm font-medium whitespace-nowrap font-plus-jakarta">
              Book a Call
            </span>
          </span>
        </Link>

        {/* Mobile toggle: hamburger ↔ X with smooth transition */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative p-2 w-10 h-10 text-[#FFFFFF99] hover:text-white flex items-center justify-center"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative w-6 h-6 block">
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-200 ease-out ${
                mobileOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-200 ease-out ${
                mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      </div>

      {/* Mobile menu - fades in (no slide), appears when header is expanded */}
      <div
        className={`md:hidden overflow-hidden border border-white/10 rounded-2xl bg-[#1a1a1a]/95 backdrop-blur-md mt-2 transition-[opacity,margin] duration-300 ease-out ${
          mobileOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 py-2">
            <span className="text-sm text-zinc-300">Services</span>
            <div className="mt-1 ml-3 flex flex-col gap-0">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/wordpress"
            className="px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(false)}
          >
            WordPress
          </Link>
          <Link
            href="/book"
            className="relative group mt-3 inline-block p-[2px] font-semibold leading-6 text-black bg-white cursor-pointer rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            <span className="absolute inset-0 rounded-full bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 block px-6 py-2 rounded-full bg-white hover:bg-white/50 transition-all">
              <span className="relative z-10 flex items-center justify-center gap-2 text-black text-sm font-medium whitespace-nowrap font-jakarta-sans">
                Book a Call
              </span>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
