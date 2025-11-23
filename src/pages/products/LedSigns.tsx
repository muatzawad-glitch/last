import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroLedSigns from "@/assets/products/hero-led-signs-realistic.jpg";

const LedSigns = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="relative h-96 overflow-hidden">
          <img 
            src={heroLedSigns} 
            alt="لوحات LED ونيون مضيئة احترافية"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              اللوحات المضيئة
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                نوفر لوحات مضيئة بأحدث التقنيات التي تضفي لمسة جمالية على المساحات التجارية. لوحاتنا المضيئة تجذب الانتباه وتعزز هوية علامتك التجارية بشكل احترافي.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا من اللوحات المضيئة</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>لوحات LED احترافية عالية الإضاءة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>لوحات نيون مخصصة بألوان متعددة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>شاشات عرض مضيئة تفاعلية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>لافتات إعلانية مميزة للواجهات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>تصاميم مخصصة بشعار شركتك</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">مميزات اللوحات المضيئة</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">إضاءة قوية</h3>
                    <p className="text-foreground">تقنية LED توفر إضاءة ساطعة وواضحة طوال اليوم</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">توفير الطاقة</h3>
                    <p className="text-foreground">استهلاك منخفض للطاقة الكهربائية</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">متانة عالية</h3>
                    <p className="text-foreground">مقاومة للعوامل الجوية وطويلة العمر</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">تصميم جذاب</h3>
                    <p className="text-foreground">تصاميم عصرية تلفت الأنظار</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  اطلب لوحتك المضيئة الآن
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا للحصول على عرض سعر خاص وتصميم مخصص
                </p>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اطلب الآن
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LedSigns;
