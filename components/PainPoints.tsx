import { MapPinOff, Droplets, ShieldAlert, ClipboardX } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const POINTS = [
  {
    icon: MapPinOff,
    title: "نوار پیدا نمی‌شه",
    desc: "سرگردونی بین داروخانه‌ها برای پیدا کردن نوار سازگار با دستگاه",
    tone: {
      icon: "bg-brand-risk-bg text-brand-risk",
      bullet: "bg-brand-risk",
      hover: "hover:border-brand-risk/40 hover:shadow-brand-risk/10",
    },
  },
  {
    icon: Droplets,
    title: "نمونه‌گیری دردناک",
    desc: "نیاز به حجم زیاد خون و درد مکرر انگشت",
    tone: {
      icon: "bg-brand-primary/10 text-brand-primary",
      bullet: "bg-brand-primary",
      hover: "hover:border-brand-primary/40 hover:shadow-brand-primary/10",
    },
  },
  {
    icon: ShieldAlert,
    title: "نتیجه غیرقابل‌اعتماد",
    desc: "بی‌اطمینانی از دقت دستگاه در تصمیم‌های مهم درمانی",
    tone: {
      icon: "bg-brand-secondary/10 text-brand-secondary",
      bullet: "bg-brand-secondary",
      hover: "hover:border-brand-secondary/40 hover:shadow-brand-secondary/10",
    },
  },
  {
    icon: ClipboardX,
    title: "فراموشی و بی‌نظمی در ثبت",
    desc: "گم‌شدن اعداد قندخون و نداشتن سابقه منظم برای پزشک",
    tone: {
      icon: "bg-brand-accent/10 text-brand-accent",
      bullet: "bg-brand-accent",
      hover: "hover:border-brand-accent/40 hover:shadow-brand-accent/10",
    },
  },
];

export function PainPoints() {
  return (
    <section id="concerns" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            دغدغه‌های همیشگی کنترل قندخون
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            اگه دیابتی هستید یا از یکی از عزیزانتون مراقبت می‌کنید، احتمالاً این
            نگرانی‌ها براتون آشناست:
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, desc, tone }) => (
            <RevealItem key={title}>
              <div
                className={`relative flex gap-5 overflow-hidden rounded-3xl border border-brand-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone.hover}`}
              >
                <span className={`absolute inset-y-0 right-0 w-1.5 ${tone.bullet}`} aria-hidden />
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}>
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-brand-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-fg/70">{desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-base font-medium text-brand-fg/80">
            دستگاه تست قندخون دیابان دقیقاً برای حل همین دغدغه‌ها طراحی شده.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
