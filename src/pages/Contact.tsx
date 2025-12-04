import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // إرسال عبر واتساب (يفتح في تبويب جديد)
    const phoneNumber = "+971567577627";
    const whatsappMessage = `استفسار جديد من ${formData.name}\n\nالبريد الإلكتروني: ${formData.email}\nالهاتف: ${formData.phone}\nالموضوع: ${formData.subject}\n\nالرسالة:\n${formData.message}`;
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
          subject: formData.subject,
          message: formData.message,
          type: 'contact'
        }
      });
    } catch (error) {
      console.error("خطأ في إرسال البريد الإلكتروني:", error);
    }
    
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "تم إرسال رسالتك عبر الواتساب والبريد الإلكتروني، وسنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-accent/30 via-secondary/10 to-background overflow-hidden min-h-[60vh] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-base font-semibold text-secondary">تواصل معنا</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-up leading-tight">
              دائماً هنا
              <span className="text-secondary block mt-2">للإجابة على أسئلتك</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200 mb-10">
              نحن سعداء بالتواصل معك والإجابة على جميع استفساراتك حول خدماتنا ومساعدتك في اختيار ما يناسبك
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-secondary/20 flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">متاحون للرد</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-secondary/20 flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">استجابة سريعة</span>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-secondary/20 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">مواعيد مرنة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                معلومات التواصل
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">الهاتف</h3>
                    <p className="text-muted-foreground" dir="ltr">+971 56 757 7627</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground" dir="ltr">azadirsudan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">الموقع</h3>
                    <p className="text-muted-foreground">الإمارات العربية المتحدة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">أوقات العمل</h3>
                    <p className="text-muted-foreground">السبت - الخميس: 9 صباحاً - 9 مساءً</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold text-foreground mb-4">تابعنا على</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+971"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        الموضوع
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="booking">حجز جلسة</option>
                        <option value="inquiry">استفسار عام</option>
                        <option value="services">معلومات عن الخدمات</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
