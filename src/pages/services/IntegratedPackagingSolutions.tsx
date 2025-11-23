import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Sparkles, Shield, CheckCircle } from "lucide-react";

const IntegratedPackagingSolutions = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                تقديم حلول تغليف متكاملة لجميع المنتجات
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                نوفر حلول تغليف شاملة ومتكاملة تناسب جميع أنواع المنتجات والصناعات
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
                  <Package className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">حلول متنوعة</h3>
                  <p className="text-muted-foreground">تغليف لجميع أنواع المنتجات</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تصاميم مبتكرة</h3>
                  <p className="text-muted-foreground">أحدث الأساليب في التغليف</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
                  <p className="text-muted-foreground">مواد معتمدة وآمنة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">خدمة متكاملة</h3>
                  <p className="text-muted-foreground">من التصميم إلى التسليم</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">خدماتنا المتكاملة</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نقدم في شركة الماس باك حلول تغليف متكاملة تشمل جميع مراحل عملية التغليف، من الاستشارات الأولية 
                  وحتى التسليم النهائي. نحن نفهم أن كل منتج يحتاج إلى حل تغليف خاص يحافظ على جودته ويعزز من قيمته.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">مجالات التغليف</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>تغليف المواد الغذائية والمشروبات</li>
                  <li>تغليف مستحضرات التجميل والعطور</li>
                  <li>تغليف الأدوية والمستلزمات الطبية</li>
                  <li>تغليف الهدايا والمناسبات الخاصة</li>
                  <li>تغليف المنتجات الإلكترونية</li>
                  <li>تغليف المنتجات الصناعية</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">لماذا تختار حلولنا المتكاملة؟</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>فريق متخصص في كل مجال من مجالات التغليف</li>
                  <li>استشارات مجانية لاختيار أفضل حلول التغليف</li>
                  <li>تصاميم مخصصة تناسب هوية علامتك التجارية</li>
                  <li>مواد عالية الجودة ومعتمدة دولياً</li>
                  <li>أسعار تنافسية وخدمة ما بعد البيع</li>
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

export default IntegratedPackagingSolutions;