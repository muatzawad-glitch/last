import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroCupLids from "@/assets/products/hero-cup-lids-realistic.jpg";
import cupLidsDetails from "@/assets/products/cup-lids-details.png";
import cupLidsTypes from "@/assets/products/cup-lids-types.png";

const CupLids = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                أغطية الأكواب
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                أغطية أكواب بأشكال ومقاسات متنوعة لجميع أنواع الأكواب.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroCupLids} 
                alt="أغطية أكواب متنوعة"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={cupLidsDetails} 
                  alt="تفاصيل أغطية الأكواب"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={cupLidsTypes} 
                  alt="أنواع أغطية الأكواب"
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
                  <span className="text-foreground">متوفرة حسب مقاسات الأكواب</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>النوع:</strong> شفاف | ملون</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>الأشكال:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• قبة</li>
                      <li>• أبيض</li>
                      <li>• فلات</li>
                      <li>• قلب</li>
                      <li>• قبعة خارجي</li>
                      <li>• قبعة مدور</li>
                      <li>• قبعة بسلك</li>
                      <li>• عادي</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">تتوفر الطباعة للطلبيات فوق 300,000 قطعة</span>
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

export default CupLids;
