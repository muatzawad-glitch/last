import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import featuredProduct1 from "@/assets/featured-product-1.jpg";
import featuredProduct2 from "@/assets/featured-product-2.jpg";
import featuredProduct3 from "@/assets/featured-product-3.jpg";
import featuredProduct4 from "@/assets/featured-product-4.jpg";
import featuredProduct5 from "@/assets/featured-product-5.jpg";
import featuredProduct6 from "@/assets/featured-product-6.jpg";

const WhatsNewPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const latestProducts = [
    {
      title: "تصميم و تغليف الهدايا الفاخرة",
      description: "نعتبر الهدايا أكثر من مجرد تقديم شيء ما؛ هي وسيلة لإيصال رسالة تعكس الذوق والأناقة.",
      fullDescription: "نعتبر الهدايا أكثر من مجرد تقديم شيء ما؛ هي وسيلة لإيصال رسالة تعكس الذوق والأناقة. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ تصاميم فاخرة تناسب جميع المناسبات\n✨ مواد عالية الجودة\n✨ أسعار تنافسية\n✨ خدمة عملاء ممتازة",
      image: featuredProduct1,
    },
    {
      title: "تصميم وتغليف العطور الفاخرة",
      description: "نقدم حلولاً متكاملة لتصميم وإنتاج علب العطور التي تجمع بين الفخامة والأناقة.",
      fullDescription: "نقدم حلولاً متكاملة لتصميم وإنتاج علب العطور التي تجمع بين الفخامة والأناقة. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ تصاميم فاخرة تعكس قيمة العطر\n✨ مواد فاخرة وأنيقة\n✨ طباعة عالية الجودة\n✨ تنفيذ سريع ودقيق",
      image: featuredProduct2,
    },
    {
      title: "إنتاج وتغليف الأكياس الورقية الفاخرة",
      description: "نقدم حلولاً متنوعة لإنتاج وتغليف الأكياس الورقية المادرة إلى تعكس",
      fullDescription: "نقدم حلولاً متنوعة لإنتاج وتغليف الأكياس الورقية الفاخرة التي تعكس هوية علامتك التجارية. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ أكياس ورقية صديقة للبيئة\n✨ تصاميم مخصصة\n✨ جودة طباعة عالية\n✨ مقابض قوية ومتينة",
      image: featuredProduct3,
    },
    {
      title: "تصميم و تغليف مستلزمات المكياج",
      description: "نحرص على تقديم تغليف مبتكر يعكس روح الأناقة والجودة من خلال استخدام المواد الفاخرة.",
      fullDescription: "نحرص على تقديم تغليف مبتكر يعكس روح الأناقة والجودة من خلال استخدام المواد الفاخرة. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ تصاميم عصرية وجذابة\n✨ مواد آمنة للمستحضرات التجميلية\n✨ طباعة ألوان نابضة بالحياة\n✨ خيارات تخصيص متعددة",
      image: featuredProduct4,
    },
    {
      title: "تصميم و تغليف علب الطعام والمنتجات",
      description: "تغليف آمن، عصري، وعملي يضمن حفظ المنتجات الاستهلاكية.",
      fullDescription: "تغليف آمن، عصري، وعملي يضمن حفظ المنتجات الاستهلاكية بأفضل حالاتها. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ تغليف آمن للأطعمة\n✨ مواد معتمدة صحياً\n✨ تصاميم جذابة\n✨ مقاومة للرطوبة والحرارة",
      image: featuredProduct5,
    },
    {
      title: "تصميم و تغليف علب الأدوية",
      description: "نقدم حلولاً متخصصة لتصميم وإنتاج علب الأدوية التي تجمع بين الأمان والأناقة.",
      fullDescription: "نقدم حلولاً متخصصة لتصميم وإنتاج علب الأدوية التي تجمع بين الأمان والأناقة. تواصل معنا للحصول على عرض سعر مميز.\n\n✨ مواد آمنة ومعتمدة طبياً\n✨ تصاميم واضحة وسهلة القراءة\n✨ حماية من الرطوبة والضوء\n✨ خيارات تعبئة متنوعة",
      image: featuredProduct6,
    },
  ];

  const handleLearnMore = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                الأحدث لدينا
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                اكتشف أحدث منتجاتنا وحلولنا المبتكرة في مجال التغليف والتعبئة. نحن نواكب أحدث الاتجاهات العالمية لنقدم لكم الأفضل دائماً
              </p>
            </div>
          </div>
        </section>

        {/* Latest Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {latestProducts.map((product, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <Button
                      className="mt-auto w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => handleLearnMore(product)}
                    >
                      تعرف أكثر
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                هل تريد معرفة المزيد عن منتجاتنا؟
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق رؤيتك
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/contact">
                    تواصل معنا
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products">
                    تصفح جميع المنتجات
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Product Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <button 
            onClick={() => setIsDialogOpen(false)}
            className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">إغلاق</span>
          </button>
          {selectedProduct && (
            <div className="space-y-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-right">
                  {selectedProduct.title}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-right text-lg leading-relaxed whitespace-pre-line">
                {selectedProduct.fullDescription}
              </DialogDescription>
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link to="/contact">
                    احصل على عرض سعر
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <Link to="/products">
                    تصفح المنتجات
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default WhatsNewPage;
