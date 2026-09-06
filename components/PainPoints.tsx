import { MapPinOff, Droplets, ShieldAlert, ClipboardX } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const POINTS = [
  {
    icon: MapPinOff,
    title: "نوار پیدا نمی‌شه",
    desc: "سرگردونی بین داروخانه‌ها برای پیدا کردن نوار سازگار با دستگاه",
    accent: "text-brand-risk bg-brand-risk-bg",
  },
  {
    icon: Droplets,
    title: "نمونه‌گیری دردناک",
    desc: "نیاز به حجم زیاد خون و درد مکرر انگشت",
    accent: "text-brand-primary bg-brand-primary/10",
  },
  {
    icon: ShieldAlert,
    title: "نتیجه غیرقابل‌اعتماد",
    desc: "بی‌اطمینانی از دقت دستگاه در تصمیم‌های مهم درمانی",
    accent: "text-brand-secondary bg-brand-secondary/10",
  },
  {
    icon: ClipboardX,
    title: "فراموشی و بی‌نظمی در ثبت",
    desc: "گم‌شدن اعداد قندخون و نداشتن سابقه منظم برای پزشک",
    accent: "text-brand-accent bg-brand-accent/10",
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
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
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

          <RevealStagger className="soft-surface divide-y divide-brand-border/70 overflow-hidden rounded-[1.5rem] bg-white/80 backdrop-blur-sm">
            {POINTS.map(({ icon: Icon, title, desc, accent }) => (
              <RevealItem key={title}>
                <div className="group flex gap-4 px-5 py-6 transition duration-200 sm:gap-5 sm:px-7 sm:py-7">
                  <span
                    className={`mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-2xl transition duration-200 group-hover:scale-[1.04] ${accent}`}
                  >
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-brand-fg sm:text-lg">{title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                      {desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
