import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "اكتشف قوة",
    highlight: "العلاج بالطاقة",
    description: "نقدم لك جلسات علاجية متخصصة لتحقيق التوازن الجسدي والنفسي والروحي.",
  },
  {
    image: hero2,
    title: "أطلق طاقتك",
    highlight: "الداخلية",
    description: "ابدأ رحلتك نحو حياة أكثر سلاماً وطاقة إيجابية مع خبرائنا.",
  },
  {
    image: hero3,
    title: "حقق التوازن",
    highlight: "والسلام الداخلي",
    description: "جلسات مصممة خصيصاً لاحتياجاتك الفريدة في بيئة آمنة ومريحة.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images */}
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
          />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-primary transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-primary transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-cream/50 hover:bg-cream"
            }`}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-cream">رحلة التشافي تبدأ من هنا</span>
          </div>

          {/* Main Heading */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-cream leading-tight mb-6">
                    {slide.title}
                    <span className="text-primary block mt-2">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-10 leading-relaxed">
                    {slide.description}
                  </p>
                </>
              )}
            </div>
          ))}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up delay-300">
            <Link to="/booking" className="btn-gold flex items-center gap-2 group">
              احجز جلستك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-cream/30 text-cream px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-cream/10"
            >
              استكشف خدماتنا
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-cream/20 animate-fade-up delay-400">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-pink-400">+500</span>
              <span className="text-sm font-medium text-pink-400">جلسة ناجحة</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-pink-400">+7</span>
              <span className="text-sm font-medium text-pink-400">خدمات متخصصة</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-pink-400">%98</span>
              <span className="text-sm font-medium text-pink-400">رضا العملاء</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
