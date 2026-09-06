"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "#concerns", label: "دغدغه‌ها" },
  { href: "#why", label: "چرا دیابان" },
  { href: "#specs", label: "مشخصات فنی" },
  { href: "#app", label: "اپلیکیشن سیناکر" },
  { href: "#faq", label: "سوالات متداول" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="cursor-pointer rounded-lg transition duration-200 hover:opacity-90">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="منوی اصلی">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-brand-fg/80 transition duration-200 hover:bg-brand-bg hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#buy"
            className="inline-flex h-10 min-h-10 cursor-pointer items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-brand-primary/25"
          >
            خرید دستگاه دیابان
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          className="flex size-11 cursor-pointer items-center justify-center rounded-xl text-brand-fg transition duration-200 hover:bg-brand-bg md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="glass-panel mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium text-brand-fg transition duration-200 hover:bg-brand-bg-alt"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setMenuOpen(false)}
            className="mt-1 inline-flex h-11 cursor-pointer items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary/90"
          >
            خرید دستگاه دیابان
          </a>
        </div>
      )}
    </header>
  );
}
