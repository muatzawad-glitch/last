import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import aboutWellnessImg from "@/assets/about-wellness.jpg";

const features = [
  "خبرة متخصصة في العلاج بالطاقة",
  "جلسات فردية مصممة لاحتياجاتك",
  "بيئة آمنة ومريحة للتشافي",
  "متابعة مستمرة بعد الجلسات",
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-cream-dark/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={aboutWellnessImg} 
                alt="العلاج بالطاقة والتشافي" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-medium mb-4">من نحن</span>
            <h2 className="heading-section">
              نرافقك في رحلة
              <span className="text-gradient-gold block">التحول والتشافي</span>
            </h2>
            <p className="text-body mb-8">
              في Lumina Wellness، نؤمن بأن كل شخص يمتلك القدرة على التشافي والتحول. 
              نحن هنا لنساعدك في اكتشاف هذه القدرة من خلال جلسات علاجية متخصصة 
              تجمع بين الحكمة القديمة والتقنيات الحديثة.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-gold inline-flex items-center gap-2 group">
              اعرف المزيد عنا
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
