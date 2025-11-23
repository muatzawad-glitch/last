import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Shield, Users, Zap } from "lucide-react";

export const WhyUsSection = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: Award,
      title: "جودة عالية",
      description: "نستخدم أفضل المواد والتقنيات",
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "نلتزم بتسليم طلباتك في الوقت المحدد",
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "منتجاتنا مضمونة 100%",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فريق ذو خبرة وكفاءة عالية",
    },
    {
      icon: Zap,
      title: "تسليم سريع",
      description: "شحن سريع لجميع أنحاء المملكة",
    },
    {
      icon: CheckCircle,
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في السوق",
    },
  ];
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('whyUsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t('whyUsDescription')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <reason.icon className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
