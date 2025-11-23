import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const HeroContent = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-navy-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visual Element - Left Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm rounded-3xl p-8 border border-accent/20">
              <div className="space-y-4 text-primary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold">جودة عالية</h3>
                    <p className="opacity-80 text-sm">معايير عالمية</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold">تسليم سريع</h3>
                    <p className="opacity-80 text-sm">في الموعد المحدد</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold">أسعار تنافسية</h3>
                    <p className="opacity-80 text-sm">قيمة مقابل المال</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="text-right text-primary-foreground space-y-6 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              حلول التعبئة والتغليف
              <span className="block text-accent mt-2">الفاخرة</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              من علب الشوكولاته إلى التغليف الغذائي، نوفر جميع حلول التعبئة والتغليف
            </p>
            
            <div className="flex gap-4 justify-end">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                تعرف علينا
              </Button>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                اطلب الآن ←
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics - Full Width Below */}
        <div className="grid grid-cols-4 gap-4 lg:gap-8 mt-16 pt-8 border-t border-accent/30 w-full">
          <div className="text-center">
            <p className="text-5xl lg:text-7xl font-bold text-accent mb-2">
              +<AnimatedCounter end={1000} />
            </p>
            <p className="text-sm lg:text-base text-primary-foreground/70">منتجاتنا</p>
          </div>
          <div className="text-center">
            <p className="text-5xl lg:text-7xl font-bold text-accent mb-2">
              <AnimatedCounter end={100} />%
            </p>
            <p className="text-sm lg:text-base text-primary-foreground/70">الإلتزام بالمعايير</p>
          </div>
          <div className="text-center">
            <p className="text-5xl lg:text-7xl font-bold text-accent mb-2">
              +<AnimatedCounter end={5} />
            </p>
            <p className="text-sm lg:text-base text-primary-foreground/70">خدماتنا</p>
          </div>
          <div className="text-center">
            <p className="text-5xl lg:text-7xl font-bold text-accent mb-2">
              <AnimatedCounter end={100} />%
            </p>
            <p className="text-sm lg:text-base text-primary-foreground/70">الجودة</p>
          </div>
        </div>
      </div>
    </section>
  );
};
