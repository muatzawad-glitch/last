import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HeroContent } from "@/components/HeroContent";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <Hero />
      <Services />
      <HeroContent />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
