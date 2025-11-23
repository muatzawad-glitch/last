import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20 bg-[hsl(var(--blue-subtle))]">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك
            </p>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
