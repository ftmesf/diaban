import { BatteryCharging, Droplet, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Timer, value: "<5s", label: "زمان جواب‌دهی" },
  { icon: Droplet, value: "0.5µl", label: "حجم نمونه خون" },
  { icon: BatteryCharging, value: "1000+", label: "تست با هر باتری" },
  { icon: ShieldCheck, value: "∞", label: "گارانتی مادام‌العمر" },
];

export function StatStrip() {
  return (
    <section aria-label="شاخص‌های محصول" className="pb-10 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-brand-border/80 py-8 sm:grid-cols-4 sm:gap-x-6 sm:py-10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex flex-col items-center text-center sm:items-start sm:text-start">
                <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Icon size={14} strokeWidth={1.75} className="text-brand-primary" aria-hidden />
                  {label}
                </span>
                <span
                  dir="ltr"
                  className="mt-2 font-readout text-3xl font-semibold tracking-tight text-brand-fg"
                >
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
