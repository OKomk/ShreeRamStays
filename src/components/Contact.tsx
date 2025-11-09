import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9420781921",
      action: "tel:+919420781921",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@shreeramhotels.in",
      action: "mailto:info@shreeramhotels.in",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Rajendra Apartment, Scheme No 1, Shastri Path, Nashik Road, Nashik - 422101\n",
      action: null,
    },
    {
      icon: Clock,
      title: "Check-in Time",
      details: "2:00 PM - 11:00 PM",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help make your stay memorable. Contact us for reservations or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
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
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {info.title}
                    </h3>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.details}</p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            Book Your Stay Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
