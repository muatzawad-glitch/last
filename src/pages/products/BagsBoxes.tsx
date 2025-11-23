import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import productImage from "@/assets/product-bags-boxes.jpg";

const BagsBoxes = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="relative h-96 overflow-hidden">
          <img 
            src={productImage} 
            alt="العلب والأكياس"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              العلب والأكياس
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                مجموعة من العلب والأكياس مصممة لتلبية احتياجات المتاجر والشركات المختلفة. نوفر حلول تغليف متكاملة تجمع بين الجودة والأناقة.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا من العلب والأكياس</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس ورقية فاخرة بمقاسات متنوعة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب كرتونية مطبوعة بتصاميم احترافية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس قماش قابلة لإعادة الاستخدام</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكياس بلاستيكية مقواة ومتينة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب هدايا فاخرة مع شرائط زينة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">لماذا تختار علبنا وأكياسنا؟</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">جودة عالية</h3>
                    <p className="text-foreground">مواد متينة تتحمل الأوزان وتحافظ على شكلها</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">طباعة احترافية</h3>
                    <p className="text-foreground">طباعة شعارك وتصاميمك بدقة عالية</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">خيارات متنوعة</h3>
                    <p className="text-foreground">مقاسات وألوان وتصاميم متعددة</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">صديقة للبيئة</h3>
                    <p className="text-foreground">خيارات قابلة للتحلل وإعادة الاستخدام</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  اطلب علبك وأكياسك المميزة
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا الآن واحصل على أفضل عرض سعر للكميات الكبيرة
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

export default BagsBoxes;
