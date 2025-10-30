import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Map = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us easily and plan your visit
          </p>
        </div>

        <Card className="p-8 max-w-4xl mx-auto">
          {!showMap ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary mb-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Shree Ram Guest House</h3>
                  <p className="text-muted-foreground">Near Main Market, City Center</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                To display an interactive map, please enter your Mapbox public token below. 
                You can get one for free at{" "}
                <a 
                  href="https://mapbox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>

              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter your Mapbox token"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={() => setShowMap(true)}
                  disabled={!mapboxToken}
                >
                  Show Map
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Map preview will appear here</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would load here with token: {mapboxToken.substring(0, 20)}...</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Map;
