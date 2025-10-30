import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import About from "@/components/About";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
