import HeroSection from "@/src/components/home/HeroSection";
import AboutSection from "@/src/components/home/AboutSection";
import OurClient from "@/src/components/home/OurClient";
import Certifications from "@/src/components/home/Certifications";
import ProductCategories from "@/src/components/home/ProductCategories";
import ManufacturingSection from "@/src/components/home/ManufacturingSection";
import HomeManufacturingSection from "@/src/components/home/HomeManufacturingSection";

export default function Home() {
  return (
    <section className="flex flex-col">
      <main className="flex flex-col gap-20">
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        {/* <WhyChooseUs /> */}
        {/* <ManufacturingSection /> */}
        <Certifications />
        <HomeManufacturingSection />
        <OurClient />
      </main>
      {/* <CTASection /> */}
    </section>
  );
}
