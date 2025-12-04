import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

// Service data with exact color scheme from reference
const services = [
  {
    id: "energy-healing",
    emoji: "⚡",
    title: "العلاج بالطاقة",
    description: "أسلوب علاجي شامل يعيد توازن تدفق الطاقة الحيوية في الجسم، يزيل العوائق الطاقية ويُنشّط قدرة الجسم الطبيعية على الشفاء الذاتي مع تخفيف التوتر والقلق وتحسين النوم والطاقة",
    bgColor: "bg-secondary", // Pink
  },
  {
    id: "etheric-surgery",
    emoji: "✨",
    title: "الجراحة الأثيرية",
    description: "ممارسة روحانية وطاقية غير مادية لإزالة الطاقات السلبية العالقة مثل العين والحسد والسحر والكيانات الظلامية والمشاعر المكبوتة من الجسم الأثيري والمجال الطاقي",
    bgColor: "bg-accent", // Light pink
  },
  {
    id: "belief-clearing",
    emoji: "🌟",
    title: "نسف المعتقدات",
    description: "أعد تشكيل واقعك من الجذر - تحرر من الأفكار القديمة والقناعات التي لم تكن يومًا ملكك واستعد قوتك الحقيقية من خلال تحول طاقي عميق",
    bgColor: "bg-secondary", // Pink
  },
  {
    id: "inner-child",
    emoji: "🦋",
    title: "تشافي الطفل الداخلي",
    description: "رحلة عميقة للتواصل مع الطفل الداخلي ومعالجة الجروح العاطفية من الطفولة، استعادة الفرح والبراءة الداخلية وبناء علاقة صحية مع الذات مع الشعور بالأمان والحب الذاتي",
    bgColor: "bg-accent", // Light pink
  },
  {
    id: "past-lives",
    emoji: "🌙",
    title: "الحيوات السابقة",
    description: "رحلة استكشافية آمنة إلى الحيوات السابقة باستخدام الاسترخاء العميق لفهم وحل المشكلات والأنماط المتكررة، التحرر من العقد الكارمية واكتشاف مواهب خفية",
    bgColor: "bg-secondary", // Pink
  },
  {
    id: "chakras",
    emoji: "🔮",
    title: "علم الشاكرات",
    description: "تنظيف وموازنة مراكز الطاقة السبعة الرئيسية في الجسم لتحقيق التوازن الطاقي الشامل، تحسين الصحة الجسدية والنفسية، وتعزيز الصفاء الذهني والتطور الروحي",
    bgColor: "bg-accent", // Light pink
  },
  {
    id: "mermaids",
    emoji: "🧜",
    title: "جلسة الحوريات",
    description: "جلسة علاجية فريدة صُممت خصيصاً للمرأة، تجمع بين الطاقة الأنثوية المقدسة وتقنيات التشافي العميق. تساعدك على إعادة الاتصال بجوهرك الأنثوي، تحرير الطاقات المحبوسة، واستعادة توازنك الداخلي.",
    bgColor: "bg-secondary", // Pink
  },
  {
    id: "spiritual-program",
    emoji: "🌌",
    title: "برنامج تأهيل القدرات الروحية",
    description: "كورس مكثف من 8 محاضرات يأخذك في رحلة عميقة لاكتشاف قدراتك الروحية والطاقية الكامنة وتنميتها بطريقة منهجية، مع تطوير الاستبصار والتخاطر الكوني والاتصال بالوعي الشامل.",
    bgColor: "bg-primary",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            خدماتنا المتخصصة
          </span>
          <h2 className="heading-section">
            رحلة شاملة نحو <span className="text-gradient-gold">التشافي</span>
          </h2>
          <p className="text-body">
            نقدم مجموعة متكاملة من خدمات العلاج بالطاقة المصممة لتلبية احتياجاتك الفريدة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-card transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-border/30 hover:border-secondary/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl ${service.bgColor} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl sm:text-3xl lg:text-4xl">{service.emoji}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                {service.description}
              </p>
              <Link 
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300 group/link text-sm sm:text-base"
              >
                <span>مزيد من التفاصيل</span>
                <span className="text-base sm:text-lg group-hover/link:-translate-x-1 transition-transform">←</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <Link 
            to="/services" 
            className="btn-gold inline-flex items-center gap-2 group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            <span>عرض جميع الخدمات</span>
            <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
