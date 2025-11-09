import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
            About Shree Ram Guest House
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
            Established in 2015, Shree Ram Guest House offers comfortable and affordable accommodation perfectly situated near Nashik Road station. 
            </p>
            <p>
            Our convenient location and warm hospitality make us the ideal choice for travelers looking for a pleasant stay in Nashik.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
