import { Button } from "@/components/ui/button";
import { Shield, Star, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import professionalHeadshot from "@/assets/IMG_4433_Original.jpeg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Medicare and Life Insurance made simple — with guidance you can trust{" "}
            <span className="text-primary"></span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="relative">
              <img
                src={professionalHeadshot}
                alt="Tanner - Professional Insurance Agent"
                className="w-80 h-80 rounded-full mx-auto lg:mx-0 object-cover shadow-hero border-4 border-background"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
                <Shield className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              Based in Austin and licensed in multiple states, Cardinal Life – Nappe Agency makes it simple to compare top-rated plans, review your current policies, and choose what is best for you — without the confusion. Whether you would like to chat on the phone or meet in person, we’re here to make getting clear answers easy and stress-free.
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-accent fill-current" />
                  <Star className="h-6 w-6 text-accent fill-current" />
                  <Star className="h-6 w-6 text-accent fill-current" />
                  <Star className="h-6 w-6 text-accent fill-current" />
                  <Star className="h-6 w-6 text-accent fill-current" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">5-Star Service</p>
              </div>
              
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-muted-foreground">Licensed Professional</p>
              </div>
              
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-muted-foreground">1000+ Clients</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  navigate('/schedule');
                  setTimeout(() => {
                    document.getElementById('booking-form')?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }, 100);
                }}
              >
                Get Your Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">We ensure the quality</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medicare and Life Insurance made simple — with guidance you can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;