import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Sparkles, Calendar, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "العلاج بالطاقة",
  "الجراحة الأثيرية",
  "نسف المعتقدات",
  "تشافي الطفل الداخلي",
  "الحيوات السابقة",
  "علم الشاكرات",
  "التشافي الطاقي",
  "جروح الطفولة",
  "جلسة الحوريات",
];

const timeSlots = [
  "09:00 صباحاً",
  "10:00 صباحاً",
  "11:00 صباحاً",
  "12:00 ظهراً",
  "02:00 مساءً",
  "03:00 مساءً",
  "04:00 مساءً",
  "05:00 مساءً",
  "06:00 مساءً",
  "07:00 مساءً",
  "08:00 مساءً",
];

const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // إرسال عبر واتساب (يفتح في تبويب جديد)
    const phoneNumber = "+971567577627";
    const whatsappMessage = `*طلب حجز جلسة جديد*\n\nالخدمة: ${formData.service}\nالتاريخ: ${formData.date}\nالوقت: ${formData.time}\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nملاحظات: ${formData.notes || 'لا يوجد'}`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // إرسال عبر البريد الإلكتروني باستخدام Resend
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      await supabase.functions.invoke('send-booking-email', {
        body: {
          to_email: 'azadirsudan@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          notes: formData.notes || 'لا يوجد',
          type: 'booking'
        }
      });
    } catch (error) {
      console.error("خطأ في إرسال البريد الإلكتروني:", error);
    }
    
    toast({
      title: "تم إرسال طلب الحجز بنجاح",
      description: "سنتواصل معك قريباً لتأكيد موعدك",
    });
    setStep(4);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary/15 via-accent/20 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-base font-semibold text-secondary">احجز جلستك الآن</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-up leading-tight">
              رحلتك نحو
              <span className="text-secondary block mt-2">التشافي تبدأ من هنا</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200 mb-10">
              اختر الخدمة المناسبة لاحتياجاتك وحدد الموعد الذي يناسبك، وسنكون معك في كل خطوة
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up delay-300">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                <div className="text-3xl mb-3">📅</div>
                <p className="text-sm font-semibold text-foreground">اختر الموعد</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                <div className="text-3xl mb-3">✨</div>
                <p className="text-sm font-semibold text-foreground">اختر الخدمة</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                <div className="text-3xl mb-3">🌟</div>
                <p className="text-sm font-semibold text-foreground">ابدأ التحول</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-2 rounded transition-all ${
                        step > s ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Success Message */}
            {step === 4 && (
              <div className="text-center bg-card rounded-3xl p-12 shadow-card">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">تم إرسال طلب الحجز بنجاح!</h2>
                <p className="text-muted-foreground mb-8">
                  شكراً لك. سنتواصل معك قريباً لتأكيد موعدك.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      service: "",
                      date: "",
                      time: "",
                      name: "",
                      email: "",
                      phone: "",
                      notes: ""
                    });
                  }}
                  className="btn-outline-gold"
                >
                  حجز جلسة جديدة
                </button>
              </div>
            )}

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">اختر الخدمة</h2>
                    <p className="text-sm text-muted-foreground">الخطوة 1 من 3</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setFormData({ ...formData, service })}
                      className={`p-4 rounded-xl border-2 text-right transition-all ${
                        formData.service === service
                          ? "border-primary bg-accent"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium text-foreground">{service}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  disabled={!formData.service}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">اختر الموعد</h2>
                    <p className="text-sm text-muted-foreground">الخطوة 2 من 3</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      التاريخ
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الوقت
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`p-3 rounded-xl border-2 text-sm transition-all ${
                            formData.time === time
                              ? "border-primary bg-accent"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-outline-gold flex-1">
                    السابق
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="btn-gold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    التالي
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">معلوماتك الشخصية</h2>
                    <p className="text-sm text-muted-foreground">الخطوة 3 من 3</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الكامل
                    </label>
                    <div className="relative">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pr-12 pl-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pr-12 pl-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      رقم الهاتف
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pr-12 pl-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+971 XX XXX XXXX"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ملاحظات إضافية (اختياري)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="أي معلومات إضافية تود مشاركتها..."
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-accent rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-foreground mb-4">ملخص الحجز</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">الخدمة:</span>
                      <span className="font-medium text-foreground">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">التاريخ:</span>
                      <span className="font-medium text-foreground">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">الوقت:</span>
                      <span className="font-medium text-foreground">{formData.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="btn-outline-gold flex-1">
                    السابق
                  </button>
                  <button type="submit" className="btn-gold flex-1">
                    تأكيد الحجز
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
