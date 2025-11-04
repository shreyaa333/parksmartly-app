import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, DollarSign } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast & Easy",
      description: "Book parking spots in seconds with our intuitive interface"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Your transactions are protected with advanced encryption"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant notifications about parking availability"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Compare rates and find the most affordable parking options"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">About SmartPark</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing urban parking with smart technology
            </p>
          </div>

          <Card className="border-border bg-card/80">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smart Parking System is a comprehensive web-based application designed to transform 
                the way people find, book, and manage parking spaces. We leverage modern technology 
                to eliminate the frustration of searching for parking, making urban mobility more 
                efficient and stress-free.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For users, our platform provides real-time parking availability, seamless booking 
                experiences, and secure payment processing. For parking space owners, we offer 
                powerful management tools to optimize occupancy rates and maximize revenue.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card/80 transition-all hover:border-primary">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
