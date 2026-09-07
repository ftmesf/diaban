import { BatteryCharging, Droplet, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  {
    icon: Timer,
    value: "<5s",
    label: "زمان جواب‌دهی",
    hint: "نتیجه سریع",
    wash: "from-brand-primary/12 to-transparent",
    tint: "text-brand-primary bg-brand-primary/10",
  },
  {
    icon: Droplet,
    value: "0.5µl",
    label: "حجم نمونه خون",
    hint: "کم‌درد",
    wash: "from-brand-secondary/14 to-transparent",
    tint: "text-brand-secondary bg-brand-secondary/10",
  },
  {
    icon: BatteryCharging,
    value: "1000+",
    label: "تست با هر باتری",
    hint: "عمر طولانی",
    wash: "from-brand-accent/16 to-transparent",
    tint: "text-brand-accent-strong bg-brand-accent/15",
  },
  {
    icon: ShieldCheck,
    value: "∞",
    label: "گارانتی مادام‌العمر",
    hint: "بدون نگرانی",
    wash: "from-brand-primary/12 to-transparent",
    tint: "text-brand-primary bg-brand-primary/10",
  },
];

export function StatStrip() {
  return (
    <section aria-label="شاخص‌های محصول" className="relative -mt-4 pb-12 sm:-mt-6 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-brand-border/70 bg-white shadow-[0_12px_40px_rgba(11,58,87,0.08)]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-brand-accent via-brand-secondary to-brand-primary"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-secondary/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-12 h-44 w-44 rounded-full bg-brand-primary/10 blur-3xl"
              aria-hidden
            />

            <ul className="relative grid grid-cols-2 sm:grid-cols-4">
              {STATS.map(({ icon: Icon, value, label, hint, wash, tint }, index) => (
                <li
                  key={label}
                  className={`group relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 ${
                    index % 2 === 1 ? "border-s border-brand-border/50" : ""
                  } ${
                    index >= 2 ? "border-t border-brand-border/50 sm:border-t-0" : ""
                  } ${index > 0 ? "sm:border-s sm:border-brand-border/50" : ""}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${wash} opacity-70 transition duration-300 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="relative flex flex-col items-center text-center sm:items-start sm:text-start">
                    <span
                      className={`inline-flex size-10 items-center justify-center rounded-2xl transition duration-200 group-hover:scale-105 ${tint}`}
                    >
                      <Icon size={18} strokeWidth={1.9} aria-hidden />
                    </span>
                    <span className="mt-3 text-[11px] font-bold tracking-wide text-brand-primary">
                      {hint}
                    </span>
                    <span
                      dir="ltr"
                      className="mt-2 font-readout text-[2rem] font-semibold leading-none tracking-tight text-brand-fg sm:text-[2.35rem]"
                    >
                      {value}
                    </span>
                    <span className="mt-2.5 text-xs leading-6 text-muted-foreground sm:text-sm">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
