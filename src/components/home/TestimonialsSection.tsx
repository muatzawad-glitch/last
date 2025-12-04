import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارة",
    initial: "س",
    role: "جلسة تشافي الطفل الداخلي",
    content: "تجربة مذهلة غيرت حياتي. شعرت بسلام داخلي لم أعرفه من قبل. أنصح بشدة بهذه الجلسات.",
    rating: 5,
  },
  {
    name: "محمد",
    initial: "م",
    role: "جلسة العلاج بالطاقة",
    content: "بعد عدة جلسات، شعرت بتحسن كبير في صحتي النفسية والجسدية. فريق محترف وبيئة مريحة.",
    rating: 5,
  },
  {
    name: "نورة",
    initial: "ن",
    role: "جلسة نسف المعتقدات",
    content: "ساعدتني الجلسات في التخلص من معتقدات كانت تعيقني لسنوات. أشعر الآن بحرية وانطلاق.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">آراء عملائنا</span>
          <h2 className="heading-section">
            قصص <span className="text-gradient-gold">نجاح</span> ملهمة
          </h2>
          <p className="text-body">
            اكتشف كيف ساعدت جلساتنا العديد من الأشخاص في تحقيق التشافي والتحول
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card relative overflow-hidden group hover:shadow-glow transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-accent opacity-50" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
