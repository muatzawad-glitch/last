import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles, Moon, Flower2 } from "lucide-react";

const WomenSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-pink-50/50 to-cream-dark/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-5 h-5 text-pink-500" />
              <span className="text-pink-500 font-medium">للعنصر النسائي</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              جلسة <span className="text-gradient-gold">الحوريات</span>
              <span className="block text-2xl mt-2 font-normal text-muted-foreground">
                رحلة تشافي مخصصة للمرأة
              </span>
            </h2>
            
            <p className="text-body mb-6 leading-relaxed">
              جلسة علاجية فريدة صُممت خصيصاً للمرأة، تجمع بين الطاقة الأنثوية المقدسة 
              وتقنيات التشافي العميق. نساعدك على إعادة الاتصال بجوهرك الأنثوي، 
              تحرير الطاقات المحبوسة، واستعادة توازنك الداخلي.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl">
                <Heart className="w-6 h-6 text-pink-500" />
                <span className="text-foreground text-sm">تشافي الأنوثة</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl">
                <Moon className="w-6 h-6 text-purple-500" />
                <span className="text-foreground text-sm">توازن الطاقة</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-foreground text-sm">تجديد الروح</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl">
                <Flower2 className="w-6 h-6 text-pink-400" />
                <span className="text-foreground text-sm">سلام داخلي</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-pink-500">80</span>
                <span className="text-muted-foreground mr-1">دولار</span>
                <p className="text-xs text-muted-foreground mt-1">للجلسة الواحدة</p>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <span className="text-3xl font-bold text-foreground">60</span>
                <span className="text-muted-foreground mr-1">دقيقة</span>
                <p className="text-xs text-muted-foreground mt-1">مدة الجلسة</p>
              </div>
            </div>

            <Link 
              to="/booking" 
              className="btn-gold inline-flex items-center gap-2 group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
            >
              احجزي جلستك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 shadow-card">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center animate-glow shadow-lg">
                  <span className="text-7xl">🧜‍♀️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">جلسة الحوريات</h3>
                <p className="text-muted-foreground">
                  استعيدي إشراقتك الداخلية
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-pink-200/50 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-purple-200/50 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🌸</span>
              </div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-pink-100/50 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-lg">💫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenSection;
