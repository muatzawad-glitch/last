import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroPlasticCups from "@/assets/products/hero-plastic-cups-realistic.jpg";
import plasticCupsDetails from "@/assets/products/plastic-cups-details.png";
import plasticCupsSamples from "@/assets/products/plastic-cups-samples.png";

const PlasticCups = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                الأكواب البلاستيكية
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                أكواب بلاستيكية قوية توفر مظهراً احترافياً وخيارات متعددة للطباعة والأغطية.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroPlasticCups} 
                alt="أكواب بلاستيكية شفافة"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={plasticCupsDetails} 
                  alt="تفاصيل الأكواب البلاستيكية"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={plasticCupsSamples} 
                  alt="أمثلة الأكواب البلاستيكية"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-card rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">المواصفات والخيارات</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الأشكال:</strong> عادي | Special Shape | Smooth</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الطباعة:</strong> حتى 8 ألوان</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>المادة:</strong> PP | PET</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>وزن الكوب:</strong> 8–20 جرام</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>وزن الغطاء:</strong> 3–10 جرام (PET)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">خيارات متعددة للأغطية</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>المقاسات:</strong> 8، 10، 12، 14، 16، 20 أونصة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>علامة تجارية:</strong> Supreme (من 8 إلى 16 أونصة)</span>
                </div>
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

export default PlasticCups;
