import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import serviceImage from "@/assets/service-paper-bags.jpg";
import servicePaperBagsEco from "@/assets/service-paperbags-eco.jpg";
import servicePaperBagsPrinting from "@/assets/service-paperbags-printing.jpg";
import featureFastDelivery from "@/assets/feature-fast-delivery.jpg";
import featureCompetitivePricing from "@/assets/feature-competitive-pricing.jpg";

const PaperBags = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src={serviceImage} 
            alt="إنتاج وتمثيل الأكياس الورقية الفاخرة"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              إنتاج وتمثيل الأكياس الورقية الفاخرة
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                نقدم حلولاً متنوعة لإنتاج وتمثيل الأكياس الورقية الفاخرة التي تعكس الأرص والتميز لعلامتك التجارية مع التزامنا بالمعايير البيئية.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">خدماتنا في إنتاج الأكياس الورقية</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس كرافت الفاخرة بمقابض قوية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس التسوق الورقية الملونة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس ورقية للمحلات التجارية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس هدايا ورقية فاخرة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>طباعة الشعارات والتصاميم المخصصة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أحجام وأشكال متنوعة حسب الطلب</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">مميزات أكياسنا الورقية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={servicePaperBagsEco} 
                        alt="صديقة للبيئة"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">صديقة للبيئة</h3>
                      <p className="text-foreground">مواد قابلة للتحلل وإعادة التدوير</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={servicePaperBagsPrinting} 
                        alt="جودة عالية"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">جودة عالية</h3>
                      <p className="text-foreground">ورق متين يتحمل الأوزان الثقيلة</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={servicePaperBagsPrinting} 
                        alt="تصاميم جذابة"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">تصاميم جذابة</h3>
                      <p className="text-foreground">طباعة عالية الجودة وألوان زاهية</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={featureCompetitivePricing} 
                        alt="أسعار منافسة"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">أسعار منافسة</h3>
                      <p className="text-foreground">أفضل الأسعار للكميات الكبيرة</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-6"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Phone className="ml-2 h-6 w-6" />
                  اطلب عرض سعر الآن
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

export default PaperBags;
