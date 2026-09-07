"use client";

import { motion } from "framer-motion";
import { FileText, ShoppingCart } from "lucide-react";
import { ProductPhoto } from "./ProductPhoto";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="hero-atmosphere relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-border to-transparent"
        aria-hidden
      />

      <div className="mx-auto grid min-h-[min(88vh,860px)] max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div className="relative z-10 order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="max-w-xl text-balance text-3xl font-extrabold leading-[1.25] text-brand-fg sm:text-4xl lg:text-[2.75rem]"
          >
            دیابان؛ دستگاه تست قندخونی که{" "}
            <span className="brand-gradient-text">همیشه نوارش پیدا می‌شه</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease }}
            className="mt-5 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg"
          >
            دیابان دستگاه تست قندخون خانگی با دقت بالینی تاییدشده، نمونه‌گیری
            کم‌درد و نوار همیشه در دسترس است — کنترل روزانه قندخون را ساده و
            مطمئن می‌کند.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#buy" className="btn-primary soft-shadow">
              <ShoppingCart size={18} aria-hidden />
              خرید دستگاه دیابان
            </a>
            <a href="#specs" className="btn-secondary soft-shadow">
              <FileText size={18} aria-hidden />
              مشاهده مشخصات فنی
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.28 }}
            className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground"
          >
            {[
              "تاییدیه سازمان غذا و دارو",
              "گارانتی مادام‌العمر",
              "نوار همیشه موجود",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-brand-secondary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="relative order-1 lg:order-2"
        >
          <div
            className="pointer-events-none absolute start-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-2xl"
            aria-hidden
          />
          <div className="animate-hero-float">
            <ProductPhoto />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
