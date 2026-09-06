import { Award, Droplet, Smartphone, Store } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { BrandRings } from "@/components/BrandRings";

const FEATURES = [
  {
    icon: Award,
    title: "دقت بالینی تاییدشده",
    desc: "تایید آزمایشگاه مرجع و مراکز پزشکی؛ نتیجه قابل‌اعتماد در کمتر از ۵ ثانیه.",
    metric: "۵ ثانیه",
    metricLabel: "تا نتیجه",
    latin: false,
  },
  {
    icon: Droplet,
    title: "نمونه‌گیری کم‌درد",
    desc: "فقط ۰.۵ میکرولیتر خون — یک قطره کوچک، بدون نمونه‌گیری پرحجم.",
    metric: "۰٫۵ µl",
    metricLabel: "حجم نمونه",
    latin: false,
  },
  {
    icon: Smartphone,
    title: "اتصال به سیناکر",
    desc: "اسکن OCR، نمودار روند، و اشتراک مستقیم با پزشک.",
    metric: "OCR",
    metricLabel: "ثبت هوشمند",
    latin: true,
  },
  {
    icon: Store,
    title: "نوار همیشه موجود",
    desc: "در داروخانه‌ها، تجهیزات پزشکی و دیجی‌کالا به‌راحتی پیدا می‌شود.",
    metric: "همیشه",
    metricLabel: "موجودی نوار",
    latin: false,
  },
];

export function WhyDiaban() {
  return (
    <section id="why" className="relative overflow-hidden bg-brand-bg-alt py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 100% 0%, color-mix(in oklab, var(--brand-primary) 16%, transparent), transparent 55%), radial-gradient(ellipse 55% 50% at 0% 100%, color-mix(in oklab, var(--brand-secondary) 14%, transparent), transparent 50%)",
        }}
        aria-hidden
      />
      <BrandRings className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-[400px] w-[400px] text-brand-primary opacity-[0.07]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold text-brand-primary">ارزش افزوده دیابان</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-brand-fg sm:text-4xl">
            چرا دیابان؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            چهار مزیت که کنترل روزانه قندخون را از دغدغه به عادت قابل‌اعتماد تبدیل می‌کند.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {FEATURES.map(({ icon: Icon, title, desc, metric, metricLabel, latin }) => (
            <RevealItem key={title}>
              <article className="group soft-surface relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/30 hover:shadow-[0_8px_28px_rgba(0,125,197,0.1)] sm:p-7">
                <div
                  className="pointer-events-none absolute -left-8 -top-8 size-28 rounded-full bg-brand-primary/[0.05] blur-2xl transition duration-200 group-hover:bg-brand-secondary/[0.1]"
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="brand-gradient-bg flex size-12 items-center justify-center rounded-2xl text-white soft-shadow">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="text-end">
                    <p
                      dir={latin ? "ltr" : "rtl"}
                      className={`text-2xl font-extrabold tracking-tight text-brand-fg sm:text-[1.75rem] ${
                        latin ? "font-readout font-semibold" : "font-sans"
                      }`}
                    >
                      {metric}
                    </p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="relative mt-6 text-lg font-bold leading-7 text-brand-fg">{title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-7 text-muted-foreground">
                  {desc}
                </p>

                <span
                  className="relative mt-6 h-0.5 w-12 rounded-full bg-gradient-to-l from-brand-secondary to-brand-primary transition-all duration-200 group-hover:w-20"
                  aria-hidden
                />
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
