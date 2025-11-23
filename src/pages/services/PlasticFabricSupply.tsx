import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Droplets, Shield, Zap } from "lucide-react";

const PlasticFabricSupply = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                توريد منتجات التغليف البلاستيكية والقماش
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                حلول تغليف بلاستيكية وقماشية متينة وعملية لجميع احتياجاتك
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <ShoppingBag className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تشكيلة واسعة</h3>
                  <p className="text-muted-foreground">أنواع متعددة من الأكياس</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Droplets className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">مقاومة للماء</h3>
                  <p className="text-muted-foreground">حماية فائقة للمنتجات</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">متانة عالية</h3>
                  <p className="text-muted-foreground">تحمل أوزان كبيرة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">إنتاج سريع</h3>
                  <p className="text-muted-foreground">تلبية فورية للطلبات</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">منتجاتنا البلاستيكية والقماشية</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نقدم مجموعة متنوعة من منتجات التغليف البلاستيكية والقماشية التي تجمع بين الجودة والمتانة 
                  والعملية. منتجاتنا مصممة لتلبية احتياجات مختلف القطاعات التجارية والصناعية.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">المنتجات البلاستيكية</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>أكياس بلاستيكية بمختلف السماكات والأحجام</li>
                  <li>أكواب بلاستيكية شفافة وملونة</li>
                  <li>صحون وأطباق بلاستيكية</li>
                  <li>علب حفظ الطعام البلاستيكية</li>
                  <li>أغطية وأغلفة بلاستيكية</li>
                  <li>صواني بلاستيكية للفاكيوم</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">المنتجات القماشية</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>حقائب قماشية قابلة لإعادة الاستخدام</li>
                  <li>أكياس قماش غير منسوجة</li>
                  <li>حقائب تسوق فاخرة</li>
                  <li>أكياس هدايا قماشية</li>
                  <li>حقائب ترويجية مطبوعة</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">المزايا الرئيسية</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>مواد بلاستيكية آمنة ومعتمدة للاستخدام الغذائي</li>
                  <li>أقمشة عالية الجودة ومتينة</li>
                  <li>إمكانية الطباعة والتخصيص</li>
                  <li>مقاومة للتمزق والرطوبة</li>
                  <li>خيارات صديقة للبيئة متاحة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PlasticFabricSupply;