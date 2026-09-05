import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/StatStrip";
import { PainPoints } from "@/components/PainPoints";
import { Solution } from "@/components/Solution";
import { WhyDiaban } from "@/components/WhyDiaban";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Specs } from "@/components/Specs";
import { AppCompanion } from "@/components/AppCompanion";
import { FAQ } from "@/components/FAQ";
import { TrustedBy } from "@/components/TrustedBy";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero />
        <StatStrip />
        <PainPoints />
        <Solution />
        <WhyDiaban />
        <ProductShowcase />
        <Specs />
        <AppCompanion />
        <FAQ />
        <TrustedBy />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <BackToTop />
    </>
  );
}
