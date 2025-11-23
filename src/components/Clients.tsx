import clientLogo1 from "@/assets/client-logo-1.jpg";
import clientLogo2 from "@/assets/client-logo-2.jpg";
import clientLogo3 from "@/assets/client-logo-3.jpg";
import clientLogo4 from "@/assets/client-logo-4.jpg";
import clientLogo5 from "@/assets/client-logo-5.jpg";
import clientLogo6 from "@/assets/client-logo-6.jpg";

export const Clients = () => {
  const clients = [
    { id: 1, logo: clientLogo1, name: "عميل 1" },
    { id: 2, logo: clientLogo2, name: "عميل 2" },
    { id: 3, logo: clientLogo3, name: "عميل 3" },
    { id: 4, logo: clientLogo4, name: "عميل 4" },
    { id: 5, logo: clientLogo5, name: "عميل 5" },
    { id: 6, logo: clientLogo6, name: "عميل 6" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            أهم عملائنا
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            نفخر بثقة كبرى الشركات والعلامات التجارية في خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-16 sm:h-20 md:h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
