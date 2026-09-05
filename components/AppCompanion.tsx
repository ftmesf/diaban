import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Fragment } from "react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    step: "۱",
    title: "اسکن نتیجه",
    desc: "نمایشگر را با دوربین اسکن کنید.",
    src: "/images/app-ocr-scan.jpg",
    alt: "اسکن نمایشگر دستگاه دیابان در اپلیکیشن سیناکر",
  },
  {
    step: "۲",
    title: "ثبت و پیگیری",
    desc: "روند قندخون را در نمودار ببینید.",
    src: "/images/app-glucose-history.png",
    alt: "خلاصه سنجه‌ها و سابقه قندخون در اپلیکیشن سیناکر",
  },
  {
    step: "۳",
    title: "اشتراک با پزشک",
    desc: "سابقه را برای پزشک بفرستید.",
    src: "/images/app-glucose-entry.jpg",
    alt: "ثبت و اشتراک قندخون در اپلیکیشن سیناکر",
  },
];

export function AppCompanion() {
  return (
    <section id="app" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-wide text-brand-primary">
            اپلیکیشن همراه
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            همراه دیابان: اپلیکیشن سیناکر
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            از اندازه‌گیری تا پیگیری درمانی — سه گام پشت‌سرهم.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
            {STEPS.map(({ step, title, desc, src, alt }, index) => (
              <Fragment key={title}>
                <li className="flex w-full max-w-[200px] flex-col items-center text-center">
                  <PhoneMockup src={src} alt={alt} className="max-w-[180px]" />
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                      {step}
                    </span>
                    <h3 className="text-base font-bold text-brand-fg">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </li>
                {index < STEPS.length - 1 && (
                  <li
                    className="flex shrink-0 items-center justify-center self-center sm:mx-3 sm:pt-24"
                    aria-hidden
                  >
                    <ChevronLeft className="rotate-[-90deg] text-brand-primary/45 sm:rotate-0" size={22} />
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 text-center">
          <a
            href="#sinacare"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary transition hover:gap-2.5"
          >
            بیشتر درباره اپلیکیشن سیناکر
            <ArrowLeft size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
