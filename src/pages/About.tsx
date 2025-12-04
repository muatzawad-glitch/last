import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Target, Eye, ArrowLeft, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "الرحمة والتعاطف",
    description: "نتعامل مع كل شخص بحب واحترام ونفهم رحلته الفريدة نحو التشافي"
  },
  {
    icon: Target,
    title: "الاحترافية",
    description: "نلتزم بأعلى معايير الجودة والمهنية في جميع خدماتنا"
  },
  {
    icon: Eye,
    title: "الشفافية",
    description: "نؤمن بالوضوح والصدق في التواصل مع عملائنا"
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-accent/40 via-background to-secondary/20 overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-base font-semibold text-secondary">من نحن</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-up leading-tight">
              نوركِ الداخلي
              <span className="text-secondary block mt-2">قصتنا معكِ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200 mb-10">
              رحلتنا بدأت من الإيمان العميق بأن كل إنسان يحمل في داخله قوة شفاء لا محدودة، ورسالتنا هي مساعدتك على اكتشافها
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-8 py-4 border border-secondary/30">
                <span className="text-secondary font-bold text-lg">✨ الأصالة</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-8 py-4 border border-secondary/30">
                <span className="text-secondary font-bold text-lg">💫 الاحترافية</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-8 py-4 border border-secondary/30">
                <span className="text-secondary font-bold text-lg">🌟 التعاطف</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Side */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-accent to-card rounded-3xl shadow-card flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center animate-glow">
                    <span className="text-7xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Lumina Wellness</h3>
                  <p className="text-muted-foreground mt-2">نور • شفاء • تحول</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                رسالتنا
              </h2>
              <p className="text-body mb-6">
                في Lumina Wellness، نؤمن بأن كل إنسان يحمل في داخله نوراً فريداً 
                وقدرة هائلة على التشافي والتحول. رسالتنا هي مساعدتك في اكتشاف هذا النور 
                وإزالة كل ما يحجبه.
              </p>
              <p className="text-body mb-8">
                نقدم خدمات علاجية متخصصة تجمع بين الحكمة الروحية القديمة والتقنيات 
                العلاجية الحديثة، في بيئة آمنة ومحترمة تدعم رحلتك الفريدة نحو الشفاء.
              </p>

              <div className="space-y-4">
                {["خبرة واسعة في العلاج بالطاقة", "نهج شخصي لكل حالة", "بيئة آمنة وداعمة", "متابعة مستمرة"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-dark/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section">
              قيمنا <span className="text-gradient-gold">الأساسية</span>
            </h2>
            <p className="text-body">
              المبادئ التي توجه عملنا وتعاملنا مع كل من يثق بنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-service text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
              هل أنت مستعد لبدء رحلتك؟
            </h2>
            <p className="text-cream/70 text-lg mb-8">
              تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق التشافي والتحول
            </p>
            <Link to="/booking" className="btn-gold inline-flex items-center gap-2 group">
              احجز جلستك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
