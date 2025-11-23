import logo from "@/assets/logo-full.png";
import { Instagram, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-background text-primary-foreground dark:text-foreground py-8 sm:py-10 md:py-12 border-t border-border dark:border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 xl:gap-16 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="text-center sm:text-right">
            <div className="flex flex-col items-center sm:items-start justify-center mb-3 sm:mb-4">
              <img src={logo} alt="شركة الماس باك" className="h-12 sm:h-14 md:h-16 w-auto mb-2" />
              <p className="opacity-90 leading-relaxed text-center sm:text-right text-sm sm:text-base">
                شركة الماس باك - حلول التعبئة والتغليف الفاخرة
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center sm:justify-start items-center">
              <a href="https://www.instagram.com/almasarabicpack" target="_blank" rel="noopener noreferrer" className="bg-accent/20 p-2 rounded-full hover:bg-accent/30 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://wa.me/966535550797" target="_blank" rel="noopener noreferrer" className="bg-accent/20 p-2 rounded-full hover:bg-accent/30 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent dark:text-yellow-accent">روابط سريعة</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="/" className="text-sm sm:text-base opacity-90 hover:text-accent transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm sm:text-base opacity-90 hover:text-accent transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm sm:text-base opacity-90 hover:text-accent transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm sm:text-base opacity-90 hover:text-accent transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent dark:text-yellow-accent">خدماتنا</h4>
            <ul className="space-y-1.5 sm:space-y-2 opacity-90 text-sm sm:text-base">
              <li>
                <a href="/services/food-packaging" className="hover:text-accent transition-colors">
                  تغليف الطعام
                </a>
              </li>
              <li>
                <a href="/services/perfume-packaging" className="hover:text-accent transition-colors">
                  تغليف العطور
                </a>
              </li>
              <li>
                <a href="/services/medicine-packaging" className="hover:text-accent transition-colors">
                  تغليف الأدوية
                </a>
              </li>
              <li>
                <a href="/services/cosmetics-packaging" className="hover:text-accent transition-colors">
                  تغليف مستحضرات التجميل
                </a>
              </li>
              <li>
                <a href="/services/gift-packaging" className="hover:text-accent transition-colors">
                  تغليف الهدايا
                </a>
              </li>
              <li>
                <a href="/services/paper-bags" className="hover:text-accent transition-colors">
                  أكياس ورقية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent dark:text-yellow-accent">تواصل معنا</h4>
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-end gap-2 sm:gap-4 opacity-90 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap" dir="ltr">+966 53 555 0797</span>
                </div>
                <span className="hidden sm:inline h-4 w-px bg-accent/40" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap break-all text-xs sm:text-sm">info@almaspack.com</span>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-accent/20 dark:border-yellow-accent/30 h-40 sm:h-48 w-full mx-auto sm:mx-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1653843812!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع شركة الماس باك"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 dark:border-yellow-accent/20 pt-6 sm:pt-8 text-center">
          <p className="opacity-90 text-xs sm:text-sm md:text-base dark:text-muted-foreground">
            © 2024 شركة الماس باك - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};
