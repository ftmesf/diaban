import { MapPinOff, Droplets, ShieldAlert, ClipboardX } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const POINTS = [
  {
    icon: MapPinOff,
    title: "نوار پیدا نمی‌شه",
    desc: "سرگردونی بین داروخانه‌ها برای پیدا کردن نوار سازگار با دستگاه",
    tone: {
      icon: "text-brand-risk bg-brand-risk-bg",
      glow: "bg-brand-risk/15",
      rule: "bg-brand-risk",
    },
  },
  {
    icon: Droplets,
    title: "نمونه‌گیری دردناک",
    desc: "نیاز به حجم زیاد خون و درد مکرر انگشت",
    tone: {
      icon: "text-brand-primary bg-brand-primary/10",
      glow: "bg-brand-primary/15",
      rule: "bg-brand-primary",
    },
  },
  {
    icon: ShieldAlert,
    title: "نتیجه غیرقابل‌اعتماد",
    desc: "بی‌اطمینانی از دقت دستگاه در تصمیم‌های مهم درمانی",
    tone: {
      icon: "text-brand-secondary bg-brand-secondary/10",
      glow: "bg-brand-secondary/15",
      rule: "bg-brand-secondary",
    },
  },
  {
    icon: ClipboardX,
    title: "فراموشی و بی‌نظمی در ثبت",
    desc: "گم‌شدن اعداد قندخون و نداشتن سابقه منظم برای پزشک",
    tone: {
      icon: "text-brand-accent-strong bg-brand-accent/10",
      glow: "bg-brand-accent/20",
      rule: "bg-brand-accent",
    },
  },
];

export function PainPoints() {
  return (
    <section id="concerns" className="relative overflow-hidden bg-brand-bg-alt py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 0% 0%, color-mix(in oklab, var(--brand-primary) 18%, transparent), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, color-mix(in oklab, var(--brand-secondary) 14%, transparent), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-brand-risk">دغدغه‌های واقعی</p>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-snug text-brand-fg sm:text-3xl">
              کنترل قندخون نباید این‌قدر سخت باشد
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              اگر دیابتی هستید یا از عزیزتان مراقبت می‌کنید، احتمالاً این نگرانی‌ها
              برایتان آشناست.
            </p>
            <p className="mt-8 border-s-[3px] border-brand-primary ps-4 text-base font-medium leading-8 text-brand-fg">
              دیابان دقیقاً برای حل همین دغدغه‌ها طراحی شده.
            </p>
          </Reveal>

          <RevealStagger className="grid gap-3 sm:gap-3.5">
            {POINTS.map(({ icon: Icon, title, desc, tone }, index) => (
              <RevealItem key={title}>
                <article className="group relative overflow-hidden rounded-2xl border border-brand-border/60 bg-white/90 shadow-[0_1px_0_rgba(11,58,87,0.04)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-border hover:shadow-[0_10px_28px_rgba(11,58,87,0.08)]">
                  <div
                    className={`absolute inset-y-3 start-0 w-1 rounded-full ${tone.rule} opacity-80`}
                    aria-hidden
                  />
                  <div
                    className={`pointer-events-none absolute -end-6 -top-6 size-24 rounded-full ${tone.glow} blur-2xl transition duration-300 group-hover:opacity-90`}
                    aria-hidden
                  />
                  <div className="relative flex gap-4 px-5 py-5 sm:gap-5 sm:px-6 sm:py-6">
                    <div className="relative shrink-0">
                      <span
                        className={`flex size-12 items-center justify-center rounded-2xl transition duration-200 group-hover:scale-[1.04] ${tone.icon}`}
                      >
                        <Icon size={22} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span
                        dir="ltr"
                        className="absolute -bottom-1 -start-1 flex size-5 items-center justify-center rounded-full bg-brand-fg text-[10px] font-bold text-white"
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-bold text-brand-fg sm:text-lg">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
