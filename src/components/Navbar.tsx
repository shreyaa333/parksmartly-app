import { Link, useLocation } from "react-router-dom";
import { Car } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Car className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SmartPark
          </span>
        </Link>
        
        <div className="flex gap-8">
          <Link
            to="/"
            className={`transition-colors hover:text-primary ${
              isActive("/") ? "text-primary font-semibold" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary font-semibold" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary font-semibold" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
