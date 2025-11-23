import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import chocolateBoxes from "@/assets/chocolate-boxes.jpg";
import perfumeBoxes from "@/assets/perfume-boxes.jpg";
import paperBags from "@/assets/paper-bags.jpg";
import giftBoxes from "@/assets/gift-boxes.jpg";
import jewelryBoxes from "@/assets/jewelry-boxes.jpg";
import foodPackaging from "@/assets/food-packaging.jpg";

export const Services = () => {
  const services = [
    {
      title: "علب الشوكولاته",
      description: "تصميم وتصنيع علب شوكولاته راقية بجودة عالية وتصاميم مبتكرة تناسب جميع المناسبات",
      image: chocolateBoxes,
    },
    {
      title: "علب العطور والمكياج",
      description: "علب أنيقة ومميزة لمنتجات العطور ومستحضرات التجميل تعكس فخامة منتجاتكم",
      image: perfumeBoxes,
    },
    {
      title: "الأكياس الورقية",
      description: "أكياس ورقية عالية الجودة بتصاميم عصرية تناسب محلات الهدايا والمتاجر الراقية",
      image: paperBags,
    },
    {
      title: "علب الهدايا",
      description: "علب هدايا مخصصة لجميع المناسبات مع إمكانية الطباعة والتخصيص حسب الطلب",
      image: giftBoxes,
    },
    {
      title: "علب المجوهرات",
      description: "علب فاخرة للمجوهرات والإكسسوارات تعكس قيمة وجودة منتجاتكم الثمينة",
      image: jewelryBoxes,
    },
    {
      title: "التغليف الغذائي",
      description: "حلول تغليف متطورة للمنتجات الغذائية تضمن الحفاظ على الجودة والنضارة",
      image: foodPackaging,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من حلول التعبئة والتغليف الفاخرة لتلبية جميع احتياجاتكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-right">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-right text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
