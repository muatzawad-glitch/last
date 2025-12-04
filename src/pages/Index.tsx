import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SpiritualProgramSection from "@/components/home/SpiritualProgramSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WomenSection from "@/components/home/WomenSection";
import PricingSection from "@/components/home/PricingSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SpiritualProgramSection />
      <ServicesPreview />
      <WomenSection />
      <PricingSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
