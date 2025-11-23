import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroIceCreamCups from "@/assets/products/hero-ice-cream-cups-realistic.jpg";
import iceCreamCupsDetails from "@/assets/products/icecream-cups-details.png";
import iceCreamCupsSizes from "@/assets/products/icecream-cups-sizes.png";

const IceCreamCups = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                أكواب الآيس كريم
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                أكواب آيس كريم عالية الجودة بخيارات ورقية وبلاستيكية وبمجموعة واسعة من المقاسات.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroIceCreamCups} 
                alt="أكواب آيس كريم ملونة"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={iceCreamCupsDetails} 
                  alt="تفاصيل أكواب الآيس كريم"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={iceCreamCupsSizes} 
                  alt="مقاسات أكواب الآيس كريم"
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
                  <span className="text-foreground"><strong>الخيارات:</strong> مطبوع | سادة | مضمّل | مموج | عادي | بلاستيك</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>السطح:</strong> بصمة | حفر | عادي</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>الطباعة:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• طباعة لامع بعدد غير محدود من الألوان</li>
                      <li>• طباعة مطفى حتى 6 ألوان</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>المواصفات:</strong> وزن الورق 170–350 جرام</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الأحجام:</strong> 4، 6، 7، 8، 9، 10، 12، 14، 16 أونصة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الأنواع:</strong> كرافت | أبيض | بلاستيك</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">يتوفر مقاسات غير مدرجة حسب الطلب</span>
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

export default IceCreamCups;
