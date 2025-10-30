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
              Welcome to Shree Ram Guest House, where tradition meets comfort. Nestled in a peaceful 
              location, we offer a warm and authentic hospitality experience that feels like home.
            </p>
            <p>
              Our guest house features well-appointed rooms with modern amenities, ensuring your stay 
              is both comfortable and memorable. Whether you're traveling for business or leisure, 
              we strive to make every moment of your visit special.
            </p>
            <p>
              With years of experience in hospitality, we take pride in providing personalized service, 
              maintaining cleanliness, and creating a welcoming atmosphere for all our guests. 
              Your comfort and satisfaction are our top priorities.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
