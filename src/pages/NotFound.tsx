import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center justify-center bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              الصفحة غير موجودة
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
            </p>
            <Link to="/" className="btn-gold inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
