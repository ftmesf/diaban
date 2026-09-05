"use client";

import { motion } from "framer-motion";
import { Check, FileDown, ShoppingCart, ShieldCheck } from "lucide-react";
import { ProductPhoto } from "./ProductPhoto";
import { BrandRings } from "@/components/BrandRings";

const BADGES = [
  "تاییدیه سازمان غذا و دارو",
  "گارانتی مادام‌العمر",
  "نوار همیشه در دسترس",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <BrandRings className="pointer-events-none absolute -top-24 -right-32 -z-10 h-[520px] w-[520px] text-brand-primary opacity-[0.06]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex h-auto items-center gap-1.5 rounded-full border border-brand-border bg-brand-bg-alt px-3 py-1 text-xs font-semibold text-brand-primary"
          >
            <ShieldCheck size={14} />
            دستگاه تست قندخون خانگی
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-3xl font-extrabold leading-tight text-brand-fg sm:text-4xl lg:text-5xl"
          >
            دیابان؛ دستگاه تست قندخونی که{" "}
            <span className="brand-gradient-text">همیشه نوارش پیدا می‌شه</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            قندخون را هر روز بسنجید، نه فقط وقتی حال‌تان خوب نیست. دیابان با دقت بالینی،
            نمونه‌گیری کم‌درد و نوار همیشه در دسترس، کنترل روزانه را ساده و مطمئن می‌کند.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#buy"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition hover:bg-primary/80"
            >
              <ShoppingCart size={18} />
              خرید دستگاه دیابان
            </a>
            <a
              href="#specs"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-base font-medium text-foreground transition hover:bg-muted"
            >
              <FileDown size={18} />
              دانلود بروشور محصول
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {BADGES.map((label) => (
              <li key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Check size={15} className="shrink-0 text-brand-accent" strokeWidth={2.5} />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProductPhoto />
        </motion.div>
      </div>
    </section>
  );
}
