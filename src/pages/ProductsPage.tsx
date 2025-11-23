import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import paperCupsImg from "@/assets/products/hero-paper-cups-realistic.jpg";
import iceCreamCupsImg from "@/assets/products/hero-ice-cream-cups-realistic.jpg";
import plasticCupsImg from "@/assets/products/hero-plastic-cups-realistic.jpg";
import cupLidsImg from "@/assets/products/hero-cup-lids-realistic.jpg";
import dessertBoxesImg from "@/assets/products/hero-dessert-boxes-realistic.jpg";
import scentedTissuesImg from "@/assets/products/hero-scented-tissues-realistic.jpg";
import scentedTowelsImg from "@/assets/products/hero-scented-towels-realistic.jpg";
import paperCardboardImg from "@/assets/products/hero-paper-cardboard-realistic.jpg";
import packagingAccessoriesImg from "@/assets/products/hero-packaging-accessories-realistic.jpg";

const ProductsPage = () => {
  const products = [
    {
      category: "الأكواب الورقية",
      description: "أكواب ورقية عالية الجودة للمشروبات الساخنة والباردة، بخيارات متعددة للطباعة والتصميم",
      items: ["دبل | سنجل", "مطبوع | سادة", "طباعة لامع ومطفى", "مقاسات 4-16 أونصة"],
      image: paperCupsImg,
      link: "/products/paper-cups"
    },
    {
      category: "أكواب الآيس كريم",
      description: "أكواب آيس كريم بجودة عالية، بخيارات ورقية وبلاستيكية ومجموعة كبيرة من المقاسات",
      items: ["ورقي وبلاستيك", "مطبوع | سادة", "طباعة لامع ومطفى", "مقاسات 4-16 أونصة"],
      image: iceCreamCupsImg,
      link: "/products/ice-cream-cups"
    },
    {
      category: "الأكواب البلاستيكية",
      description: "أكواب بلاستيكية قوية وبمظهر احترافي، مع خيارات متعددة للطباعة والأغطية",
      items: ["PP | PET", "طباعة حتى 8 ألوان", "مقاسات 8-20 أونصة", "خيارات أغطية متعددة"],
      image: plasticCupsImg,
      link: "/products/plastic-cups"
    },
    {
      category: "أغطية الأكواب",
      description: "أغطية متنوعة لجميع مقاسات الأكواب بأشكال وألوان مختلفة",
      items: ["شفاف | ملون", "قبة | فلات | قلب", "طباعة متوفرة", "جميع المقاسات"],
      image: cupLidsImg,
      link: "/products/cup-lids"
    },
    {
      category: "صناديق الحلويات",
      description: "صناديق حلويات أنيقة بجميع المقاسات والأشكال مع نوافذ شفافة",
      items: ["جميع المقاسات والألوان", "نوافذ شفافة", "مطبوع | سادة", "تصاميم فاخرة"],
      image: dessertBoxesImg,
      link: "/products/dessert-boxes"
    },
    {
      category: "المناديل المعطرة",
      description: "مناديل ورقية معطرة بروائح متنوعة وألوان جذابة",
      items: ["مقاسات متعددة", "روائح: ليمون، لافندر، زهور", "ألوان متنوعة", "جودة عالية"],
      image: scentedTissuesImg,
      link: "/products/scented-tissues"
    },
    {
      category: "المناشف المعطرة",
      description: "مناشف معطرة فاخرة للاستخدامات المتعددة",
      items: ["مقاسات متعددة", "روائح مميزة", "تغليف فاخر", "جودة احترافية"],
      image: scentedTowelsImg,
      link: "/products/scented-towels"
    },
    {
      category: "مواد تغليف ورقية وكرتون",
      description: "حلول تغليف ورقية وكرتونية متكاملة للأكياس والصناديق بجودة عالية",
      items: ["جميع المقاسات", "طباعة لامعة ومطفية", "خامات قوية", "تصاميم مخصصة"],
      image: paperCardboardImg,
      link: "/products/paper-cardboard"
    },
    {
      category: "كماليات التغليف",
      description: "إكسسوارات وكماليات التغليف الاحترافية",
      items: ["مناديل ورقية", "مقاسات متعددة", "روائح مختلفة", "ألوان متنوعة"],
      image: packagingAccessoriesImg,
      link: "/products/packaging-accessories"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                منتجاتنا
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                استكشف مجموعتنا الواسعة من المنتجات عالية الجودة في مجال التغليف والتعبئة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link key={index} to={product.link}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.category}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                      <h2 className="absolute bottom-4 right-4 text-2xl font-bold text-primary z-10">
                        {product.category}
                      </h2>
                    </div>
                    
                    <CardHeader>
                      <CardDescription className="text-base text-right">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-1">✦</span>
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="ml-2 h-5 w-5" />
                اطلب الآن
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
