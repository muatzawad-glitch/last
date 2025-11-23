import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import dessertBoxesSamples from "@/assets/products/dessert-boxes-samples-clean.png";
import dessertBoxesVariety from "@/assets/products/dessert-boxes-variety.png";
import heroBoxesCartons from "@/assets/products/hero-boxes-cartons-realistic.jpg";

const BoxesCartons = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                البوكسات والصناديق الورقية
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                صناديق ورقية بجميع المقاسات والأشكال لمختلف الاستخدامات.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroBoxesCartons} 
                alt="بوكسات وصناديق ورقية بأحجام متنوعة"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={dessertBoxesVariety} 
                  alt="تشكيلة بوكسات الحلويات" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={dessertBoxesSamples} 
                  alt="عينات بوكسات الحلويات" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-card rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">المواصفات والخيارات</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">جميع المقاسات</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">جميع الألوان</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>طبقات حماية داخلية وخارجية:</strong> 2–5 طبقات</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الخيارات:</strong> مطبوع | سادة | مدمج | عادي</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>وزن الورق:</strong> 170–400 جرام</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground">تنفيذ جميع التصاميم حسب طلب العميل</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>الأنواع:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• بوكس كرتون</li>
                      <li>• بوكس بيتزا</li>
                      <li>• MERCURE BOX</li>
                      <li>• بوكس حلويات</li>
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

export default BoxesCartons;
