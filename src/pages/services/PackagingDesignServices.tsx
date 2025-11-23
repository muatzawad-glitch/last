import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Layers, Lightbulb, Award } from "lucide-react";

const PackagingDesignServices = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                تقديم خدمات تصميم حلول التغليف
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                نحول أفكارك إلى تصاميم تغليف مبتكرة تعكس هوية علامتك التجارية
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
                  <Palette className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تصاميم إبداعية</h3>
                  <p className="text-muted-foreground">أفكار مبتكرة وفريدة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Layers className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تصميم متكامل</h3>
                  <p className="text-muted-foreground">من الفكرة للتنفيذ</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">حلول ذكية</h3>
                  <p className="text-muted-foreground">تصاميم عملية ووظيفية</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">احترافية عالية</h3>
                  <p className="text-muted-foreground">فريق مصممين محترفين</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">خدمات التصميم لدينا</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نقدم خدمات تصميم تغليف شاملة تبدأ من دراسة احتياجاتك وتحليل السوق المستهدف، 
                  وصولاً إلى تقديم تصاميم نهائية جاهزة للطباعة والإنتاج. فريقنا من المصممين المحترفين 
                  يعمل على ابتكار حلول تغليف تميز منتجاتك وتعزز من قيمتها التجارية.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">خدماتنا التصميمية</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>تصميم هوية بصرية للتغليف</li>
                  <li>تصميم علب المنتجات والكراتين</li>
                  <li>تصميم الأكياس الورقية والبلاستيكية</li>
                  <li>تصميم ملصقات المنتجات</li>
                  <li>تصميم تغليف الهدايا الفاخرة</li>
                  <li>نماذج ثلاثية الأبعاد للتغليف</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">مراحل عملية التصميم</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>استشارة أولية لفهم احتياجاتك وأهدافك</li>
                  <li>بحث وتحليل السوق والمنافسين</li>
                  <li>تطوير مفاهيم وأفكار أولية</li>
                  <li>تقديم عدة خيارات تصميمية</li>
                  <li>التعديل والتطوير حسب ملاحظاتك</li>
                  <li>تسليم الملفات النهائية جاهزة للطباعة</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">لماذا نحن الأفضل؟</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>خبرة واسعة في تصميم التغليف لمختلف القطاعات</li>
                  <li>فهم عميق لاحتياجات السوق المحلي والعالمي</li>
                  <li>استخدام أحدث برامج التصميم والتقنيات</li>
                  <li>مراعاة معايير الطباعة والإنتاج</li>
                  <li>أسعار تنافسية وجودة استثنائية</li>
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

export default PackagingDesignServices;