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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            دیابان از نزدیک
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دستگاه و نوار تست اصل دیابان، همان چیزی که در جعبه دریافت می‌کنید.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {ITEMS.map(({ image, alt, title, code, desc }) => (
            <RevealItem key={code}>
              <div className="group">
                <div className="relative aspect-[4/3] w-full">
                  <div
                    className="pointer-events-none absolute inset-[18%] rounded-full bg-brand-primary/10 blur-3xl transition duration-200 group-hover:bg-brand-secondary/15"
                    aria-hidden
                  />
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 640px) 420px, 90vw"
                    className="object-contain p-6 drop-shadow-[0_20px_40px_rgba(11,58,87,0.14)]"
                  />
                </div>
                <div className="mt-4 px-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-brand-fg">{title}</h3>
                    <span dir="ltr" className="font-readout text-xs text-muted-foreground">
                      {code}
                    </span>
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
