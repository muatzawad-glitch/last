import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import productImage from "@/assets/product-paper-products.jpg";

const PaperProducts = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="relative h-96 overflow-hidden">
          <img 
            src={productImage} 
            alt="المنتجات الورقية"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              المنتجات الورقية
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                مجموعة متنوعة من المنتجات الورقية الصديقة للبيئة والمخصصة حسب احتياجاتك. نقدم حلول تغليف ورقية فاخرة تعكس اهتمامك بالجودة والبيئة.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا الورقية</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس ورق كرافت بمقاسات متنوعة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب ورقية مطوية للمنتجات المختلفة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>صناديق هدايا ورقية فاخرة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أغلفة ورقية بتصاميم أنيقة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>طباعة مخصصة بشعارك</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">مميزات منتجاتنا الورقية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">صديقة للبيئة</h3>
                    <p className="text-foreground">قابلة للتحلل وإعادة التدوير بنسبة 100%</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">جودة عالية</h3>
                    <p className="text-foreground">ورق متين يتحمل الأوزان المختلفة</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">تصاميم راقية</h3>
                    <p className="text-foreground">طباعة احترافية بألوان زاهية</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">أسعار تنافسية</h3>
                    <p className="text-foreground">أفضل الأسعار مع الجودة العالية</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  اطلب منتجاتك الورقية الآن
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا واحصل على أفضل الأسعار للمنتجات الصديقة للبيئة
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

export default PaperProducts;
