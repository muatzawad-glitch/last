import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('aboutTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            {t('aboutDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};
