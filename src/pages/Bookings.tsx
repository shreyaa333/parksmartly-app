import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, DollarSign } from "lucide-react";

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      location: "Downtown Parking",
      address: "123 Main St",
      date: "2025-01-15",
      time: "10:00 AM - 2:00 PM",
      duration: "4 hours",
      cost: 20,
      status: "Completed"
    },
    {
      id: 2,
      location: "City Center Garage",
      address: "456 Oak Ave",
      date: "2025-01-20",
      time: "9:00 AM - 5:00 PM",
      duration: "8 hours",
      cost: 64,
      status: "Completed"
    },
    {
      id: 3,
      location: "Mall Parking",
      address: "789 Shopping Blvd",
      date: "2025-01-25",
      time: "2:00 PM - 6:00 PM",
      duration: "4 hours",
      cost: 16,
      status: "Upcoming"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Your Bookings</h1>
            <p className="text-xl text-muted-foreground">
              View your parking history and upcoming reservations
            </p>
          </div>

          <div className="space-y-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="border-border bg-card/80">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {booking.location}
                        <Badge 
                          variant={booking.status === "Completed" ? "secondary" : "default"}
                          className={booking.status === "Upcoming" ? "bg-primary/10 text-primary" : ""}
                        >
                          {booking.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4" />
                        {booking.address}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${booking.cost}</div>
                      <div className="text-sm text-muted-foreground">{booking.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{booking.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {bookings.length === 0 && (
            <Card className="border-border bg-card/80">
              <CardContent className="py-16 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
                <p className="text-muted-foreground">
                  Your parking history will appear here once you make your first booking.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookings;
