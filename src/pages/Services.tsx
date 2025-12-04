import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Sparkles,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "energy-healing",
    emoji: "⚡",
    bgColor: "bg-secondary",
    title: "العلاج بالطاقة",
    shortDesc: "تقنية شاملة لإعادة توازن الطاقة في الجسم",
    fullDesc: "العلاج بالطاقة هو أسلوب علاجي شامل يهدف إلى إعادة توازن تدفق الطاقة الحيوية في الجسم. يعمل على إزالة العوائق الطاقية وتنشيط قدرة الجسم الطبيعية على الشفاء الذاتي.",
    benefits: [
      "تخفيف التوتر والقلق",
      "تحسين جودة النوم",
      "زيادة الطاقة الحيوية",
      "تعزيز الصحة العامة"
    ]
  },
  {
    id: "etheric-surgery",
    emoji: "✨",
    bgColor: "bg-accent",
    title: "الجراحة الأثيرية",
    shortDesc: "إزالة الطاقات السلبية العالقة في الجسم الأثيري والمجال الطاقي",
    fullDesc: "الجراحة الأثيرية هي ممارسة روحانية وطاقية غير مادية تهدف إلى إزالة الطاقات السلبية العالقة في الجسم الأثيري والمجال الطاقي المحيط بالإنسان، مثل آثار العين والحسد والسحر والربط الطاقي والكيانات الظلامية والمجسمات الشبحية والمشاعر المكبوتة والصدمات القديمة، وكل ما يسبب اضطرابًا في التوازن النفسي والجسدي والروحي.\n\nتتم هذه العملية بدون تدخل جراحي مادي، بل عبر تقنيات طاقية روحية تعتمد على النية المركّزة، الترددات، التنفس العميق، التأمل الموجّه، والاتصال بالمستوى الروحي الأعلى.\n\nوتُستخدم الجراحة الأثيرية كوسيلة داعمة لتحسين جودة الحياة، وفتح المسارات الإيجابية، وتجاوز العوائق النفسية والروحية، وهي مكمّلة وليست بديلاً عن العلاج الطبي أو النفسي المتخصص.",
    benefits: [
      "تطهير الهالة ومراكز الطاقة (الشاكرات)",
      "تفكيك العقد الطاقية والمشاعر العالقة",
      "قطع الروابط الطاقية الضارة",
      "إزالة البرامج السلبية من العقل الباطن",
      "رفع مستوى الاهتزاز والطاقة الشخصية",
      "إعادة التوازن والوضوح والسكينة الداخلية"
    ]
  },
  {
    id: "belief-clearing",
    emoji: "🌟",
    bgColor: "bg-primary",
    title: "نسف المعتقدات – أعد تشكيل واقعك من الجذر",
    shortDesc: "تحرر من الأفكار القديمة والقناعات التي لم تكن يومًا ملكك",
    fullDesc: "هل شعرت يومًا أن هناك شيئًا خفيًا يوقفك؟ ليس عائقًا ماديًا… بل طاقة قديمة، فكرة قديمة، صوت داخلي لا يشبهك، لكنك حملته لسنوات؟\n\nفي جلسة نسف المعتقدات، نقوم بالدخول إلى أعمق طبقاتك الطاقية، إلى تلك النقاط التي خزّنت خوفك، إحباطك، أو قناعاتك التي لم تكن يومًا ملكك.\nنحرّرها… نذيبها… ونعيد برمجتها بطاقة جديدة تشبهك أنت، لا الماضي، ولا المجتمع، ولا التجارب المؤلمة.\n\nهذه الخدمة ليست مجرد كلام. هي تحوّل طاقي حقيقي يجعل جسدك الخفيف وروحك المتصلة تستعيدان قوتهما، لتبدأ مرحلة جديدة، تتسع فيها قدرتك على الجذب، الاستقبال، واتخاذ قرارات منسجمة مع مسارك الحقيقي.\n\nإنها ليست جلسة… إنها نقطة تحوّل. نقطة تبدأ منها أنت الحقيقي… بلا رواسب، بلا قيود، بلا أصوات قديمة.",
    benefits: [
      "شعور ملموس بالخفة والوضوح",
      "تحرّر من أنماط التفكير المتكررة",
      "ارتفاع في تردداتك الداخلية",
      "سلاسة أكبر في المال والعلاقات والنجاح",
      "استعادة اتصالك بذاتك العليا"
    ]
  },
  {
    id: "inner-child",
    emoji: "🦋",
    bgColor: "bg-secondary",
    title: "تشافي الطفل الداخلي",
    shortDesc: "معالجة الجروح العاطفية من الطفولة",
    fullDesc: "جلسات متخصصة في التواصل مع الطفل الداخلي ومعالجة الجروح العاطفية التي تعود للطفولة، مما يساعد على استعادة البراءة والفرح والشعور بالأمان.",
    benefits: [
      "شفاء الجروح القديمة",
      "استعادة الفرح الداخلي",
      "تحسين العلاقات العاطفية",
      "الشعور بالأمان والحب"
    ]
  },
  {
    id: "past-lives",
    emoji: "🌙",
    bgColor: "bg-accent",
    title: "الحيوات السابقة",
    shortDesc: "استكشاف وتشافي تأثيرات الحيوات الماضية",
    fullDesc: "رحلة استكشافية إلى الحيوات السابقة لفهم وحل المشكلات والأنماط المتكررة في حياتك الحالية، والتحرر من الكارما القديمة.",
    benefits: [
      "فهم أعمق للذات",
      "حل المشكلات المتكررة",
      "التحرر من الكارما",
      "اكتشاف مواهب خفية"
    ]
  },
  {
    id: "chakras",
    emoji: "🔮",
    bgColor: "bg-primary",
    title: "علم الشاكرات",
    shortDesc: "تنظيف وتوازن مراكز الطاقة السبعة",
    fullDesc: "جلسات متخصصة في تنظيف وتوازن الشاكرات السبع الرئيسية في الجسم، مما يساعد على تحسين تدفق الطاقة وتعزيز الصحة الجسدية والنفسية والروحية.",
    benefits: [
      "توازن طاقي شامل",
      "تحسين الصحة الجسدية",
      "صفاء ذهني",
      "تطور روحي"
    ]
  },
  {
    id: "energy-healing-general",
    emoji: "💫",
    bgColor: "bg-secondary",
    title: "التشافي الطاقي",
    shortDesc: "جلسات شاملة للتشافي على جميع المستويات",
    fullDesc: "برنامج تشافي متكامل يجمع بين عدة تقنيات علاجية لتحقيق التشافي على المستوى الجسدي والعاطفي والعقلي والروحي.",
    benefits: [
      "تشافي شامل",
      "تحول حقيقي",
      "طاقة متجددة",
      "سلام داخلي"
    ]
  },
  {
    id: "childhood-wounds",
    emoji: "💖",
    bgColor: "bg-accent",
    title: "جروح الطفولة",
    shortDesc: "معالجة متخصصة لجروح مرحلة الطفولة",
    fullDesc: "جلسات مكثفة لمعالجة الصدمات والجروح العاطفية الناتجة عن تجارب الطفولة الصعبة، والعمل على التحرر منها نهائياً.",
    benefits: [
      "التحرر من الماضي",
      "بناء علاقات صحية",
      "استعادة الثقة",
      "السلام الداخلي"
    ]
  },
  {
    id: "spiritual-program",
    emoji: "🌌",
    bgColor: "bg-primary",
    title: "برنامج تأهيل القدرات الروحية والطاقية",
    shortDesc: "كورس مكثف لاكتشاف وتنمية قدراتك الروحية",
    fullDesc: "البرنامج عبارة عن كورس يأخذك في رحلة عميقة لاكتشاف قدراتك الروحية والطاقية الكامنة، والعمل على تنميتها وتفعيلها بطريقة منهجية. يهدف الكورس إلى فتح آفاق جديدة للوعي، وتعزيز الاتصال الداخلي من خلال ممارسات وتأملات موجَّهة في مجال الطاقة. يتكون البرنامج من 8 محاضرات مكثّفة تُقدَّم بأسلوب تدريبي تفاعلي.",
    benefits: [
      "تنمية القدرة على الاستبصار",
      "تعزيز مهارة الاستحضار الحدسي",
      "اكتشاف التخاطر الكوني",
      "استكشاف وعي الزمن",
      "تنمية الاتصال الكوني",
      "فهم مراكز القوة الطاقية"
    ]
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary/20 via-background to-accent/30 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-base font-semibold text-secondary">خدماتنا المتخصصة</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-up leading-tight">
              اكتشف رحلتك نحو
              <span className="text-secondary block mt-2">التشافي والتحول</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
              نقدم مجموعة شاملة من الخدمات العلاجية المصممة خصيصاً لمساعدتك في تحقيق التوازن الشامل والتشافي العميق على جميع المستويات
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-2xl mx-auto animate-fade-up delay-300">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-border/30">
                <span className="block text-xl sm:text-3xl font-bold text-secondary mb-1">8+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">خدمات متنوعة</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-border/30">
                <span className="block text-xl sm:text-3xl font-bold text-secondary mb-1">500+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">جلسة ناجحة</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-border/30">
                <span className="block text-xl sm:text-3xl font-bold text-secondary mb-1">%98</span>
                <span className="text-xs sm:text-sm text-muted-foreground">رضا العملاء</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon/Visual Side */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className="aspect-square max-w-[280px] sm:max-w-md mx-auto bg-card rounded-2xl sm:rounded-3xl shadow-card flex items-center justify-center border border-border/30">
                      <div className="text-center p-6 sm:p-12">
                        <div className={`w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                          <span className="text-3xl sm:text-5xl">{service.emoji}</span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-primary">{service.title}</h3>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-secondary/20 rounded-full -z-10" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link to={`/services/${service.id}`} className="btn-gold inline-flex items-center justify-center gap-2 group text-sm sm:text-base">
                      تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/booking" className="btn-outline-gold inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                      احجز الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
