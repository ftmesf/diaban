import { ShoppingCart, TestTubeDiagonal } from "lucide-react";
import { BrandRings } from "@/components/BrandRings";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="buy" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="brand-gradient-bg relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-xl shadow-brand-primary/30 sm:px-12">
            <BrandRings className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 text-white opacity-15" />
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              همین امروز کنترل قندخونتون رو راحت‌تر کنید.
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:02191002002"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-bold text-brand-primary transition hover:bg-white/90"
              >
                <ShoppingCart size={18} />
                خرید دستگاه دیابان
              </a>
              <a
                href="tel:02191002002"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/40 px-6 text-base font-bold text-white transition hover:bg-white/10"
              >
                <TestTubeDiagonal size={18} />
                خرید نوار تست
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
