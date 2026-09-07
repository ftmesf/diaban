import { Phone, ShoppingCart, TestTubeDiagonal } from "lucide-react";
import { BrandRings } from "@/components/BrandRings";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="buy" className="bg-brand-bg-alt/60 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-brand-border/70 bg-white soft-shadow-lg">
            <div
              className="absolute inset-y-0 end-0 w-1.5 bg-brand-primary sm:w-2"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-primary/45 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -end-10 top-0 h-40 w-40 rounded-full bg-brand-secondary/10 blur-3xl"
              aria-hidden
            />
            <BrandRings className="pointer-events-none absolute -bottom-28 -start-20 -z-0 h-80 w-80 text-brand-primary opacity-[0.07]" />

            <div className="relative grid gap-7 px-5 py-8 sm:gap-8 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:px-12">
              <div>
                <p className="text-sm font-semibold text-brand-primary">
                  خرید از کانال‌های رسمی
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-relaxed text-brand-fg sm:text-3xl">
                  همین امروز کنترل قندخونتون رو راحت‌تر کنید.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  دستگاه و نوار تست دیابان از مسیرهای دارای تاییدیه سازمان غذا و
                  دارو قابل سفارش است.
                </p>
                <a
                  href="tel:02191002002"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl border border-brand-border/80 bg-brand-bg/70 px-3.5 py-2 text-sm font-semibold text-brand-fg transition hover:border-brand-primary/40 hover:bg-brand-bg hover:text-brand-primary"
                >
                  <Phone size={16} aria-hidden />
                  <span dir="ltr">۰۲۱-۹۱۰۰۲۰۰۲</span>
                </a>
              </div>

              <div className="rounded-2xl border border-brand-border/50 bg-brand-bg/60 p-3 sm:p-4">
                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:02191002002"
                    className="btn-primary soft-shadow w-full"
                  >
                    <ShoppingCart size={18} aria-hidden />
                    خرید دستگاه دیابان
                  </a>
                  <a
                    href="tel:02191002002"
                    className="btn-secondary soft-shadow w-full bg-white"
                  >
                    <TestTubeDiagonal size={18} aria-hidden />
                    خرید نوار تست
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
