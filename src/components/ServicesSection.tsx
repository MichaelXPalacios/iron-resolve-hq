import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, DollarSign, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description: "From funeral costs to medical bills, Life Insurance helps cover life’s final expenses. We’re here to guide you toward a plan that provides security and peace of mind for your family",
    features: ["Term Life Insurance", "Whole Life Insurance", "Universal Life", "Family Protection Plans"]
  },
  {
    icon: DollarSign,
    title: "Policy Review",
    description: "A policy review is a simple, no-pressure check of your current coverage. We’ll make sure it still fits your needs and budget, and guide you on any gaps or opportunities to improve your plan.",
    features: ["Funeral Coverage", "Medical Expenses", "Burial Costs", "Debt Protection"]
  },
  {
    icon: Shield,
    title: "Medicare Plans",
    description: "Whether it’s your first time with Medicare or you are exploring new options, we will help you understand your choices and find coverage that works for your health and your wallet.",
    features: ["Medicare Advantage", "Medicare Supplements", "Part D Prescription", "Annual Open Enrollment"]
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Discover the Right Insurance for Your Needs with{" "}
            <span className="text-primary">Tanner Protects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive protection solutions designed with your family's security and financial well-being in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full shadow-card hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="cta" 
                    className="w-full group-hover:scale-105 transition-transform"
                    onClick={() => navigate(`/schedule?service=${encodeURIComponent(service.title)}`)}
                  >
                    Learn More About {service.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12"
            onClick={() => navigate('/schedule')}
          >
            Get Started with a Free Consultation
          </Button>
          <p className="text-muted-foreground mt-4">
            Schedule your personalized insurance review today
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;