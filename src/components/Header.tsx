import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Tanner Protects" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              SERVICES
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </Link>
            <Link to="/videos" className="text-foreground hover:text-primary transition-colors font-medium">
              VIDEOS
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="professional" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              660-624-1072
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;