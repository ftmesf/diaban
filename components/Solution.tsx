import Image from "next/image";
import frontShot from "@/public/images/diaban-front-logo.png";
import { Reveal } from "./Reveal";

export function Solution() {
  return (
    <section id="what-is" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="text-base font-semibold text-brand-primary sm:text-lg">
            دیابان چیست؟
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-relaxed text-brand-fg sm:text-3xl">
            دستگاه تست قندخون خانگی، طراحی‌شده برای نیاز واقعی بیماران در ایران
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            در طراحی دیابان، دغدغه‌های بیماران و توصیه پزشکان مبنا بود: دسترسی همیشگی
            به نوار، دقت بالا، نمونه‌گیری کم‌درد و قیمت مقرون‌به‌صرفه. نتیجه، دستگاهی
            است که هم در کلینیک و هم در خانه قابل‌اعتماد است.
          </p>
          <ul className="mt-8 flex flex-wrap items-center gap-2 text-xs text-brand-fg/80 sm:gap-2.5">
            {[
              "تاییدیه سازمان غذا و دارو",
              "نوار همیشه در دسترس",
              "ثبت در اپ سیناکر",
            ].map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-border/80 bg-white/80 px-3 py-1.5 whitespace-nowrap"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-brand-secondary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--brand-secondary) 32%, transparent), transparent 55%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--brand-primary) 26%, transparent), transparent 50%)",
              }}
              aria-hidden
            />
            <Image
              src={frontShot}
              alt="دستگاه تست قندخون دیابان"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-contain p-6 sm:p-8 drop-shadow-[0_24px_48px_rgba(11,58,87,0.16)]"
              priority={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
