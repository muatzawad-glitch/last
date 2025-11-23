import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { EcoSection } from "@/components/home/EcoSection";
import { ConsultationSection } from "@/components/home/ConsultationSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CustomerJourneySection } from "@/components/home/CustomerJourneySection";
import { CTASection } from "@/components/home/CTASection";
import { Clients } from "@/components/Clients";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const NewHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <EcoSection />
        <ConsultationSection />
        <WhyUsSection />
        <StatsSection />
        <CustomerJourneySection />
        <Clients />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NewHome;
