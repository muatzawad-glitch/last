import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Lightbulb, Target } from "lucide-react";

export const ConsultationSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t('consultationTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              {t('consultationDescription')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-accent mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">استشارات مجانية</h3>
              <p className="text-sm sm:text-base text-muted-foreground">نقدم استشارات مجانية لمساعدتك</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-accent mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">حلول مبتكرة</h3>
              <p className="text-sm sm:text-base text-muted-foreground">تصاميم مبتكرة تناسب احتياجاتك</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <Target className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-accent mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">نتائج دقيقة</h3>
              <p className="text-sm sm:text-base text-muted-foreground">نحقق أهدافك بدقة واحترافية</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">{t('getConsultation')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
