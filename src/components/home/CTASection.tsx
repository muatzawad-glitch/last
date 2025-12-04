import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">ابدأ رحلتك اليوم</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            هل أنت مستعد للتحول؟
          </h2>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            احجز جلستك الأولى الآن واكتشف كيف يمكن للعلاج بالطاقة 
            أن يغير حياتك نحو الأفضل.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center gap-2 group"
            >
              احجز جلستك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cream/30 text-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cream/10"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
