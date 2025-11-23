import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroSoupCups from "@/assets/products/hero-soup-cups.jpg";
import soupCupsSamples from "@/assets/products/soup-cups-samples.png";
import soupCupsOptions from "@/assets/products/soup-cups-options.png";

const SoupColdDrinkCups = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                أكواب الشوربة والمشروبات الباردة
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                أكواب عالية الجودة للشوربة والمشروبات الباردة بمواصفات متنوعة.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroSoupCups} 
                alt="أكواب شوربة ومشروبات باردة"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">المواصفات والخيارات</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الخيارات:</strong> دبل | سنجل</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>التصميم:</strong> مطبوع | سادة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>السطح:</strong> مضمّل | مموج | عادي</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>التشطيب:</strong> بصمة | حفر | عادي</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الطباعة:</strong> لامع بلا حدود | مطفى 6 ألوان</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الوزن:</strong> 170–350 جرام</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الأغطية:</strong> بلاستيك | ورق</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>أحجام الشوربة:</strong> 8، 12، 16، 24، 32 أونصة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>أحجام الزبادي:</strong> 4، 6، 8، 10، 12، 14، 16 أونصة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>بالمليلتر:</strong> 250–1300 مل</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={soupCupsSamples} 
                  alt="عينات أكواب الشوربة والمشروبات الباردة" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={soupCupsOptions} 
                  alt="خيارات أكواب الشوربة والمشروبات الباردة" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-6"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="ml-2 h-6 w-6" />
                اطلب عرض سعر الآن
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SoupColdDrinkCups;
