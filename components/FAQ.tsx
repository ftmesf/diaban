"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "از کجا می‌تونم دیابان بخرم؟",
    a: "فروشگاه سیناکر، داروخانه‌ها، فروشگاه‌های تجهیزات پزشکی، دیجی‌کالا و سایر مراکز دارای تاییدیه سازمان غذا و دارو. (مراکز توزیع و داروخانه‌های معتبر)",
  },
  {
    q: "نوار تست دیابان همیشه در بازار هست؟",
    a: "بله. «خیالت راحت، نوار تستش همیشه هست» تعهد اصلی دیابان است — یعنی همیشه به نوار سازگار دسترسی دارید و نگران قطع شدنش نیستید.",
  },
  {
    q: "بعد از باز کردن بسته نوار، چقدر می‌تونم ازش استفاده کنم؟",
    a: "حداکثر تا ۳ ماه پس از باز شدن درب پلمب.",
  },
  {
    q: "گارانتی دستگاه چقدره؟",
    a: "مادام‌العمر.",
  },
  {
    q: "دستگاه نیاز به کالیبراسیون داره؟",
    a: "نه؛ کالیبراسیون به‌صورت خودکار و بدون دخالت کاربر انجام می‌شه.",
  },
  {
    q: "از صحت نتیجه تست چطور مطمئن بشم؟",
    a: "دستگاه به‌طور خودکار کالیبره می‌شه. برای اطمینان بیشتر می‌تونید با خدمات پس از فروش تماس بگیرید: ۰۲۱۹۱۰۰۲۰۰۲",
  },
  {
    q: "چطور اندازه‌گیری‌هامو مدیریت کنم؟",
    a: "با ثبت نتایج در اپلیکیشن سیناکر، می‌تونید داده‌هاتون رو در بازه‌های زمانی مختلف پیگیری و گزارش‌گیری کنید.",
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-brand-border/70 bg-white px-5 shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 py-5 text-start"
      >
        <span className={`flex-1 text-base font-semibold transition-colors ${isOpen ? "text-brand-primary" : "text-brand-fg"}`}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-muted-foreground"
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pe-8 text-sm leading-7 text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-bg-alt py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, var(--brand-primary) 12%, transparent), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            سوالات متداول
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
