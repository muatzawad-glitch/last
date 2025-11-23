import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";


// Eager load critical pages
import NewHome from "./pages/NewHome";
import NotFound from "./pages/NotFound";
import WhatsNewPage from "./pages/WhatsNewPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EcoFriendlyPage from "./pages/EcoFriendlyPage";

// Eager load all service pages
import CosmeticsPackaging from "./pages/services/CosmeticsPackaging";
import FoodPackaging from "./pages/services/FoodPackaging";
import GiftPackaging from "./pages/services/GiftPackaging";
import PerfumePackaging from "./pages/services/PerfumePackaging";
import PaperBags from "./pages/services/PaperBags";
import MedicinePackaging from "./pages/services/MedicinePackaging";
import IntegratedPackagingSolutions from "./pages/services/IntegratedPackagingSolutions";
import PaperCardboardSupply from "./pages/services/PaperCardboardSupply";
import PlasticFabricSupply from "./pages/services/PlasticFabricSupply";
import PackagingDesignServices from "./pages/services/PackagingDesignServices";
import EcoFriendlyPackaging from "./pages/services/EcoFriendlyPackaging";
import PackagingConsultations from "./pages/services/PackagingConsultations";

// Eager load all product pages for instant navigation
import AcrylicTrays from "./pages/products/AcrylicTrays";
import LedSigns from "./pages/products/LedSigns";
import BagsBoxes from "./pages/products/BagsBoxes";
import VacuumTrays from "./pages/products/VacuumTrays";
import PaperProducts from "./pages/products/PaperProducts";
import PackagingMaterials from "./pages/products/PackagingMaterials";
import PlasticItems from "./pages/products/PlasticItems";
import PaperCups from "./pages/products/PaperCups";
import IceCreamCups from "./pages/products/IceCreamCups";
import PlasticCups from "./pages/products/PlasticCups";
import CupLids from "./pages/products/CupLids";
import CupAccessories from "./pages/products/CupAccessories";
import SoupColdDrinkCups from "./pages/products/SoupColdDrinkCups";
import BakeryBags from "./pages/products/BakeryBags";
import PaperBagsProduct from "./pages/products/PaperBags";
import PlasticFabricBags from "./pages/products/PlasticFabricBags";
import CoffeeDrinkBags from "./pages/products/CoffeeDrinkBags";
import BoxesCartons from "./pages/products/BoxesCartons";
import CoffeeBox from "./pages/products/CoffeeBox";
import PackagingAccessories from "./pages/products/PackagingAccessories";
import ScentedTissues from "./pages/products/ScentedTissues";
import ScentedTowels from "./pages/products/ScentedTowels";
import PaperCardboard from "./pages/products/PaperCardboard";
import DessertBoxes from "./pages/products/DessertBoxes";

const queryClient = new QueryClient();

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-foreground text-xl">جاري التحميل...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NewHome />} />
              <Route path="/whats-new" element={<WhatsNewPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/integrated-packaging-solutions" element={<IntegratedPackagingSolutions />} />
              <Route path="/services/paper-cardboard-supply" element={<PaperCardboardSupply />} />
              <Route path="/services/plastic-fabric-supply" element={<PlasticFabricSupply />} />
              <Route path="/services/packaging-design-services" element={<PackagingDesignServices />} />
              <Route path="/services/eco-friendly-packaging" element={<EcoFriendlyPackaging />} />
              <Route path="/services/packaging-consultations" element={<PackagingConsultations />} />
              <Route path="/services/cosmetics-packaging" element={<CosmeticsPackaging />} />
              <Route path="/services/food-packaging" element={<FoodPackaging />} />
              <Route path="/services/gift-packaging" element={<GiftPackaging />} />
              <Route path="/services/perfume-packaging" element={<PerfumePackaging />} />
              <Route path="/services/medicine-packaging" element={<MedicinePackaging />} />
              <Route path="/services/paper-bags" element={<PaperBags />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/acrylic-trays" element={<AcrylicTrays />} />
              <Route path="/products/led-signs" element={<LedSigns />} />
              <Route path="/products/bags-boxes" element={<BagsBoxes />} />
              <Route path="/products/vacuum-trays" element={<VacuumTrays />} />
              <Route path="/products/paper-products" element={<PaperProducts />} />
              <Route path="/products/packaging-materials" element={<PackagingMaterials />} />
              <Route path="/products/plastic-items" element={<PlasticItems />} />
              <Route path="/products/paper-cups" element={<PaperCups />} />
              <Route path="/products/ice-cream-cups" element={<IceCreamCups />} />
              <Route path="/products/plastic-cups" element={<PlasticCups />} />
              <Route path="/products/cup-lids" element={<CupLids />} />
              <Route path="/products/cup-accessories" element={<CupAccessories />} />
              <Route path="/products/soup-cold-drink-cups" element={<SoupColdDrinkCups />} />
              <Route path="/products/bakery-bags" element={<BakeryBags />} />
              <Route path="/products/paper-bags" element={<PaperBagsProduct />} />
              <Route path="/products/plastic-fabric-bags" element={<PlasticFabricBags />} />
              <Route path="/products/coffee-drink-bags" element={<CoffeeDrinkBags />} />
              <Route path="/products/dessert-boxes" element={<DessertBoxes />} />
              <Route path="/products/boxes-cartons" element={<BoxesCartons />} />
              <Route path="/products/coffee-box" element={<CoffeeBox />} />
              <Route path="/products/packaging-accessories" element={<PackagingAccessories />} />
              <Route path="/products/scented-tissues" element={<ScentedTissues />} />
              <Route path="/products/scented-towels" element={<ScentedTowels />} />
              <Route path="/products/paper-cardboard" element={<PaperCardboard />} />
              <Route path="/eco-friendly" element={<EcoFriendlyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
