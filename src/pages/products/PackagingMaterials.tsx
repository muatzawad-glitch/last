import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroPackagingMaterials from "@/assets/products/hero-packaging-materials-realistic.jpg";

const PackagingMaterials = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="relative h-96 overflow-hidden">
          <img 
            src={heroPackagingMaterials} 
            alt="مواد التغليف المتنوعة"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              مواد التغليف
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                حلول تغليف متكاملة تحمي منتجاتك وتعزز هوية علامتك التجارية. نوفر جميع مستلزمات التغليف بأعلى جودة وأفضل الأسعار.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا من مواد التغليف</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>ورق تغليف مطبوع بتصاميم مميزة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أشرطة لاصقة مخصصة بشعارك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>فقاعات حماية للمنتجات الحساسة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>مواد حشو آمنة ونظيفة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>كرتون مقوى للشحن والتوزيع</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">لماذا تختار مواد التغليف لدينا؟</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">حماية فائقة</h3>
                    <p className="text-foreground">مواد عالية الجودة تحمي منتجاتك أثناء النقل</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">تخصيص كامل</h3>
                    <p className="text-foreground">طباعة شعارك وألوان علامتك التجارية</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">كميات مرنة</h3>
                    <p className="text-foreground">نوفر كميات صغيرة وكبيرة حسب حاجتك</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">توصيل سريع</h3>
                    <p className="text-foreground">نضمن وصول طلبك في الوقت المحدد</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  اطلب مواد التغليف الآن
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا واحصل على أفضل عرض سعر لمستلزمات التغليف
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

export default PackagingMaterials;
