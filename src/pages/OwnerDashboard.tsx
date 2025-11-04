import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, MapPin, Car } from "lucide-react";
import { toast } from "sonner";

const OwnerDashboard = () => {
  const handleAddSpot = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Parking spot added successfully!");
  };

  const mySpots = [
    { id: 1, name: "Spot A-12", location: "Downtown", status: "Occupied", revenue: 45 },
    { id: 2, name: "Spot B-05", location: "City Center", status: "Available", revenue: 120 },
    { id: 3, name: "Spot C-18", location: "Mall", status: "Available", revenue: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Owner Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Manage your parking spaces and track earnings
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Total Spots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mySpots.length}</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  ${mySpots.reduce((acc, spot) => acc + spot.revenue, 0)}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Available Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {mySpots.filter(spot => spot.status === "Available").length}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-card/80">
            <CardHeader>
              <CardTitle>Add New Parking Spot</CardTitle>
              <CardDescription>Register a new parking space in your property</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddSpot} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="spotName">Spot Name</Label>
                    <Input id="spotName" placeholder="e.g., A-15" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spotLocation">Location</Label>
                    <Input id="spotLocation" placeholder="e.g., Downtown" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spotPrice">Price per Hour ($)</Label>
                    <Input id="spotPrice" type="number" placeholder="5" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spotAddress">Address</Label>
                    <Input id="spotAddress" placeholder="123 Main St" required />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                  Add Parking Spot
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/80">
            <CardHeader>
              <CardTitle>Your Parking Spots</CardTitle>
              <CardDescription>Manage and monitor your registered spots</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mySpots.map((spot) => (
                  <div
                    key={spot.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-semibold">{spot.name}</h4>
                      <p className="text-sm text-muted-foreground">{spot.location}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Revenue</div>
                        <div className="font-semibold">${spot.revenue}</div>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          spot.status === "Available"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {spot.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OwnerDashboard;
