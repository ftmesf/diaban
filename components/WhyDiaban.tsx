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
    accent: {
      icon: "from-[#007dc5] to-[#00a0d8]",
      chip: "bg-brand-primary/8 text-brand-primary border-brand-primary/15",
      bar: "from-brand-primary to-brand-secondary",
      glow: "bg-brand-primary/15",
    },
  },
  {
    icon: Droplet,
    title: "نمونه‌گیری کم‌درد",
    desc: "فقط ۰.۵ میکرولیتر خون — یک قطره کوچک، بدون نمونه‌گیری پرحجم.",
    metric: "۰٫۵ µl",
    metricLabel: "حجم نمونه",
    latin: false,
    accent: {
      icon: "from-[#00b7a8] to-[#2dd4bf]",
      chip: "bg-brand-secondary/10 text-[#0b7a6c] border-brand-secondary/20",
      bar: "from-brand-secondary to-brand-accent",
      glow: "bg-brand-secondary/15",
    },
  },
  {
    icon: Smartphone,
    title: "اتصال به سیناکر",
    desc: "اسکن OCR، نمودار روند، و اشتراک مستقیم با پزشک.",
    metric: "OCR",
    metricLabel: "ثبت هوشمند",
    latin: true,
    accent: {
      icon: "from-[#5f8f1f] to-[#7cb342]",
      chip: "bg-brand-accent/12 text-brand-accent-strong border-brand-accent/25",
      bar: "from-brand-accent to-brand-secondary",
      glow: "bg-brand-accent/20",
    },
  },
  {
    icon: Store,
    title: "نوار همیشه موجود",
    desc: "در داروخانه‌ها، تجهیزات پزشکی و دیجی‌کالا به‌راحتی پیدا می‌شود.",
    metric: "همیشه",
    metricLabel: "موجودی نوار",
    latin: false,
    accent: {
      icon: "from-[#0b3a57] to-[#007dc5]",
      chip: "bg-brand-fg/5 text-brand-fg border-brand-border",
      bar: "from-brand-fg to-brand-primary",
      glow: "bg-brand-primary/12",
    },
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
          {FEATURES.map(({ icon: Icon, title, desc, metric, metricLabel, latin, accent }) => (
            <RevealItem key={title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-brand-border/65 bg-white p-6 shadow-[0_2px_8px_rgba(11,58,87,0.04)] transition duration-200 hover:-translate-y-1 hover:border-brand-primary/25 hover:shadow-[0_16px_36px_rgba(0,125,197,0.12)] sm:p-7">
                <div
                  className={`pointer-events-none absolute -end-10 -top-10 size-36 rounded-full ${accent.glow} blur-3xl transition duration-300 group-hover:scale-110`}
                  aria-hidden
                />
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l ${accent.bar} opacity-80`}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_8px_18px_rgba(11,58,87,0.16)] ${accent.icon}`}
                  >
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div
                    className={`rounded-2xl border px-3.5 py-2 text-end ${accent.chip}`}
                  >
                    <p
                      dir={latin ? "ltr" : "rtl"}
                      className={`text-xl font-extrabold tracking-tight sm:text-2xl ${
                        latin ? "font-readout font-semibold" : "font-sans"
                      }`}
                    >
                      {metric}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium opacity-80">
                      {metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="relative mt-6 text-lg font-bold leading-7 text-brand-fg">
                  {title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-7 text-muted-foreground">
                  {desc}
                </p>

                <span
                  className={`relative mt-6 h-0.5 w-10 rounded-full bg-gradient-to-l ${accent.bar} transition-all duration-200 group-hover:w-16`}
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
