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

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalDevice",
  name: "دیابان",
  alternateName: "Diaban SMM1000",
  description:
    "دستگاه تست قندخون دیابان با دقت بالینی تاییدشده، نمونه‌گیری کم‌درد و اتصال هوشمند به اپلیکیشن سیناکر.",
  model: "SMM1000",
  manufacturer: {
    "@type": "Organization",
    name: "شرکت راهکار هوشمند سینا",
  },
  brand: {
    "@type": "Brand",
    name: "دیابان",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "شرکت راهکار هوشمند سینا",
  telephone: "+98-21-91002002",
  email: "support@sinacare.ir",
  address: {
    "@type": "PostalAddress",
    streetAddress: "خیابان شریعتی، بالاتر از پل رومی، کوچه نبوی، پلاک ۶، واحد ۵۰۲",
    addressCountry: "IR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
