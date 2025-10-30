import room1 from "@/assets/room-1.jpg";
import outdoorArea from "@/assets/outdoor-area.jpg";
import diningArea from "@/assets/dining-area.jpg";

const Gallery = () => {
  const images = [
    { src: room1, alt: "Comfortable Guest Room" },
    { src: outdoorArea, alt: "Peaceful Outdoor Area" },
    { src: diningArea, alt: "Welcoming Dining Area" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into the comfort and warmth that awaits you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
