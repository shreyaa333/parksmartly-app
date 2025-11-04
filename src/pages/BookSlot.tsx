import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

const BookSlot = () => {
  const [location, setLocation] = useState("");
  
  const parkingSpots = [
    { id: 1, name: "Downtown Parking", address: "123 Main St", available: 15, price: 5 },
    { id: 2, name: "City Center Garage", address: "456 Oak Ave", available: 8, price: 8 },
    { id: 3, name: "Mall Parking", address: "789 Shopping Blvd", available: 25, price: 4 },
  ];

  const handleBook = (spotName: string) => {
    toast.success(`Successfully booked parking at ${spotName}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Book a Parking Slot</h1>
            <p className="text-xl text-muted-foreground">
              Find and reserve your perfect parking spot
            </p>
          </div>

          <Card className="border-border bg-card/80">
            <CardHeader>
              <CardTitle>Search Location</CardTitle>
              <CardDescription>Enter your destination to find nearby parking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="location" className="sr-only">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter address or landmark..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button className="bg-gradient-to-r from-primary to-accent">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Available Parking Spots</h2>
            <div className="grid gap-6">
              {parkingSpots.map((spot) => (
                <Card key={spot.id} className="border-border bg-card/80 transition-all hover:border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-semibold">{spot.name}</h3>
                          <p className="text-muted-foreground flex items-center gap-2 mt-2">
                            <MapPin className="h-4 w-4" />
                            {spot.address}
                          </p>
                        </div>
                        <div className="flex gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">Open 24/7</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">${spot.price}/hour</span>
                          </div>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            {spot.available} spots available
                          </span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleBook(spot.name)}
                        className="bg-gradient-to-r from-primary to-accent"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookSlot;
