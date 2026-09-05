"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deviceShot from "@/public/images/diaban-3rokh.png";

export function ProductPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Image
        src={deviceShot}
        alt="دستگاه تست قندخون دیابان مدل SMM1000 با نمایش نتیجه روی صفحه"
        priority
        sizes="(min-width: 768px) 420px, 80vw"
        className="h-auto w-full drop-shadow-xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -right-2 top-10 hidden items-center gap-2 sm:flex"
      >
        <span dir="ltr" className="font-readout text-xs text-muted-foreground">
          5s
        </span>
        <span className="h-px w-10 bg-brand-secondary/60" />
        <span className="rounded-full border border-brand-border bg-white px-2.5 py-1 text-xs text-brand-fg shadow-sm">
          نتیجه در ۵ ثانیه
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="absolute bottom-8 -left-2 hidden items-center gap-2 sm:flex"
      >
        <span className="rounded-full border border-brand-border bg-white px-2.5 py-1 text-xs text-brand-fg shadow-sm">
          ۰.۵ میکرولیتر خون
        </span>
        <span className="h-px w-10 bg-brand-border" />
        <span dir="ltr" className="font-readout text-xs text-muted-foreground">
          0.5µl
        </span>
      </motion.div>
    </div>
  );
}
