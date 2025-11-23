import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.png";
import heroSlide5 from "@/assets/hero-slide-5.png";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      title: "حلول التعبئة والتغليف الفاخرة",
      subtitle: "جودة لا مثيل لها",
    },
    {
      image: heroSlide2,
      title: "تصاميم مبتكرة ومخصصة",
      subtitle: "نحول أفكارك إلى واقع",
    },
    {
      image: heroSlide3,
      title: "خدمة احترافية وسريعة",
      subtitle: "شريكك الموثوق في التغليف",
    },
    {
      image: heroSlide4,
      title: "شركة الماس باك",
      subtitle: "Elite Packaging Solutions",
    },
    {
      image: heroSlide5,
      title: "شركة الماس باك",
      subtitle: "Elite Packaging Solutions",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <section className="relative w-full overflow-hidden">
      {/* Header Hero Slider */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 sm:mb-3 animate-fade-in drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold animate-fade-in drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm hover:bg-background/90 transition-colors"
          aria-label="الشريحة السابقة"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm hover:bg-background/90 transition-colors"
          aria-label="الشريحة التالية"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="bg-gradient-to-br from-primary/20 via-background to-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-2 sm:mb-3">
              {t('heroSubtitle')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <Link to="/about">
                  {t('learnMore')}
                  <ArrowRight className={language === 'ar' ? 'mr-2 h-5 w-5' : 'ml-2 h-5 w-5'} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">
                  {t('orderNow')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
