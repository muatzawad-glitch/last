import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const CTASection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-2">
            {t('ctaDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">
                <Phone className={language === 'ar' ? 'ml-2 h-5 w-5' : 'mr-2 h-5 w-5'} />
                {t('contactUs')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">{t('aboutUs')}</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-accent mb-2" />
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base" dir="ltr">+966 53 555 0797</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-accent mb-2" />
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-all">info@almaspack.sa</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-accent mb-2" />
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
