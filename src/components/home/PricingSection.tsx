import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowLeft, Crown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const individualPackages = [
  {
    name: "جلسة فردية",
    price: "120",
    currency: "دولار",
    description: "جلسة علاجية واحدة مدتها 60 دقيقة",
    features: [
      "استشارة أولية مجانية",
      "جلسة علاجية كاملة",
      "متابعة بعد الجلسة",
    ],
    popular: false
  },
  {
    name: "جلسة الحوريات",
    price: "80",
    currency: "دولار",
    description: "رحلة تشافي مخصصة للمرأة",
    features: [
      "استشارة أولية مجانية",
      "جلسة علاجية واحدة مدتها 60 دقيقة",
      "متابعة بعد الجلسة",
    ],
    popular: false,
    mermaid: true
  },
  {
    name: "برنامج تأهيل القدرات الروحية",
    price: "250",
    currency: "دولار",
    description: "كورس مكثف من 8 محاضرات",
    features: [
      "8 محاضرات تفاعلية",
      "تنمية القدرات الروحية",
      "تأملات موجهة",
      "متابعة شخصية",
    ],
    popular: false,
    course: true
  },
  {
    name: "باقة 3 جلسات",
    price: "350",
    currency: "دولار",
    description: "3 جلسات علاجية للتشافي العميق",
    features: [
      "استشارة أولية مجانية",
      "3 جلسات علاجية كاملة",
      "متابعة مستمرة",
      "خطة علاجية مخصصة",
    ],
    popular: true
  },
  {
    name: "باقة 5 جلسات",
    price: "500",
    currency: "دولار",
    description: "برنامج تحول شامل مكثف",
    features: [
      "استشارة أولية مجانية",
      "5 جلسات علاجية كاملة",
      "متابعة على مدار الأسبوع",
      "خطة علاجية شاملة",
    ],
    popular: false
  }
];

const monthlyPackages = [
  {
    name: "باقة التوازن",
    price: "360",
    currency: "دولار/شهرياً",
    description: "4 جلسات - جلسة واحدة كل أسبوع",
    features: [
      "4 جلسات شهرياً",
      "جلسة أسبوعية منتظمة",
      "متابعة مستمرة",
      "تقارير دورية",
    ],
    popular: false
  },
  {
    name: "باقة الاستقرار العميق",
    price: "500",
    currency: "دولار/شهرياً",
    description: "6 جلسات شهرية للتشافي المكثف",
    features: [
      "6 جلسات شهرياً",
      "متابعة مكثفة",
      "خطة علاجية متقدمة",
      "دعم مستمر",
    ],
    popular: true
  },
  {
    name: "باقة التحول",
    price: "600",
    currency: "دولار/شهرياً",
    description: "8 جلسات شهرية للتحول الشامل",
    features: [
      "8 جلسات شهرياً",
      "جلستان أسبوعياً",
      "برنامج تحول متكامل",
      "متابعة يومية",
    ],
    popular: false
  }
];

const quarterlyPackages = [
  {
    name: "رحلة التوازن الشامل",
    price: "700",
    currency: "دولار",
    description: "12 جلسة خلال 3 أشهر",
    features: [
      "12 جلسة علاجية",
      "4 جلسات شهرياً",
      "توفير مميز",
      "خطة علاجية طويلة المدى",
      "متابعة شاملة",
    ],
    popular: true
  },
  {
    name: "رحلة التشافي العميق",
    price: "880",
    currency: "دولار",
    description: "18 جلسة خلال 3 أشهر",
    features: [
      "18 جلسة علاجية",
      "6 جلسات شهرياً",
      "برنامج تشافي مكثف",
      "دعم متواصل",
      "نتائج عميقة ومستدامة",
    ],
    popular: false
  }
];

const annualPackages = [
  {
    name: "الحضور الواعي المستمر",
    price: "1000",
    currency: "دولار/سنوياً",
    description: "24 جلسة - جلستان شهرياً",
    features: [
      "24 جلسة سنوياً",
      "جلستان كل شهر",
      "عضوية VIP",
      "أولوية في الحجز",
      "متابعة شخصية مميزة",
    ],
    popular: false,
    vip: true
  },
  {
    name: "باقة النضج الداخلي",
    price: "2000",
    currency: "دولار/سنوياً",
    description: "48 جلسة - جلسة أسبوعية طوال العام",
    features: [
      "48 جلسة سنوياً",
      "جلسة أسبوعية",
      "عضوية VIP حصرية",
      "برنامج تحول شامل",
      "دعم على مدار الساعة",
    ],
    popular: true,
    vip: true
  }
];

const PackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
  <div
    className={`relative bg-card rounded-3xl p-8 shadow-card transition-all duration-500 hover:-translate-y-2 ${
      pkg.popular
        ? "border-2 border-primary shadow-glow"
        : "border border-border/50"
    } ${pkg.mermaid ? "bg-gradient-to-br from-secondary/5 to-accent/10" : ""}`}
  >
    {pkg.popular && (
      <div className="absolute -top-4 right-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
        الأكثر طلباً
      </div>
    )}
    {pkg.vip && (
      <div className="absolute top-4 left-4">
        <Crown className="w-6 h-6 text-yellow-500" />
      </div>
    )}
    {pkg.mermaid && (
      <div className="absolute top-4 left-4">
        <span className="text-2xl">🧜</span>
      </div>
    )}
    {pkg.course && (
      <div className="absolute top-4 left-4">
        <span className="text-2xl">🌌</span>
      </div>
    )}

    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
    <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

    <div className="mb-6">
      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
      <span className="text-muted-foreground mr-2">{pkg.currency}</span>
    </div>

    <ul className="space-y-3 mb-8">
      {pkg.features.map((feature: string, i: number) => (
        <li key={i} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-foreground text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <Link
      to="/booking"
      className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition-all duration-300 ${
        pkg.popular
          ? "btn-gold"
          : "btn-outline-gold"
      }`}
    >
      احجز الآن
      <ArrowLeft className="w-4 h-4" />
    </Link>
  </div>
);

const PricingSection = () => {
  return (
    <section className="section-padding bg-cream-dark/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            أسعار الجلسات
          </span>
          <h2 className="heading-section">
            باقات <span className="text-gradient-gold">مناسبة</span> لك
          </h2>
          <p className="text-body">
            اختر الباقة التي تناسب احتياجاتك وابدأ رحلة التشافي
          </p>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="individual" className="w-full" dir="rtl">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-cream-dark/50 p-1 rounded-full">
            <TabsTrigger value="individual" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              الجلسات الفردية
            </TabsTrigger>
            <TabsTrigger value="monthly" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              الشهري
            </TabsTrigger>
            <TabsTrigger value="quarterly" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              ربع سنوي
            </TabsTrigger>
            <TabsTrigger value="annual" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              السنوي
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {individualPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {monthlyPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quarterly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quarterlyPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annual">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {annualPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * جميع الأسعار بالدولار الأمريكي. للاستفسار عن خدمة معينة يرجى التواصل معنا
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
