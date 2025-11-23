import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import paperCupsImg from "@/assets/products/hero-paper-cups-realistic.jpg";
import iceCreamCupsImg from "@/assets/products/hero-ice-cream-cups-realistic.jpg";
import plasticCupsImg from "@/assets/products/hero-plastic-cups-realistic.jpg";
import cupLidsImg from "@/assets/products/hero-cup-lids-realistic.jpg";

export const ProductsSection = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      name: "الأكواب الورقية",
      image: paperCupsImg,
      link: "/products/paper-cups",
    },
    {
      name: "أكواب الآيس كريم",
      image: iceCreamCupsImg,
      link: "/products/ice-cream-cups",
    },
    {
      name: "الأكواب البلاستيكية",
      image: plasticCupsImg,
      link: "/products/plastic-cups",
    },
    {
      name: "أغطية الأكواب",
      image: cupLidsImg,
      link: "/products/cup-lids",
    },
  ];
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('productsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t('productsDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-accent group">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">{product.name}</h3>
                <Button asChild variant="outline" className="w-full text-sm md:text-base">
                  <Link to={product.link}>{t('learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/products">{t('viewAllProducts')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
