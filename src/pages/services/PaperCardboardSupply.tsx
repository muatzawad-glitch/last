import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Box, Recycle, TrendingUp } from "lucide-react";

const PaperCardboardSupply = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                توريد منتجات التغليف الورقية والكرتون
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                نوفر أفضل منتجات التغليف الورقية والكرتونية بجودة عالية وأسعار تنافسية
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
                  <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">منتجات متنوعة</h3>
                  <p className="text-muted-foreground">جميع أنواع الورق والكرتون</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Box className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
                  <p className="text-muted-foreground">مواد خام عالية الجودة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Recycle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">صديقة للبيئة</h3>
                  <p className="text-muted-foreground">قابلة لإعادة التدوير</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
                  <p className="text-muted-foreground">عروض وخصومات مميزة</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">منتجاتنا الورقية والكرتونية</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نوفر مجموعة شاملة من منتجات التغليف الورقية والكرتونية التي تلبي احتياجات مختلف الصناعات 
                  والقطاعات. نحرص على توريد منتجات ذات جودة عالية تضمن حماية منتجاتك وتعزز من قيمتها.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">منتجات الورق</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>أكياس ورقية بمختلف الأحجام والأشكال</li>
                  <li>ورق تغليف فاخر للهدايا</li>
                  <li>أكواب ورقية للمشروبات الساخنة والباردة</li>
                  <li>صحون وأطباق ورقية</li>
                  <li>مناديل ورقية معطرة</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">منتجات الكرتون</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>علب كرتون مموجة للشحن والتخزين</li>
                  <li>صناديق كرتونية مطبوعة</li>
                  <li>علب حلويات وكيك كرتونية</li>
                  <li>علب بيتزا بجميع المقاسات</li>
                  <li>صناديق تغليف فاخرة للهدايا</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">مميزات التعامل معنا</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>توريد سريع وموثوق</li>
                  <li>إمكانية الطلب بالكميات الكبيرة والصغيرة</li>
                  <li>خدمة الطباعة المخصصة على المنتجات</li>
                  <li>ضمان الجودة وسياسة إرجاع مرنة</li>
                  <li>أسعار تنافسية مع خصومات للطلبات الكبيرة</li>
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

export default PaperCardboardSupply;