import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Award } from "lucide-react";
import { Clients } from "@/components/Clients";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MapSection } from "@/components/MapSection";
import featuredProduct1 from "@/assets/featured-product-1.jpg";
import featuredProduct2 from "@/assets/featured-product-2.jpg";
import featuredProduct3 from "@/assets/featured-product-3.jpg";
import featuredProduct4 from "@/assets/featured-product-4.jpg";
import featuredProduct5 from "@/assets/featured-product-5.jpg";
import featuredProduct6 from "@/assets/featured-product-6.jpg";

const Home = () => {
  const products = [
    {
      title: "تغليف صواني حلويات فاخرة الجودة",
      description: "نقدم خدمة إنتاج وتصنيع صواني الحلويات والشوكولاتة بتصميم فاخر يناسب كافة المناسبات",
      image: featuredProduct1,
    },
    {
      title: "تصنيع قوالب بلاستيك بتركيبة المكروم",
      description: "نقدم خدمة إنتاج وتصنيع القوالب البلاستيكية الأساسية باستخدام ماكينة المكروم لتناسب جميع",
      image: featuredProduct2,
    },
    {
      title: "تصميم و تغليف علب الشوكولاتة",
      description: "نقدم خدمة حلول متكاملة وتغليف مبتدع لعرض الشوكولاتة التي تجمع بين",
      image: featuredProduct3,
    },
    {
      title: "أكياس وعلب هدايا فاخرة",
      description: "نقدم خدمة إنتاج وتصنيع أكياس ورقية وعلب هدايا بألوان زاهية وتصاميم راقية",
      image: featuredProduct4,
    },
    {
      title: "تغليف العطور الفاخرة",
      description: "نقدم خدمة تصميم علب العطور الفاخرة بألوان داكنة وتصاميم فخمة تعكس جودة المنتج",
      image: featuredProduct5,
    },
    {
      title: "علب الهدايا الملونة",
      description: "نقدم خدمة تصميم وإنتاج علب الهدايا بألوان متنوعة وأحجام مختلفة لجميع المناسبات",
      image: featuredProduct6,
    },
  ];

  const whyUs = [
    "خبرة تمتد لسنوات في مجال التغليف والتعبئة",
    "أسعار تنافسية تناسب جميع الميزانيات",
    "التزام بمواعيد التسليم المحددة",
    "تنوع كبير في المنتجات والخيارات",
    "قدرة على تنفيذ الطلبات الكبيرة والصغيرة",
    "استخدام تقنيات طباعة حديثة ومتطورة"
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <Hero />
      
      {/* أحدث منتجاتنا */}
      <section className="py-20 bg-[hsl(var(--blue-subtle))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              أحدث منتجاتنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نفخر بتقديم أفضل الحلول والمنتجات التي تلبي احتياجاتكم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 text-right">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-right leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    تعرف أكثر
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* لماذا الماسة الأفضل */}
      <section className="py-20 bg-background"
>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              لماذا الماس باك الأفضل؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نحن نفخر بتقديم خدمات متميزة تجعلنا الخيار الأول لعملائنا في مجال التغليف والتعبئة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات والمميزات */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* المحتوى الرئيسي */}
            <div className="text-right space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gold leading-tight">
                حلول التعبئة والتغليف الفاخرة
              </h2>
              <p className="text-xl text-gold-light/90 leading-relaxed">
                من علب الشوكولاته إلى التغليف الغذائي، نوفر جميع حلول التعبئة والتغليف
              </p>
              <div className="flex gap-4 justify-end">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-gold-light text-gold-light hover:bg-gold-light/10 text-lg px-8"
                  onClick={() => window.location.href = '/about'}
                >
                  تعرف علينا
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gold text-navy hover:bg-gold/90 text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  اطلب الآن ←
                </Button>
              </div>

              {/* الإحصائيات */}
              <div className="grid grid-cols-4 gap-8 pt-12 border-t border-gold/20">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-gold-light/80">الجودة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-gold-light/80">خدماتنا</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-gold-light/80">الإلتزام بالمعايير</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter end={1000} suffix="+" />
                  </div>
                  <div className="text-gold-light/80">منتجاتنا</div>
                </div>
              </div>
            </div>

            {/* بطاقة المميزات */}
            <div className="bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-right">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-1">جودة عالية</h3>
                    <p className="text-gold-light/80">معايير عالمية</p>
                  </div>
                  <div className="bg-gold/20 p-4 rounded-full flex-shrink-0">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-1">تسليم سريع</h3>
                    <p className="text-gold-light/80">في الموعد المحدد</p>
                  </div>
                  <div className="bg-gold/20 p-4 rounded-full flex-shrink-0">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-1">أسعار تنافسية</h3>
                    <p className="text-gold-light/80">قيمة مقابل المال</p>
                  </div>
                  <div className="bg-gold/20 p-4 rounded-full flex-shrink-0">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <Footer />
    </div>
  );
};

export default Home;
