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
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Smart Parking System
            </h2>
            <p className="text-xl text-muted-foreground">
              Check, book, and manage your parking easily.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate("/book-slot")}
              className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Book a Slot (User)
            </Button>
            <Button 
              onClick={() => navigate("/owner-dashboard")}
              variant="secondary"
              className="w-full sm:w-auto px-8 py-6 text-lg"
            >
              Owner Registration
            </Button>
            <Button 
              onClick={() => navigate("/bookings")}
              variant="secondary"
              className="w-full sm:w-auto px-8 py-6 text-lg"
            >
              View Previous Bookings
            </Button>
          </div>

          {/* About Section */}
          <section className="mt-16 p-8 rounded-lg bg-card/50 border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-primary">About Us</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smart Parking System is a web-based application built to make parking easier, 
              faster, and smarter. Users can find nearby parking areas, view available slots, 
              and book them securely. Owners can manage parking slots and payments effortlessly.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
