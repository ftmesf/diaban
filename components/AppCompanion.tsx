import { ArrowUpLeft, Scan, Smartphone } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "./Reveal";

const APP_STEPS = [
  {
    step: "۱",
    src: "/images/app/ocr-select.png",
    alt: "انتخاب دستگاه دیابان در تب اسکن اپلیکیشن سیناکر",
    title: "دیابان را انتخاب کنید",
    description: "در تب اسکن، دستگاه را مشخص کنید تا عدد همان نمایشگر خوانده شود.",
    titleClass: "bg-brand-primary/12 text-brand-primary",
  },
  {
    step: "۲",
    src: "/images/app/ocr-scan.jpg",
    alt: "اسکن نمایشگر دستگاه دیابان داخل کادر سبز",
    title: "نمایشگر را اسکن کنید",
    description: "صفحه دستگاه را در کادر سبز بگذارید؛ عدد بدون تایپ ثبت می‌شود.",
    titleClass: "bg-brand-secondary/15 text-[#0b7a6c]",
  },
  {
    step: "۳",
    src: "/images/app/glucose-history.png",
    alt: "خلاصه سنجه‌ها و تاریخچه قند خون در اپلیکیشن سیناکر",
    title: "روند را ببینید",
    description:
      "میانگین، وضعیت هر سنجش و مسیر ارسال برای پزشک در یک پرونده جمع می‌شود.",
    titleClass: "bg-brand-accent/15 text-brand-accent-strong",
  },
];

export function AppCompanion() {
  return (
    <section id="app" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1 text-xs font-bold text-brand-primary">
            <Scan size={14} aria-hidden />
            ثبت در اپ — سه قدم
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چطور نتایج دیابان را در اپ سیناکر ثبت کنم؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            سیناکر اپلیکیشن همراه دیابان برای ثبت و پیگیری قندخون است. با اسکن
            نمایشگر دستگاه، عدد را با فناوری OCR بدون تایپ دستی ثبت می‌کند و
            روند قندخون را در نمودار نشان می‌دهد.
          </p>
        </Reveal>

        <Reveal className="relative mt-14">
          <ol className="grid gap-10 pt-4 sm:grid-cols-3 sm:gap-8">
            {APP_STEPS.map((item) => (
              <li
                key={item.step}
                className="relative flex flex-col items-center"
              >
                <PhoneMockup
                  src={item.src}
                  alt={item.alt}
                  step={item.step}
                  className="relative z-10"
                />
                <p
                  className={`mt-6 w-full rounded-2xl px-3 py-2.5 text-center text-base font-extrabold sm:text-lg ${item.titleClass}`}
                >
                  {item.title}
                </p>
                <p className="mt-3 max-w-[16rem] text-center text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 flex justify-center">
          <a
            href="https://sinacare.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary soft-shadow-lg pe-2.5"
          >
            مسیر ثبت در اپ را ببینید
            <span className="relative ms-1 inline-flex size-9 items-center justify-center rounded-lg bg-white/18 ring-1 ring-white/25 transition duration-200 group-hover:bg-white/25 group-hover:ring-white/40">
              <Smartphone
                size={15}
                strokeWidth={2}
                className="absolute opacity-90 transition duration-200 group-hover:opacity-0 group-hover:scale-75"
                aria-hidden
              />
              <ArrowUpLeft
                size={16}
                strokeWidth={2.25}
                className="absolute opacity-0 scale-75 transition duration-200 group-hover:opacity-100 group-hover:scale-100"
                aria-hidden
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
