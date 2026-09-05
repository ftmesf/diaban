import { Award, Droplet, Smartphone, Store } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const FEATURES = [
  {
    icon: Award,
    title: "دقت بالینی تاییدشده",
    desc: "تایید آزمایشگاه مرجع و مراکز پزشکی؛ نتیجه قابل‌اعتماد در کمتر از ۵ ثانیه.",
  },
  {
    icon: Droplet,
    title: "نمونه‌گیری کم‌درد",
    desc: "فقط ۰.۵ میکرولیتر خون — یک قطره کوچک، بدون نمونه‌گیری پرحجم.",
  },
  {
    icon: Smartphone,
    title: "اتصال به سیناکر",
    desc: "اسکن OCR، نمودار روند، و اشتراک مستقیم با پزشک.",
  },
  {
    icon: Store,
    title: "نوار همیشه موجود",
    desc: "در داروخانه‌ها، تجهیزات پزشکی و دیجی‌کالا به‌راحتی پیدا می‌شود.",
  },
];

export function WhyDiaban() {
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-primary">ارزش افزوده دیابان</p>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چرا دیابان؟
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <RevealItem key={title}>
              <article className="flex h-full flex-col">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <Icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-bold leading-7 text-brand-fg">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
