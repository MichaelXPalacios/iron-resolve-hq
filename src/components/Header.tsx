import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Marcus Protects" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <div className="relative group">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                SERVICES
              </a>
            </div>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              BLOG
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="professional" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              956-758-8700
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