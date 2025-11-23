import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroPaperBags from "@/assets/products/hero-paper-bags.jpg";
import paperBagsSizes from "@/assets/products/paper-bags-sizes.png";
import paperBagsHandles from "@/assets/products/paper-bags-handles.png";
import paperBagsMaterials from "@/assets/products/paper-bags-materials.png";
import paperBagsOptions from "@/assets/products/paper-bags-options.png";

const PaperBags = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                الأكياس الورقية
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                أكياس ورقية فاخرة بأنواع ومقابض متعددة ومقاسات واسعة.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroPaperBags} 
                alt="أكياس ورقية فاخرة"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">المواصفات والخيارات</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>الأنواع:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• Twisted paper</li>
                      <li>• Flat handle</li>
                      <li>• Pinch handle</li>
                      <li>• SOS luxury bag</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>الخيارات:</strong> مطبوع | سادة | مطفى | لامع | بصمة</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>وزن الورق:</strong> 170 جرام فأكثر</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>المواد:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• White kraft</li>
                      <li>• Brown kraft</li>
                      <li>• Black paper board</li>
                      <li>• Single shinny</li>
                      <li>• Virgin pulp</li>
                      <li>• Art paper</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <div className="text-foreground">
                    <strong>أنواع المقابض:</strong>
                    <ul className="mr-6 mt-2 space-y-1">
                      <li>• Twisted PP</li>
                      <li>• Die Cut</li>
                      <li>• Glued Paper</li>
                      <li>• Twisted PAPER</li>
                      <li>• Tie Knot</li>
                      <li>• Shoe Buckle</li>
                      <li>• Flat Paper</li>
                      <li>• Grosgrain PL</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl mt-1">✦</span>
                  <span className="text-foreground"><strong>المقاسات:</strong> أكثر من 300 مقاس (أمثلة: 135×90×220 – 215×115×260 – 305×175×430)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={paperBagsSizes} 
                  alt="مقاسات الأكياس الورقية" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={paperBagsHandles} 
                  alt="أنواع مقابض الأكياس الورقية" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={paperBagsMaterials} 
                  alt="أنواع مواد الأكياس الورقية" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={paperBagsOptions} 
                  alt="خيارات الأكياس الورقية" 
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

export default PaperBags;
