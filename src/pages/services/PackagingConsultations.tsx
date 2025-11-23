import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, MessageCircle } from "lucide-react";

const PackagingConsultations = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                تقديم استشارات لحلول التغليف
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                استشارات متخصصة تساعدك على اختيار أفضل حلول التغليف لنشاطك التجاري
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
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">خبراء متخصصون</h3>
                  <p className="text-muted-foreground">فريق من المستشارين</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">حلول مخصصة</h3>
                  <p className="text-muted-foreground">تناسب احتياجاتك</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تحسين الأداء</h3>
                  <p className="text-muted-foreground">زيادة كفاءة التغليف</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">دعم مستمر</h3>
                  <p className="text-muted-foreground">متابعة وتطوير</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold mb-6 text-accent">خدماتنا الاستشارية</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  نقدم خدمات استشارية شاملة في مجال التغليف تساعدك على اتخاذ قرارات مستنيرة بشأن حلول 
                  التغليف المناسبة لمنتجاتك. فريقنا من المستشارين المتخصصين يمتلك خبرة واسعة في مختلف 
                  الصناعات ويعمل على تحليل احتياجاتك وتقديم توصيات عملية.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">مجالات الاستشارات</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>اختيار مواد التغليف المناسبة</li>
                  <li>تحسين تكاليف التغليف</li>
                  <li>تطوير استراتيجيات التغليف المستدامة</li>
                  <li>تحليل المنافسين ودراسة السوق</li>
                  <li>تحسين سلسلة التوريد والخدمات اللوجستية</li>
                  <li>الامتثال للمعايير والتشريعات</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">عملية الاستشارة</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>جلسة تعريفية مجانية لفهم احتياجاتك</li>
                  <li>تحليل شامل لوضعك الحالي</li>
                  <li>دراسة السوق والمنافسين</li>
                  <li>تقديم تقرير مفصل بالتوصيات</li>
                  <li>وضع خطة عمل قابلة للتنفيذ</li>
                  <li>متابعة التنفيذ وقياس النتائج</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">الفوائد المتوقعة</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>تقليل تكاليف التغليف بنسبة تصل إلى 30%</li>
                  <li>تحسين جودة التغليف وحماية المنتجات</li>
                  <li>تعزيز صورة العلامة التجارية</li>
                  <li>زيادة كفاءة عمليات التخزين والشحن</li>
                  <li>التوافق مع المعايير البيئية</li>
                  <li>الحصول على ميزة تنافسية في السوق</li>
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

export default PackagingConsultations;