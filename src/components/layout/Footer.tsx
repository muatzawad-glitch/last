import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary text-primary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container-custom relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/">
              <img src={logo} alt="Lumina Wellness" className="h-32 w-auto" />
            </Link>
            <p className="text-primary/80 text-base text-center md:text-right max-w-xs leading-relaxed">
              نساعدك في رحلة التشافي والتحول من خلال جلسات العلاج بالطاقة المتخصصة
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-secondary group-hover:text-accent" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-secondary group-hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-primary">روابط سريعة</h3>
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-base text-primary/80 hover:text-primary hover:translate-x-2 transition-all duration-300 font-medium"
              >
                الرئيسية
              </Link>
              <Link 
                to="/services" 
                className="text-base text-primary/80 hover:text-primary hover:translate-x-2 transition-all duration-300 font-medium"
              >
                الخدمات
              </Link>
              <Link 
                to="/about" 
                className="text-base text-primary/80 hover:text-primary hover:translate-x-2 transition-all duration-300 font-medium"
              >
                من نحن
              </Link>
              <Link 
                to="/booking" 
                className="text-base text-primary/80 hover:text-primary hover:translate-x-2 transition-all duration-300 font-medium"
              >
                احجز جلستك
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-xl font-bold text-primary">هل أنت مستعد للتحول؟</h3>
            <p className="text-base text-primary/80 text-center md:text-right max-w-xs leading-relaxed">
              احجز جلستك الأولى الآن واكتشف كيف يمكن للعلاج بالطاقة أن يغير حياتك نحو الأفضل
            </p>
            <Link 
              to="/booking" 
              className="px-8 py-4 bg-primary text-secondary rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              احجز جلستك الآن
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary/70 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Lumina Wellness. جميع الحقوق محفوظة
          </p>
          <p className="text-primary/70 text-sm font-medium" dir="ltr">
            azadirsudan@gmail.com | +971 56 757 7627
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
