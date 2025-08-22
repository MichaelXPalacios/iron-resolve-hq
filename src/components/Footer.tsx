import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/IMG_4433_Original.jpeg";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Tanner Protects" className="h-12 w-auto filter brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted insurance professional in Texas, dedicated to protecting what matters most to you and your family.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#life-insurance" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Life Insurance</a></li>
              <li><a href="#medicare" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Medicare Plans</a></li>
              <li><a href="#final-expense" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Final Expense</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Tanner</a></li>
              <li><a href="#videolibrary" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Video Library</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">660-624-1072</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">tnappe.csb@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">San Antonio and Austin areas, TX</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Tanner Protects. All rights reserved. Cardinal Insurance.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#licenses" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">License Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;