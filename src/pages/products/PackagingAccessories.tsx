import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import packagingAccessoriesVariety from "@/assets/products/packaging-accessories-variety.png";
import heroPackagingAccessories from "@/assets/products/hero-packaging-accessories-realistic.jpg";

const PackagingAccessories = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                كماليات التغليف
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                مناديل ورقية وإكسسوارات تغليف بمقاسات وروائح متعددة.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroPackagingAccessories} 
                alt="كماليات تغليف - مناديل ورقية بروائح متعددة"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">المواصفات والخيارات</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">مناديل ورقية</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>المقاسات:</strong> 22×22 – 8×6 – 11×6</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الروائح:</strong> ليمون – لافندر – زهور</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الألوان:</strong> أحمر – أخضر</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src={packagingAccessoriesVariety} 
                alt="كماليات التغليف - مناديل ومناشف وقفازات" 
                className="w-full h-full object-cover"
              />
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

export default PackagingAccessories;
