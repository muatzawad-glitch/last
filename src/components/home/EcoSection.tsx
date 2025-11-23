import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Recycle, TreePine } from "lucide-react";

export const EcoSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <Leaf className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-green-500" />
            <Recycle className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-emerald-500" />
            <TreePine className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-green-600" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('ecoTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-2">
            {t('ecoDescription')}
          </p>
          
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <Link to="/eco-friendly">{t('learnMore')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
