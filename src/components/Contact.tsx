import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-right">معلومات الاتصال</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-right">
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">الهاتف</h4>
                    <p className="text-muted-foreground" dir="ltr">+966 53 555 0797</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-start gap-4 text-right">
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">info@almaspack.com</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-start gap-4 text-right">
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">العنوان</h4>
                    <p className="text-muted-foreground">المملكة العربية السعودية</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-navy-light p-8 rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4 text-right">ساعات العمل</h3>
              <div className="space-y-3 text-right">
                <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                  <p className="opacity-90">8:00 صباحاً - 5:00 مساءً</p>
                  <p className="font-bold">السبت - الخميس</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="opacity-90">مغلق</p>
                  <p className="font-bold">الجمعة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-right">أرسل رسالة</h3>
            <form className="space-y-6">
              <div className="text-right">
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <Input placeholder="أدخل اسمك الكامل" className="text-right" />
              </div>
              <div className="text-right">
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <Input type="email" placeholder="example@email.com" className="text-right" />
              </div>
              <div className="text-right">
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف
                </label>
                <Input type="tel" placeholder="+966 XX XXX XXXX" className="text-right" dir="ltr" />
              </div>
              <div className="text-right">
                <label className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <Textarea
                  placeholder="اكتب رسالتك هنا..."
                  className="min-h-32 text-right"
                  rows={5}
                />
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
