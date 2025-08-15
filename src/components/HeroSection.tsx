import { Button } from "@/components/ui/button";
import { Shield, Star, Award, Users } from "lucide-react";
import professionalHeadshot from "@/assets/BD5B7637-8FBA-45F7-9514-BD1A9F724345.jpeg";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tanner Protects Brings Quality Insurance Coverage to Your Doorstep in{" "}
            <span className="text-primary">Austin, TX</span>
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
              Your trusted source for personalized insurance solutions. With expertise and commitment to exceptional service, 
              I strive to provide you with the peace of mind and coverage you deserve.
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
              <Button variant="hero" size="lg" className="text-lg px-8">
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
            Professional insurance solutions tailored to protect what matters most to you and your family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;