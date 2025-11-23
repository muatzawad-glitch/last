import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                من نحن
              </h1>
              <p className="text-xl text-muted-foreground">
                قصة نجاح مستمرة في عالم التغليف والطباعة
              </p>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  الماس باك - رحلة الابتكار والتميز
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    منذ انطلاقتها في عام <span className="text-accent font-bold">2019</span> حققت الشركة نموًا متسارعًا مواكبًا لرؤية المملكة 2030، مستلهمةً من برنامج جودة الحياة نهجًا عصريًا يعكس تطلعات المستقبل. وقد استطاعت الشركة تعزيز حضورها في مختلف مناطق المملكة من خلال تقديم خدمات متخصصة ونوعية ترتكز على حلول تغليف مبتكرة وطباعة العلامات التجارية باحترافية عالية ومعايير مهنية دقيقة.
                  </p>
                  <p>
                    تسعى الشركة باستمرار إلى استخدام أحدث الابتكارات العالمية في مجالات تصنيع الورق والبلاستيك والقماش، مقدمةً حلولًا شاملة في التغليف والمنتجات التحويلية المرتبطة به. وتهدف الشركة إلى توفير منتجات تغليف متكاملة، تتوافق مع احتياجات العملاء وتحقق لهم تميزًا بصريًا وفعالية تسويقية عالية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="h-12 w-12 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">الرؤية</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  نتميّز في ابتكار حلول تغليف وطباعة متكاملة تُعزز الهوية البصرية للعملاء، وتحسن مظهرهم التسويقي بأساليب عصرية وفعّالة.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="h-12 w-12 text-accent" />
                  <h3 className="text-3xl font-bold text-foreground">الرسالة</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  نُسهم بفعالية في تعزيز المظاهر التسويقية لعملائنا عبر تقديم حلول تغليف مبتكرة وتصاميم جذابة، مصممة خصيصاً لتلبية احتياجاتهم ودعم انتشار علاماتهم التجارية وترسيخ حضورهم في السوق.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">القيم</h2>
                <p className="text-xl text-muted-foreground">المبادئ التي نؤمن بها ونعمل من خلالها</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-10 w-10 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-3">الالتزام</h4>
                      <p className="text-lg text-muted-foreground">نفي وننفذ ونوصل</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-10 w-10 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-3">الإبداع</h4>
                      <p className="text-lg text-muted-foreground">نصمم وننتج ونخرج</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-10 w-10 text-blue-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-3">الحداثة</h4>
                      <p className="text-lg text-muted-foreground">نبتكر ونحسن ونتطور</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <Heart className="h-10 w-10 text-red-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-3">الجودة</h4>
                      <p className="text-lg text-muted-foreground">دقة ومظهر وجودة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">الأهداف</h2>
                <p className="text-xl text-muted-foreground">نسعى لتحقيق أهداف طموحة تخدم عملاءنا وتطور القطاع</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                      تحقيق عوائد استثمارية في مجالات الصناعة التحويلية والطباعة
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                      نقل تجارب عالمية وتبسيطها للعملاء بكل سهولة واحترافية
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-green-500">3</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                      الابتكار والإبداع في مجالات تصنيع الورق والبلاستيك والقماش
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-blue-500">4</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                      تقديم منتجات تغليف متكاملة تلبي احتياجات العملاء بكفاءة وتميز
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-accent/20 p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                نحن في خدمتكم
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                دعنا نساعدك في تحقيق أهدافك التسويقية من خلال حلول تغليف مبتكرة واحترافية
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                تواصل معنا الآن
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
