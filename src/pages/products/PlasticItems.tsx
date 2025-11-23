import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import productImage from "@/assets/product-plastic-items.jpg";

const PlasticItems = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="relative h-96 overflow-hidden">
          <img 
            src={productImage} 
            alt="المنتجات البلاستيكية"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              المنتجات البلاستيكية
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                تشكيلة واسعة من المنتجات البلاستيكية عالية الجودة المصممة لتلبية احتياجات المطاعم والمتاجر والشركات. نوفر منتجات آمنة وعملية بأسعار تنافسية.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا البلاستيكية</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب بلاستيكية شفافة للعرض</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>حاويات تخزين محكمة الإغلاق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أكواب وأطباق بلاستيكية متينة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>أدوات مائدة بلاستيكية آمنة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب طعام قابلة للاستخدام المتكرر</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">مميزات منتجاتنا البلاستيكية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">آمنة للاستخدام</h3>
                    <p className="text-foreground">خالية من المواد الضارة ومطابقة للمعايير الصحية</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">متينة وقوية</h3>
                    <p className="text-foreground">تتحمل الاستخدام المتكرر والأوزان الثقيلة</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">سهلة التنظيف</h3>
                    <p className="text-foreground">أسطح ملساء لا تمتص الروائح والبقع</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">أسعار مناسبة</h3>
                    <p className="text-foreground">جودة عالية بأسعار تنافسية جداً</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  اطلب منتجاتك البلاستيكية الآن
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا واحصل على أسعار الجملة للكميات الكبيرة
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

export default PlasticItems;
