import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import serviceImage from "@/assets/service-medicine-packaging.jpg";
import serviceMedicineDesign from "@/assets/service-medicine-design.jpg";
import serviceMedicineQuality from "@/assets/service-medicine-quality.jpg";
import featureFastDelivery from "@/assets/feature-fast-delivery.jpg";
import featureCompetitivePricing from "@/assets/feature-competitive-pricing.jpg";

const MedicinePackaging = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src={serviceImage} 
            alt="تصميم وتغليف الأدوية"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              تصميم وتغليف الأدوية
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                نقدم حلولاً متخصصة لتصميم وتغليف على الأدوية التي تجمع بين الأناقة والجودة مع الالتزام بأعلى معايير السلامة الصحية.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">خدماتنا في تغليف المنتجات الطبية</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب الأدوية والفيتامينات بتصاميم احترافية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب المكملات الغذائية والمقويات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>تغليف الأدوية العشبية والطبيعية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>عبوات منتجات العناية الصحية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>طباعة المعلومات الطبية والتحذيرات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>تصميم نشرات الاستخدام الداخلية</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">معايير الجودة والأمان</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={serviceMedicineQuality} 
                        alt="مواد طبية معتمدة"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">مواد طبية معتمدة</h3>
                      <p className="text-foreground">نستخدم مواد تطابق المعايير الصحية الدولية</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={serviceMedicineDesign} 
                        alt="حماية المنتج"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">حماية المنتج</h3>
                      <p className="text-foreground">تغليف يحمي من الرطوبة والضوء</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={featureCompetitivePricing} 
                        alt="معلومات واضحة"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">معلومات واضحة</h3>
                      <p className="text-foreground">طباعة دقيقة للمعلومات الطبية</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={featureFastDelivery} 
                        alt="ختم أمان"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-3">ختم أمان</h3>
                      <p className="text-foreground">أنظمة إغلاق آمنة ومحكمة</p>
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

export default MedicinePackaging;
