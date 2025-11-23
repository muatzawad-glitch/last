import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('home'), href: "/" },
  ];

  const productItems = [
    { label: t('paperCups'), href: "/products/paper-cups" },
    { label: t('iceCreamCups'), href: "/products/ice-cream-cups" },
    { label: t('plasticCups'), href: "/products/plastic-cups" },
    { label: t('cupLids'), href: "/products/cup-lids" },
    { label: t('dessertBoxes'), href: "/products/dessert-boxes" },
    { label: t('scentedTissues'), href: "/products/scented-tissues" },
    { label: t('scentedTowels'), href: "/products/scented-towels" },
    { label: t('paperCardboard'), href: "/products/paper-cardboard" },
    { label: t('packagingAccessories'), href: "/products/packaging-accessories" },
  ];

  const serviceItems = [
    { label: "تقديم حلول تغليف متكاملة لجميع المنتجات", href: "/services/integrated-packaging-solutions" },
    { label: "توريد منتجات التغليف الورقية والكرتون", href: "/services/paper-cardboard-supply" },
    { label: "توريد منتجات التغليف البلاستيكية والقماش", href: "/services/plastic-fabric-supply" },
    { label: "تقديم خدمات تصميم حلول التغليف", href: "/services/packaging-design-services" },
    { label: "توريد منتجات تغليف صديقة للبيئة", href: "/services/eco-friendly-packaging" },
    { label: "تقديم استشارات لحلول التغليف", href: "/services/packaging-consultations" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="شركة الماس باك" 
              className="h-14 sm:h-16 md:h-18 w-auto dark:brightness-0 dark:invert" 
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-foreground hover:text-accent transition-colors font-medium ${
                  location.pathname === item.href ? "text-accent border-b-2 border-accent" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-all duration-300 font-medium focus:outline-none">
                {t('products')}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 shadow-2xl bg-background/95 backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden">
                {productItems.map((product) => (
                  <DropdownMenuItem key={product.label} asChild>
                    <Link
                      to={product.href}
                      className="w-full cursor-pointer text-right py-2.5 px-4 transition-all duration-200 hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/5 hover:pr-6 border-b border-border/50 last:border-0"
                    >
                      <span className="text-sm font-medium">{product.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-all duration-300 font-medium focus:outline-none">
                {t('services')}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 shadow-2xl bg-background backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden z-50">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.label} asChild>
                    <Link
                      to={service.href}
                      className="w-full cursor-pointer text-right py-3 px-4 transition-all duration-200 hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/5 hover:pr-6 border-b border-border/30 last:border-0"
                    >
                      <span className="text-sm font-medium leading-relaxed">{service.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className={`text-foreground hover:text-accent transition-colors font-medium ${
                location.pathname === "/about" ? "text-accent border-b-2 border-accent" : ""
              }`}
            >
              من نحن
            </Link>

            <Link
              to="/contact"
              className={`text-foreground hover:text-accent transition-colors font-medium ${
                location.pathname === "/contact" ? "text-accent border-b-2 border-accent" : ""
              }`}
            >
              تواصل معنا
            </Link>
          </nav>

          {/* CTA Button & Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground hover:text-accent font-semibold"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-accent"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.location.href = '/contact'}
            >
              <Phone className={language === 'ar' ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4'} />
              {t('callNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden py-3 sm:py-4 border-t border-border">
            <div className="flex flex-col gap-3 sm:gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm sm:text-base text-foreground hover:text-accent transition-colors py-2 ${
                    location.pathname === item.href ? "text-accent font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Products Menu */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="text-sm font-bold text-accent mb-2 sm:mb-3">{t('products')}</p>
                {productItems.map((product) => (
                  <Link
                    key={product.label}
                    to={product.href}
                    className="block text-sm sm:text-base text-foreground hover:text-accent transition-colors py-2 pr-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Services Menu */}
              <div className="border-t border-border pt-3 sm:pt-4 mt-3 sm:mt-4">
                <p className="text-sm font-bold text-accent mb-2 sm:mb-3">{t('services')}</p>
                {serviceItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className="block text-sm sm:text-base text-foreground hover:text-accent transition-colors py-2 pr-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="text-foreground hover:text-accent transition-colors py-2 border-t border-border pt-4 mt-4"
                onClick={() => setIsOpen(false)}
              >
                {t('aboutUs')}
              </Link>

              <Link
                to="/contact"
                className="text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t('contactUs')}
              </Link>

              {/* Mobile Language & Theme Toggles */}
              <div className="border-t border-border pt-4 mt-4 flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex-1 font-semibold"
                >
                  {language === 'ar' ? 'EN' : 'AR'}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1"
                >
                  {theme === "dark" ? <Sun className={language === 'ar' ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4'} /> : <Moon className={language === 'ar' ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4'} />}
                  {theme === 'dark' ? (language === 'ar' ? 'نهاري' : 'Light') : (language === 'ar' ? 'ليلي' : 'Dark')}
                </Button>
              </div>
              
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-4"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/contact';
                }}
              >
                <Phone className={language === 'ar' ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4'} />
                {t('callNow')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
