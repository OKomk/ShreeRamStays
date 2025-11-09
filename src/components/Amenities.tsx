import { Wifi, House, Car, Shield, Wind, Train } from "lucide-react";
import { Card } from "@/components/ui/card";

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the property",
    },
    {
      icon: House,
      title: "Vicinity to Muktidham",
      description: "Minutes away from Muktidham Mandir",
    },
    {
      icon: Car,
      title: "Parking",
      description: "Safe and secure parking facility for guests",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security for your peace of mind",
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Climate-controlled rooms for your comfort",
    },
    {
      icon: Train,
      title: "Near Nashik Road Station",
      description: "Minutes away from Nashik Road station",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Amenities & Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {amenity.title}
                    </h3>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
