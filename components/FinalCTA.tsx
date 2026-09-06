import { ShoppingCart, TestTubeDiagonal } from "lucide-react";
import { BrandRings } from "@/components/BrandRings";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="buy" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="brand-gradient-bg relative overflow-hidden rounded-[1.75rem] px-6 py-12 text-center soft-shadow-lg sm:px-12 sm:py-14">
            <BrandRings className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 text-white opacity-15" />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%)",
              }}
              aria-hidden
            />
            <h2 className="relative text-2xl font-extrabold text-white sm:text-3xl">
              همین امروز کنترل قندخونتون رو راحت‌تر کنید.
            </h2>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:02191002002"
                className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-bold text-brand-primary transition duration-200 hover:bg-white/92 hover:shadow-lg active:scale-[0.98]"
              >
                <ShoppingCart size={18} aria-hidden />
                خرید دستگاه دیابان
              </a>
              <a
                href="tel:02191002002"
                className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/45 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/18 active:scale-[0.98]"
              >
                <TestTubeDiagonal size={18} aria-hidden />
                خرید نوار تست
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
