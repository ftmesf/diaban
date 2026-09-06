"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deviceShot from "@/public/images/diaban-3rokh.png";

export function ProductPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div
        className="pointer-events-none absolute inset-[6%] -z-10 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 38% 32%, color-mix(in oklab, var(--brand-secondary) 40%, transparent), transparent 60%), radial-gradient(circle at 72% 78%, color-mix(in oklab, var(--brand-primary) 32%, transparent), transparent 55%)",
        }}
        aria-hidden
      />

      <Image
        src={deviceShot}
        alt="دستگاه تست قندخون دیابان مدل SMM1000 با نمایش نتیجه روی صفحه"
        priority
        sizes="(min-width: 768px) 440px, 85vw"
        className="relative z-0 h-auto w-full drop-shadow-[0_32px_60px_rgba(11,58,87,0.2)]"
      />

      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.75 }}
        className="absolute -right-1 top-[18%] z-10 hidden items-center gap-2 sm:flex"
      >
        <span dir="ltr" className="font-readout text-[11px] text-muted-foreground">
          5s
        </span>
        <span className="h-px w-8 bg-brand-secondary/50" aria-hidden />
        <span className="soft-surface rounded-full px-3 py-1.5 text-xs font-medium text-brand-fg backdrop-blur-sm">
          نتیجه در ۵ ثانیه
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.9 }}
        className="absolute bottom-[14%] -left-1 z-10 hidden items-center gap-2 sm:flex"
      >
        <span className="soft-surface rounded-full px-3 py-1.5 text-xs font-medium text-brand-fg backdrop-blur-sm">
          ۰.۵ میکرولیتر خون
        </span>
        <span className="h-px w-8 bg-brand-border" aria-hidden />
        <span dir="ltr" className="font-readout text-[11px] text-muted-foreground">
          0.5µl
        </span>
      </motion.div>
    </div>
  );
}
