import { Link } from "react-router-dom";
import { Sparkles, Star, Clock, GraduationCap } from "lucide-react";
import spiritualProgramImg from "@/assets/spiritual-program.jpg";

const features = [
  { icon: "🔮", text: "تنمية القدرة على الاستبصار وفهم الإشارات الداخلية" },
  { icon: "💫", text: "تعزيز مهارة الاستحضار والاتصال بالمعلومات الحدسية" },
  { icon: "🌌", text: "اكتشاف مفهوم التخاطر الكوني وأساليبه" },
  { icon: "⏳", text: "استكشاف وعي الزمن والانتقال بين مستويات زمنية" },
  { icon: "🌟", text: "تنمية الاتصال الكوني والتفاعل مع الوعي الشامل" },
  { icon: "⚡", text: "فهم مراكز القوة في الجسد الطاقي" },
];

const SpiritualProgramSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 via-accent/10 to-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold text-sm">كورس متخصص</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              برنامج تأهيل{" "}
              <span className="text-gradient-gold">القدرات الروحية</span>{" "}
              والطاقية
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              رحلة عميقة لاكتشاف قدراتك الروحية والطاقية الكامنة، والعمل على تنميتها وتفعيلها بطريقة منهجية. يهدف الكورس إلى فتح آفاق جديدة للوعي، وتعزيز الاتصال الداخلي من خلال ممارسات وتأملات موجَّهة.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-secondary/50 transition-colors"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">8 محاضرات مكثفة</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Star className="w-5 h-5 fill-secondary" />
                <span className="font-semibold">250 دولار</span>
              </div>
            </div>
            
            <Link
              to="/services/spiritual-program"
              className="btn-gold inline-flex items-center gap-2 group"
            >
              <span>اكتشف البرنامج</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl" />
              <img
                src={spiritualProgramImg}
                alt="برنامج تأهيل القدرات الروحية"
                className="relative z-10 w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" />
                  <span className="font-bold">كورس احترافي</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualProgramSection;
