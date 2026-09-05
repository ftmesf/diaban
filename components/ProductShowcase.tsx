import Image from "next/image";
import frontShot from "@/public/images/diaban-front-logo.png";
import stripsShot from "@/public/images/diaban-strips.png";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const ITEMS = [
  {
    image: frontShot,
    alt: "نمای روبه‌رو دستگاه تست قندخون دیابان با صفحه نمایش دیجیتال",
    title: "دستگاه دیابان",
    code: "SMM1000",
    desc: "نمایشگر بزرگ و خوانا، دکمه‌های ساده و طراحی مناسب برای استفاده روزانه",
  },
  {
    image: stripsShot,
    alt: "نوار تست قندخون اصل دیابان به همراه بطری بسته‌بندی",
    title: "نوار تست دیابان",
    code: "KS-10MS01",
    desc: "همیشه در داروخانه‌ها و فروشگاه‌های معتبر تجهیزات پزشکی در دسترس",
  },
];

export function ProductShowcase() {
  return (
    <section className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            دیابان از نزدیک
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دستگاه و نوار تست اصل دیابان، همان چیزی که در جعبه دریافت می‌کنید.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ITEMS.map(({ image, alt, title, code, desc }) => (
            <RevealItem key={code}>
              <div className="overflow-hidden rounded-3xl border border-brand-border/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full bg-brand-bg">
                  <Image src={image} alt={alt} fill sizes="(min-width: 640px) 420px, 90vw" className="object-contain p-8" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-brand-fg">{title}</h3>
                    <span dir="ltr" className="font-readout text-xs text-muted-foreground">{code}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
