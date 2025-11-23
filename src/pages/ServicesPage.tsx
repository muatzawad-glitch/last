import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceCosmeticsPackaging from "@/assets/service-cosmetics-packaging.jpg";
import serviceFoodPackaging from "@/assets/service-food-packaging.jpg";
import serviceGiftPackaging from "@/assets/service-gift-packaging.jpg";
import servicePerfumePackaging from "@/assets/service-perfume-packaging.jpg";
import servicePaperBags from "@/assets/service-paper-bags.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "تصميم وتغليف مستلزمات المكياج",
      description: "نحرص على تقديم تغليف مبتكر يعزز نوع الإنتاج ويميز من قيمة المنتج.",
      image: serviceCosmeticsPackaging,
      href: "/services/cosmetics-packaging"
    },
    {
      title: "تصميم وتغليف علب الطعام والمنتجات",
      description: "تغليف آمن، عصري، وعملي يضمن حفظ المنتجات بأفضل جودة.",
      image: serviceFoodPackaging,
      href: "/services/food-packaging"
    },
    {
      title: "تصميم وتغليف الهدايا الفاخرة",
      description: "تصاميم فريدة تعكس اهتمامك وتجعل هداياك مميزة.",
      image: serviceGiftPackaging,
      href: "/services/gift-packaging"
    },
    {
      title: "تصميم وتغليف العطور الفاخرة",
      description: "حلول متكاملة لتغليف العطور بأناقة وفخامة.",
      image: servicePerfumePackaging,
      href: "/services/perfume-packaging"
    },
    {
      title: "إنتاج الأكياس الورقية الفاخرة",
      description: "أكياس ورقية فاخرة تعكس هوية علامتك التجارية.",
      image: servicePaperBags,
      href: "/services/paper-bags"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">أعمالنا</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                نقدم نماذج متنوعة من المنتجات التي نفخر بها
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.href}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                        شاهد التفاصيل
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
