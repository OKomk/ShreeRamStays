import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Shree Ram Guest House
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Experience comfort and hospitality in the heart of serenity. Your home away from home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={scrollToContact}
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
