import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  Star,
  Zap,
  Eye,
  Brain,
  Orbit,
  Heart
} from "lucide-react";
import spiritualProgramImage from "@/assets/spiritual-program.jpg";

const programFeatures = [
  {
    icon: Eye,
    title: "الاستبصار",
    description: "تنمية القدرة على الاستبصار وفهم الإشارات الداخلية"
  },
  {
    icon: Brain,
    title: "الاستحضار الحدسي",
    description: "تعزيز مهارة الاستحضار والاتصال بالمعلومات الحدسية"
  },
  {
    icon: Zap,
    title: "التخاطر الكوني",
    description: "اكتشاف مفهوم التخاطر الكوني وأساليبه"
  },
  {
    icon: Clock,
    title: "وعي الزمن",
    description: "استكشاف وعي الزمن وفكرة الانتقال بين مستويات زمنية مختلفة"
  },
  {
    icon: Orbit,
    title: "الاتصال الكوني",
    description: "تنمية الاتصال الكوني والتفاعل مع الوعي الشامل"
  },
  {
    icon: Heart,
    title: "مراكز القوة",
    description: "فهم مراكز القوة في الجسد الطاقي وكيفية العمل معها بطرق آمنة"
  }
];

const SpiritualProgram = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/20 via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-fade-in">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-base font-semibold text-primary">كورس تدريبي متكامل</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up leading-tight">
                برنامج تأهيل
                <span className="text-primary block mt-2">القدرات الروحية والطاقية</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-200">
                رحلة عميقة لاكتشاف قدراتك الروحية والطاقية الكامنة، والعمل على تنميتها وتفعيلها بطريقة منهجية
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-up delay-300">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border/50">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">8 محاضرات</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border/50">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">تدريب تفاعلي</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
                <Link to="/booking" className="btn-gold inline-flex items-center justify-center gap-2">
                  سجل الآن - 250 دولار
                </Link>
                <Link to="/contact" className="btn-outline-gold inline-flex items-center justify-center gap-2">
                  استفسر عن البرنامج
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={spiritualProgramImage} 
                  alt="برنامج تأهيل القدرات الروحية والطاقية" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Program */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-section mb-6">
              عن <span className="text-gradient-gold">البرنامج</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              البرنامج عبارة عن كورس يأخذك في رحلة عميقة لاكتشاف قدراتك الروحية والطاقية الكامنة، والعمل على تنميتها وتفعيلها بطريقة منهجية. يهدف الكورس إلى فتح آفاق جديدة للوعي، وتعزيز الاتصال الداخلي من خلال ممارسات وتأملات موجَّهة في مجال الطاقة.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              يعتمد الكورس على ممارسات طاقية وتأملية تساعد المتدرّب على تطوير قدراته تدريجيًا، مع التعامل مع كل شخص حسب مستوى وعيه واستعداده الداخلي.
            </p>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">
              ما ستتعلمه في <span className="text-gradient-gold">البرنامج</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              مجموعة من القدرات الروحية التي سيتم التركيز عليها خلال الكورس
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">
                تفاصيل <span className="text-gradient-gold">البرنامج</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">مدة البرنامج</h4>
                    <p className="text-muted-foreground">8 محاضرات مكثّفة تُقدَّم بأسلوب تدريبي تفاعلي</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">أسلوب التدريب</h4>
                    <p className="text-muted-foreground">يرتقي بالمتدرب خطوة بعد خطوة نحو فهم أعمق لطاقته وقدراته</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">تخصيص فردي</h4>
                    <p className="text-muted-foreground">التعامل مع كل شخص حسب مستوى وعيه واستعداده الداخلي</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ممارسات عملية</h4>
                    <p className="text-muted-foreground">تأملات موجّهة وممارسات طاقية لتطوير القدرات تدريجيًا</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-card rounded-3xl p-8 shadow-card border-2 border-primary">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  سعر البرنامج
                </span>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">250</span>
                  <span className="text-xl text-muted-foreground mr-2">دولار</span>
                </div>
                <ul className="space-y-3 mb-8 text-right">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">8 محاضرات مكثفة</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">تدريب تفاعلي</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">تأملات موجهة</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">متابعة شخصية</span>
                  </li>
                </ul>
                <Link to="/booking" className="btn-gold w-full flex items-center justify-center gap-2">
                  سجل في البرنامج الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-6">
            هل أنت مستعد لاكتشاف <span className="text-gradient-gold">قدراتك الحقيقية؟</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            انضم إلى البرنامج وابدأ رحلتك نحو الوعي والتطور الروحي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-gold inline-flex items-center justify-center gap-2">
              سجل الآن
            </Link>
            <Link to="/contact" className="btn-outline-gold inline-flex items-center justify-center gap-2">
              تواصل معنا للاستفسار
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpiritualProgram;
