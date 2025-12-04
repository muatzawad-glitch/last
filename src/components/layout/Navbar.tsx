import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { id: "energy-healing", name: "العلاج بالطاقة", emoji: "⚡", bgColor: "bg-secondary" },
  { id: "etheric-surgery", name: "الجراحة الأثيرية", emoji: "✨", bgColor: "bg-accent" },
  { id: "belief-clearing", name: "نسف المعتقدات", emoji: "🌟", bgColor: "bg-primary" },
  { id: "inner-child", name: "تشافي الطفل الداخلي", emoji: "🦋", bgColor: "bg-secondary" },
  { id: "past-lives", name: "الحيوات السابقة", emoji: "🌙", bgColor: "bg-accent" },
  { id: "chakras", name: "علم الشاكرات", emoji: "🔮", bgColor: "bg-primary" },
  { id: "energy-healing-general", name: "التشافي الطاقي", emoji: "💫", bgColor: "bg-secondary" },
  { id: "childhood-wounds", name: "جروح الطفولة", emoji: "💖", bgColor: "bg-accent" },
  { id: "mermaids", name: "جلسة الحوريات", emoji: "🧜", bgColor: "bg-secondary" },
  { id: "spiritual-program", name: "برنامج تأهيل القدرات الروحية", emoji: "🌌", bgColor: "bg-primary" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Lumina Wellness" className="h-28 w-auto -my-4" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors duration-300 relative group ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              الرئيسية
              <span
                className={`absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-base font-medium transition-colors duration-300 relative flex items-center gap-1 ${
                  isServiceActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                الخدمات
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                <span
                  className={`absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ${
                    isServiceActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Dropdown Menu - Added pt-4 for buffer zone */}
              <div className={`absolute top-full right-0 pt-4 w-64 ${servicesOpen ? "block" : "hidden"}`}>
                <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                  <div className="py-2">
                    {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-accent/50 transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${service.bgColor}`}>
                            {service.emoji}
                          </div>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <Link
                        to="/services"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-primary font-medium hover:bg-accent/50 transition-colors"
                      >
                        عرض جميع الخدمات
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 relative group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link to="/booking" className="btn-gold text-sm">
              احجز جلستك
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 transition-colors ${
                  isActive("/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                الرئيسية
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full text-lg font-medium py-2 transition-colors ${
                    isServiceActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  الخدمات
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 mr-4 flex flex-col gap-2 border-r-2 border-primary/30 pr-4">
                    {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span className="text-base">{service.emoji}</span>
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    <Link
                      to="/services"
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-primary font-medium text-sm"
                    >
                      عرض جميع الخدمات
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="btn-gold text-center mt-4"
              >
                احجز جلستك
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
