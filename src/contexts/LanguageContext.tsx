import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    home: 'الرئيسية',
    products: 'منتجاتنا',
    services: 'خدماتنا',
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    callNow: 'اتصل الآن',
    
    // Hero Section
    heroTitle: 'الماس باك',
    heroSubtitle: 'رائدون في حلول التغليف المبتكرة',
    heroDescription: 'نقدم أفضل حلول التغليف الورقي والكرتوني بجودة عالمية وأسعار تنافسية',
    learnMore: 'اعرف المزيد',
    orderNow: 'اطلب الآن',
    
    // About Section
    aboutTitle: 'نبذة عن الشركة',
    aboutDescription: 'شركة الماس باك متخصصة في إنتاج وتوريد منتجات التغليف الورقي والكرتوني بجودة عالية. نفخر بتقديم حلول تغليف مبتكرة تلبي احتياجات عملائنا في مختلف القطاعات.',
    
    // Services Section
    servicesTitle: 'خدماتنا',
    servicesDescription: 'نقدم مجموعة شاملة من خدمات التغليف المتخصصة',
    viewAllServices: 'عرض جميع الخدمات',
    
    // Products Section
    productsTitle: 'منتجاتنا',
    productsDescription: 'مجموعة متنوعة من منتجات التغليف عالية الجودة',
    viewAllProducts: 'عرض جميع المنتجات',
    
    // Eco Section
    ecoTitle: 'المنتجات الصديقة للبيئة',
    ecoDescription: 'نلتزم بتقديم منتجات صديقة للبيئة تحافظ على كوكبنا',
    
    // Consultation Section
    consultationTitle: 'استشارات التغليف وحلول التعبئة',
    consultationDescription: 'فريقنا المتخصص جاهز لتقديم الاستشارات وحلول التغليف المخصصة لعملك',
    getConsultation: 'احصل على استشارة',
    
    // Why Us Section
    whyUsTitle: 'لماذا نحن',
    whyUsDescription: 'الأسباب التي تجعلنا الخيار الأفضل',
    
    // Statistics Section
    statsYears: 'سنوات الخبرة',
    statsClients: 'عميل سعيد',
    statsProducts: 'منتج متنوع',
    statsCountries: 'دول نخدمها',
    
    // CTA Section
    ctaTitle: 'تواصل معنا',
    ctaDescription: 'نحن هنا لخدمتك ومساعدتك في إيجاد أفضل حلول التغليف',
    
    // Products List
    paperCups: 'أكواب ورقية',
    iceCreamCups: 'أكواب آيس كريم',
    plasticCups: 'أكواب بلاستيك',
    cupLids: 'أغطية أكواب',
    dessertBoxes: 'بوكس حلويات',
    scentedTissues: 'مناديل معطرة',
    scentedTowels: 'مناشف معطرة',
    ecoFriendly: 'منتجات صديقة للبيئة',
    paperCardboard: 'مواد تغليف ورقية وكرتون',
    packagingAccessories: 'إكسسوارات التغليف',
    
    // Services List
    paperCardboardProduction: 'إنتاج وتوريد منتجات التغليف الورقي والكرتون',
    dessertBoxesProduction: 'إنتاج بوكس الحلويات بجميع المقاسات',
    scentedTowelsProduction: 'إنتاج المناشف المعطرة',
    scentedTissuesProduction: 'إنتاج المناديل المعطرة',
    scentCustomization: 'تخصيص الروائح - ليمون - لافندر - زهور',
    packagingMaterialsManufacturing: 'تصنيع وتوريد مواد التغليف PET / PPS / PE',
    specificationsCustomization: 'تخصيص المواصفات - الأوزان GSM والمقاسات',
    printingCustomization: 'تخصيص الطباعة والشعار على التغليف',
    packagingConsultations: 'استشارات التغليف وحلول التعبئة',
  },
  en: {
    // Header
    home: 'Home',
    products: 'Our Products',
    services: 'Our Services',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    callNow: 'Call Now',
    
    // Hero Section
    heroTitle: 'Diamond Pack',
    heroSubtitle: 'Leaders in Innovative Packaging Solutions',
    heroDescription: 'We provide the best paper and cardboard packaging solutions with international quality and competitive prices',
    learnMore: 'Learn More',
    orderNow: 'Order Now',
    
    // About Section
    aboutTitle: 'About Company',
    aboutDescription: 'Diamond Pack specializes in producing and supplying high-quality paper and cardboard packaging products. We pride ourselves on providing innovative packaging solutions that meet our clients\' needs across various sectors.',
    
    // Services Section
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer a comprehensive range of specialized packaging services',
    viewAllServices: 'View All Services',
    
    // Products Section
    productsTitle: 'Our Products',
    productsDescription: 'A diverse range of high-quality packaging products',
    viewAllProducts: 'View All Products',
    
    // Eco Section
    ecoTitle: 'Eco-Friendly Products',
    ecoDescription: 'We are committed to providing eco-friendly products that preserve our planet',
    
    // Consultation Section
    consultationTitle: 'Packaging Consultations & Solutions',
    consultationDescription: 'Our specialized team is ready to provide consultations and customized packaging solutions for your business',
    getConsultation: 'Get Consultation',
    
    // Why Us Section
    whyUsTitle: 'Why Us',
    whyUsDescription: 'Reasons that make us the best choice',
    
    // Statistics Section
    statsYears: 'Years of Experience',
    statsClients: 'Happy Clients',
    statsProducts: 'Diverse Products',
    statsCountries: 'Countries We Serve',
    
    // CTA Section
    ctaTitle: 'Contact Us',
    ctaDescription: 'We are here to serve you and help you find the best packaging solutions',
    
    // Products List
    paperCups: 'Paper Cups',
    iceCreamCups: 'Ice Cream Cups',
    plasticCups: 'Plastic Cups',
    cupLids: 'Cup Lids',
    dessertBoxes: 'Dessert Boxes',
    scentedTissues: 'Scented Tissues',
    scentedTowels: 'Scented Towels',
    ecoFriendly: 'Eco-Friendly Products',
    paperCardboard: 'Paper & Cardboard Packaging Materials',
    packagingAccessories: 'Packaging Accessories',
    
    // Services List
    paperCardboardProduction: 'Paper & Cardboard Packaging Production & Supply',
    dessertBoxesProduction: 'Dessert Boxes Production in All Sizes',
    scentedTowelsProduction: 'Scented Towels Production',
    scentedTissuesProduction: 'Scented Tissues Production',
    scentCustomization: 'Scent Customization (Lemon - Lavender - Flowers)',
    packagingMaterialsManufacturing: 'Packaging Materials Manufacturing & Supply (PET / PPS / PE)',
    specificationsCustomization: 'Specifications Customization (GSM Weights & Sizes)',
    printingCustomization: 'Printing & Logo Customization on Packaging',
    packagingConsultations: 'Packaging Consultations & Solutions',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
