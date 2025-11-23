import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroCupAccessories from "@/assets/products/hero-cup-accessories.jpg";
import cupAccessoriesDetails from "@/assets/products/cup-accessories-details.png";
import cupAccessoriesSamples from "@/assets/products/cup-accessories-samples.png";

const CupAccessories = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                إكسسوارات الأكواب
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                إكسسوارات متنوعة للأكواب تشمل حاملات الأكواب والمصاصات بأنواعها.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroCupAccessories} 
                alt="إكسسوارات أكواب"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={cupAccessoriesDetails} 
                  alt="تفاصيل إكسسوارات الأكواب"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={cupAccessoriesSamples} 
                  alt="أمثلة إكسسوارات الأكواب"
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
                  <span className="text-foreground"><strong>الخيارات:</strong> سادة | مطبوع</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>الطباعة:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• لامع بعدد غير محدود من الألوان</li>
                      <li>• مطفى حتى 6 ألوان</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>السطح:</strong> حفر | عادي</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">خيارات متعددة لحامل الأكواب</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">مصاصات بمقاسات مختلفة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>وزن الورق:</strong> 170–350 جرام</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>المنتجات:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• مصاص بتغليف ورق</li>
                      <li>• مصاص ملون</li>
                      <li>• مصاص بتغليف شفاف</li>
                      <li>• عود تحريك خشبي</li>
                    </ul>
                  </div>
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

export default CupAccessories;
