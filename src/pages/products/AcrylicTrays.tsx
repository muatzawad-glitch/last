import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import productImage from "@/assets/product-acrylic-trays.jpg";

const AcrylicTrays = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src={productImage} 
            alt="صواني الأكريليك"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gold text-center px-4">
              صواني الأكريليك
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                نوفر تصنيع منتجات أكريليك مبتكرة وتصميمات فريدة، سواءً للأغراض التجارية أو الزخرفية بجودة شديدة. صواني الأكريليك لدينا تجمع بين الأناقة والمتانة لتناسب جميع احتياجاتك.
              </p>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">منتجاتنا من صواني الأكريليك</h2>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>صواني تقديم فاخرة بتصميمات عصرية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>علب تخزين شفافة محكمة الإغلاق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>حوامل عرض احترافية للمنتجات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>صناديق هدايا أنيقة وشفافة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">✦</span>
                    <span>تصاميم مخصصة حسب الطلب</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">مميزات منتجاتنا</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">شفافية عالية</h3>
                    <p className="text-foreground">أكريليك عالي الجودة بشفافية كريستالية تبرز محتوياتك</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">متانة استثنائية</h3>
                    <p className="text-foreground">مقاوم للكسر وأقوى من الزجاج العادي</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">تصميم مخصص</h3>
                    <p className="text-foreground">نصمم حسب احتياجاتك وألوانك المفضلة</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent mb-3">سهولة التنظيف</h3>
                    <p className="text-foreground">سطح أملس سهل التنظيف والصيانة</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  احصل على عرض سعر مخصص
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  تواصل معنا الآن لطلب صواني الأكريليك والحصول على أفضل الأسعار
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

export default AcrylicTrays;
