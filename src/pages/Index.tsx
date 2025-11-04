import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building2, History } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import parkingHero from "@/assets/parking-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <div 
            className="h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${parkingHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="container relative mx-auto flex h-full items-center px-6">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Smart Parking System
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Check, book, and manage your parking easily. Find available spots in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="container mx-auto -mt-16 px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group cursor-pointer border-border bg-card/80 backdrop-blur transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle>Book a Slot</CardTitle>
                <CardDescription>Find and reserve parking spots near you</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/book-slot")} 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-border bg-card/80 backdrop-blur transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle>Owner Dashboard</CardTitle>
                <CardDescription>Manage your parking spots and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/owner-dashboard")} 
                  variant="secondary"
                  className="w-full"
                >
                  Manage Spots
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-border bg-card/80 backdrop-blur transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <History className="h-6 w-6" />
                </div>
                <CardTitle>View Bookings</CardTitle>
                <CardDescription>Check your booking history and receipts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/bookings")} 
                  variant="secondary"
                  className="w-full"
                >
                  View History
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="border-t border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold">About SmartPark</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart Parking System is a web-based application built to make parking easier, 
                faster, and smarter. Users can find nearby parking areas, view available slots, 
                and book them securely. Owners can manage parking slots and payments effortlessly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
