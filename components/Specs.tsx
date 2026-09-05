import Image from "next/image";
import frontShot from "@/public/images/diaban-front-logo.png";
import { Reveal } from "./Reveal";

const SPECS: { label: string; value: string; mono?: boolean }[] = [
  { label: "مدل", value: "SMM1000", mono: true },
  { label: "بازه اندازه‌گیری", value: "20–600 mg/dL", mono: true },
  { label: "زمان اندازه‌گیری", value: "5 s", mono: true },
  { label: "حجم نمونه خون", value: "0.5 µl", mono: true },
  { label: "وزن (همراه باتری)", value: "48 g", mono: true },
  { label: "عمر باتری", value: "حدود ۱۰۰۰ تست" },
  { label: "ظرفیت حافظه", value: "۳۰۰ نتیجه" },
  { label: "محدوده هماتوکریت", value: "20–60%", mono: true },
  { label: "گارانتی", value: "مادام‌العمر" },
];

export function Specs() {
  return (
    <section id="specs" className="section-alt py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <p className="text-sm font-semibold text-brand-primary">مشخصات فنی</p>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            مشخصات دستگاه دیابان
          </h2>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            مدل SMM1000 — جزئیات فنی برای پزشک، بیمار و خریدار.
          </p>
          <div className="relative mt-8 hidden aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-white lg:block">
            <Image
              src={frontShot}
              alt="دستگاه تست قندخون دیابان"
              fill
              sizes="280px"
              className="object-contain p-8"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">جدول مشخصات فنی دستگاه دیابان</caption>
            <tbody>
              {SPECS.map(({ label, value, mono }, index) => (
                <tr key={label} className={index % 2 === 0 ? "bg-white" : undefined}>
                  <th
                    scope="row"
                    className="w-[48%] border-b border-brand-border/50 px-4 py-3.5 text-start font-medium text-muted-foreground sm:px-5"
                  >
                    {label}
                  </th>
                  <td className="border-b border-brand-border/50 px-4 py-3.5 text-end font-semibold text-brand-fg sm:px-5">
                    <span dir={mono ? "ltr" : "rtl"} className={mono ? "font-readout" : undefined}>
                      {value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
