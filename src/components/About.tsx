import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-right space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              من نحن
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                شركة <span className="text-accent font-bold">الماس باك</span> هي شركة رائدة في مجال حلول التعبئة والتغليف الفاخرة، حيث نجمع بين الخبرة الطويلة والابتكار المستمر لتقديم منتجات استثنائية.
              </p>
              <p>
                نفخر بتقديم حلول تغليف متطورة تلبي أعلى معايير الجودة العالمية، مع التزامنا الكامل برضا عملائنا وتحقيق تطلعاتهم.
              </p>
              <p>
                تخصصنا يشمل تصميم وتصنيع علب الشوكولاته، علب العطور، المكياج، المجوهرات، والأكياس الورقية الفاخرة، بالإضافة إلى حلول التغليف المخصصة.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">100%</p>
                <p className="text-foreground font-medium">رضا العملاء</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">24/7</p>
                <p className="text-foreground font-medium">دعم فني</p>
              </div>
            </div>

            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              تواصل معنا
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary via-navy-light to-primary p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-8 text-right">لماذا تختارنا؟</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">جودة استثنائية</h4>
                      <p className="opacity-90">نستخدم أفضل الخامات والتقنيات الحديثة</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">تصاميم مبتكرة</h4>
                      <p className="opacity-90">فريق من المصممين المحترفين</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">أسعار منافسة</h4>
                      <p className="opacity-90">أفضل قيمة مقابل استثماركم</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">التزام بالمواعيد</h4>
                      <p className="opacity-90">تسليم دقيق في الوقت المحدد</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full border-2 border-accent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
