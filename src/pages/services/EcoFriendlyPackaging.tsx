import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Recycle, Globe } from "lucide-react";

const EcoFriendlyPackaging = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                توريد منتجات تغليف صديقة للبيئة
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                حلول تغليف مستدامة تحافظ على البيئة وتعزز مسؤوليتك الاجتماعية
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
                  <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">صديق للبيئة</h3>
                  <p className="text-muted-foreground">مواد قابلة للتحلل</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">آمن وصحي</h3>
                  <p className="text-muted-foreground">خالٍ من المواد الضارة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Recycle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">قابل للتدوير</h3>
                  <p className="text-muted-foreground">إعادة استخدام فعالة</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">مسؤولية بيئية</h3>
                  <p className="text-muted-foreground">نحو مستقبل أخضر</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">منتجات التغليف الصديقة للبيئة</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نؤمن في شركة الماس باك بأهمية الحفاظ على البيئة، لذلك نوفر مجموعة واسعة من منتجات التغليف 
                  الصديقة للبيئة التي تجمع بين الجودة العالية والاستدامة. منتجاتنا البيئية مصنوعة من مواد 
                  طبيعية وقابلة للتحلل أو إعادة التدوير.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">منتجاتنا البيئية</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>أكياس ورقية من مواد معاد تدويرها</li>
                  <li>علب كرتونية قابلة للتحلل</li>
                  <li>أكواب ورقية بطبقة نباتية</li>
                  <li>أكياس قماشية قابلة لإعادة الاستخدام</li>
                  <li>منتجات مصنوعة من نشا الذرة</li>
                  <li>علب من ألياف قصب السكر</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">فوائد التغليف البيئي</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>تقليل البصمة الكربونية لعملك</li>
                  <li>تعزيز صورة علامتك التجارية</li>
                  <li>استجابة لتوقعات العملاء الواعين بيئياً</li>
                  <li>المساهمة في حماية كوكب الأرض</li>
                  <li>الامتثال للتشريعات البيئية</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">التزامنا البيئي</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>شراكات مع موردين معتمدين بيئياً</li>
                  <li>استخدام طاقة متجددة في عمليات الإنتاج</li>
                  <li>برامج إعادة التدوير للمواد الخام</li>
                  <li>تقليل النفايات والانبعاثات</li>
                  <li>التطوير المستمر لحلول أكثر استدامة</li>
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

export default EcoFriendlyPackaging;