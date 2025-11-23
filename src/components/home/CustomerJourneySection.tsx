import clientVisitIcon from "@/assets/journey/client-visit-icon.png";
import pricingIcon from "@/assets/journey/pricing.png";
import followUpIcon from "@/assets/journey/follow-up.jpg";
import designIcon from "@/assets/journey/design.jpg";
import agreementIcon from "@/assets/journey/agreement.jpg";
import productionIcon from "@/assets/journey/production.jpg";
import deliveryIcon from "@/assets/journey/delivery.png";
import afterSalesIcon from "@/assets/journey/after-sales.jpg";

export const CustomerJourneySection = () => {
  const journeySteps = [
    {
      id: 1,
      title: "زيارة العميل",
      iconSrc: clientVisitIcon,
    },
    {
      id: 2,
      title: "تسعير المنتجات",
      iconSrc: pricingIcon,
    },
    {
      id: 3,
      title: "متابعة العميل",
      iconSrc: followUpIcon,
    },
    {
      id: 4,
      title: "التصميم",
      iconSrc: designIcon,
    },
    {
      id: 5,
      title: "توقيع الاتفاق",
      iconSrc: agreementIcon,
    },
    {
      id: 6,
      title: "إنتاج",
      iconSrc: productionIcon,
    },
    {
      id: 7,
      title: "توصيل",
      iconSrc: deliveryIcon,
    },
    {
      id: 8,
      title: "خدمة بعد البيع",
      iconSrc: afterSalesIcon,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background/50 dark:bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-3 sm:mb-4">
            رحلة العميل
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop & Tablet View - Two Rows */}
          <div className="hidden md:block">
            {/* First Row */}
            <div className="relative mb-16">
              <div className="grid grid-cols-4 gap-8">
                {journeySteps.slice(0, 4).map((step, index) => {
                  return (
                    <div key={step.id} className="relative text-center">
                      {/* Icon Container */}
                      <div className="relative z-10 mb-3 flex justify-center">
                        <img src={step.iconSrc} alt={step.title} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain dark:invert dark:opacity-90" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-gold">{step.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Second Row */}
            <div className="relative">
              <div className="grid grid-cols-4 gap-8">
                {journeySteps.slice(4, 8).map((step, index) => {
                  return (
                    <div key={step.id} className="relative text-center">
                      {/* Icon Container */}
                      <div className="relative z-10 mb-3 flex justify-center">
                        <img src={step.iconSrc} alt={step.title} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain dark:invert dark:opacity-90" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-gold">{step.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile View - Single Column */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => {
              return (
                <div key={step.id} className="relative text-center">
                  {/* Icon Container */}
                  <div className="relative z-10 mb-3 flex justify-center">
                    <img src={step.iconSrc} alt={step.title} className="w-24 h-24 object-contain dark:invert dark:opacity-90" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-gold">{step.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
