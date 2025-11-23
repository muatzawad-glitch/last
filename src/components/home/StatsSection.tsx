import { AnimatedCounter } from "@/components/AnimatedCounter";

export const StatsSection = () => {
  const stats = [
    { value: 2625, label: 'العملاء' },
    { value: 11880, label: 'العقود' },
    { value: 57, suffix: ' Ton', label: 'ورق الساندويتش' },
    { value: 12, suffix: 'M', label: 'الصناديق الورقية' },
    { value: 75, suffix: 'M', label: 'الأكواب الورقية المصنعة' },
    { value: 57, suffix: 'M', label: 'الأكواب البلاستيكية المصنعة' },
    { value: 150, suffix: 'M', label: 'المنتجات الورقية والبلاستيكية السادة' },
    { value: 510, label: 'المنتجات المطبوعة' },
    { value: 48, suffix: 'M', label: 'منتجات المناديل' },
    { value: 117, suffix: 'M', label: 'الأكياس الورقية المصنعة' },
  ];
  

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            إنجازاتنا بالأرقام
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-2 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl transition-transform hover:scale-105"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gold">
                <AnimatedCounter end={stat.value} suffix={stat.suffix || ''} />
              </div>
              <p className="text-xs sm:text-sm text-foreground font-medium px-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
