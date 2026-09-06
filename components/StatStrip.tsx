import { BatteryCharging, Droplet, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Timer, value: "<5s", label: "زمان جواب‌دهی", hint: "نتیجه سریع" },
  { icon: Droplet, value: "0.5µl", label: "حجم نمونه خون", hint: "کم‌درد" },
  { icon: BatteryCharging, value: "1000+", label: "تست با هر باتری", hint: "عمر طولانی" },
  { icon: ShieldCheck, value: "∞", label: "گارانتی مادام‌العمر", hint: "بدون نگرانی" },
];

export function StatStrip() {
  return (
    <section aria-label="شاخص‌های محصول" className="relative -mt-4 pb-12 sm:-mt-6 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="soft-surface relative overflow-hidden rounded-[1.5rem] bg-white/85 px-5 py-8 backdrop-blur-sm sm:px-8 sm:py-10">
            <div
              className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand-secondary/12 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-primary/10 blur-3xl"
              aria-hidden
            />

            <ul className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-0">
              {STATS.map(({ icon: Icon, value, label, hint }, index) => (
                <li
                  key={label}
                  className={`flex flex-col items-center px-2 text-center sm:items-start sm:px-5 sm:text-start ${
                    index > 0 ? "sm:border-s sm:border-brand-border/60" : ""
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-primary">
                    <Icon size={13} strokeWidth={2} aria-hidden />
                    {hint}
                  </span>
                  <span
                    dir="ltr"
                    className="mt-2 font-readout text-3xl font-semibold tracking-tight text-brand-fg sm:text-4xl"
                  >
                    {value}
                  </span>
                  <span className="mt-1.5 text-sm text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
