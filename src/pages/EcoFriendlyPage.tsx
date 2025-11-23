import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Recycle, TreePine, Heart, Globe, CheckCircle } from "lucide-react";

const EcoFriendlyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-8">
                <Leaf className="h-20 w-20 text-green-500" />
                <Recycle className="h-20 w-20 text-emerald-500" />
                <TreePine className="h-20 w-20 text-green-600" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                منتجاتنا الصديقة للبيئة
              </h1>
              <p className="text-xl text-muted-foreground">
                نلتزم بتقديم حلول تغليف مستدامة تحافظ على كوكبنا للأجيال القادمة
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Introduction */}
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  التزامنا بالاستدامة
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  في الماس باك، نؤمن بأن مسؤوليتنا تتجاوز تقديم منتجات عالية الجودة. نلتزم بحماية البيئة من خلال تطوير وتوفير منتجات تغليف صديقة للبيئة، قابلة للتحلل، وقابلة لإعادة التدوير، مما يساهم في تقليل البصمة الكربونية والحفاظ على كوكبنا.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <Recycle className="h-12 w-12 text-green-500" />
                    <h3 className="text-2xl font-bold text-foreground">قابلة لإعادة التدوير</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    جميع منتجاتنا مصممة لتكون قابلة لإعادة التدوير بالكامل، مما يقلل من النفايات ويعزز الاقتصاد الدائري.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <Leaf className="h-12 w-12 text-emerald-500" />
                    <h3 className="text-2xl font-bold text-foreground">مواد طبيعية</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم مواد خام طبيعية وقابلة للتحلل البيولوجي في تصنيع منتجاتنا، مما يضمن عدم الإضرار بالبيئة.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <TreePine className="h-12 w-12 text-green-600" />
                    <h3 className="text-2xl font-bold text-foreground">من مصادر مستدامة</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نحرص على الحصول على موادنا الخام من مصادر مستدامة معتمدة تحافظ على الغابات والموارد الطبيعية.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="h-12 w-12 text-blue-500" />
                    <h3 className="text-2xl font-bold text-foreground">تقليل البصمة الكربونية</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نتبع عمليات إنتاج صديقة للبيئة تقلل من انبعاثات الكربون وتحافظ على الموارد الطبيعية.
                  </p>
                </div>
              </div>

              {/* Product Categories */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                  منتجاتنا الصديقة للبيئة
                </h2>
                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">الأكواب الورقية</h4>
                        <p className="text-muted-foreground">
                          أكواب ورقية قابلة للتحلل مصنوعة من ألياف طبيعية، مثالية للمشروبات الساخنة والباردة.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">الأكياس الورقية</h4>
                        <p className="text-muted-foreground">
                          أكياس ورقية متينة وقابلة لإعادة الاستخدام، بديل مثالي للأكياس البلاستيكية.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">صناديق التغليف الكرتونية</h4>
                        <p className="text-muted-foreground">
                          صناديق مصنوعة من كرتون معاد تدويره 100%، قوية ومتينة وصديقة للبيئة.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">مواد التغليف القابلة للتحلل</h4>
                        <p className="text-muted-foreground">
                          بدائل بلاستيكية قابلة للتحلل الحيوي تتحلل بشكل طبيعي دون ترك أثر ضار.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">المناديل والمناشف الورقية</h4>
                        <p className="text-muted-foreground">
                          منتجات ورقية صحية مصنوعة من ألياف طبيعية 100% قابلة للتحلل.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-12 rounded-lg text-center">
                <Heart className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  معاً نحو مستقبل أخضر
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  اختر منتجاتنا الصديقة للبيئة وكن جزءاً من التغيير الإيجابي. كل خطوة نحو الاستدامة تساهم في حماية كوكبنا للأجيال القادمة.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcoFriendlyPage;
