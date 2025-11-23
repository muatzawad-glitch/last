import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Package, Layers, Recycle, Palette, Gift, Briefcase } from "lucide-react";
import integratedSolutions from "@/assets/services/integrated-solutions.jpg";
import paperCardboard from "@/assets/services/paper-cardboard.jpg";
import plasticFabric from "@/assets/services/plastic-fabric.jpg";
import designServices from "@/assets/services/design-services.jpg";
import ecoFriendly from "@/assets/services/eco-friendly.jpg";
import consultations from "@/assets/services/consultations.jpg";

export const ServicesSection = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: Package,
      image: integratedSolutions,
      title: "تقديم حلول تغليف متكاملة لجميع المنتجات",
      description: "نوفر حلول تغليف شاملة تناسب جميع احتياجاتك",
      link: "/services/integrated-packaging-solutions",
    },
    {
      icon: Layers,
      image: paperCardboard,
      title: "توريد منتجات التغليف الورقية والكرتون",
      description: "منتجات تغليف ورقية عالية الجودة",
      link: "/services/paper-cardboard-supply",
    },
    {
      icon: Palette,
      image: plasticFabric,
      title: "توريد منتجات التغليف البلاستيكية والقماش",
      description: "حلول تغليف بلاستيكية وقماشية متنوعة",
      link: "/services/plastic-fabric-supply",
    },
    {
      icon: Briefcase,
      image: designServices,
      title: "تقديم خدمات تصميم حلول التغليف",
      description: "تصاميم مبتكرة تناسب علامتك التجارية",
      link: "/services/packaging-design-services",
    },
    {
      icon: Recycle,
      image: ecoFriendly,
      title: "توريد منتجات تغليف صديقة للبيئة",
      description: "منتجات صديقة للبيئة ومستدامة",
      link: "/services/eco-friendly-packaging",
    },
    {
      icon: Gift,
      image: consultations,
      title: "تقديم استشارات لحلول التغليف",
      description: "استشارات متخصصة لأفضل حلول التغليف",
      link: "/services/packaging-consultations",
    },
  ];
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground dark:text-foreground mb-3 sm:mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80 dark:text-muted-foreground px-2">
            {t('servicesDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group block overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <service.icon className="h-10 w-10 text-accent drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="text-accent hover:text-accent/80 transition-colors text-sm md:text-base font-medium">
                  {language === 'ar' ? 'المزيد ←' : 'More →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-primary dark:text-accent-foreground font-bold">
            <Link to="/services">{t('viewAllServices')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
