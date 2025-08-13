import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  GraduationCap, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Target,
  Heart,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const About = () => {
  const achievements = [
    { icon: Users, number: "1000+", label: "Families Protected" },
    { icon: Shield, number: "500+", label: "Life Insurance Policies" },
    { icon: Heart, number: "300+", label: "Medicare Enrollments" },
    { icon: Award, number: "8+", label: "Years Experience" }
  ];

  const qualifications = [
    "Licensed Insurance Professional",
    "Medicare Specialist Certification",
    "ACA Marketplace Expert",
    "Notary Public Commission",
    "Business Administration Degree",
    "Continuing Education Certified"
  ];

  const values = [
    {
      icon: Target,
      title: "Precision & Expertise",
      description: "Every insurance decision requires careful analysis. I bring analytical precision to help you choose the right coverage."
    },
    {
      icon: Shield,
      title: "Protection First",
      description: "Your family's financial security is my primary concern. I design insurance strategies that truly protect what matters most."
    },
    {
      icon: TrendingUp,
      title: "Long-term Planning",
      description: "Insurance isn't just about today—it's about building a secure future. I help you plan for decades ahead."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Your <span className="text-primary">Insurance Expert</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talk with a professional who understands the importance of protecting your family's future
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={professionalHeadshot}
                  alt="Marcus - Professional Insurance Agent"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-hero object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <Shield className="h-10 w-10" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Marcus Rodriguez
                </h2>
                <h3 className="text-xl text-primary font-semibold mb-4">
                  MARCUS PROTECTS - Leading Insurance Advisor
                </h3>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Hello! I'm Marcus Rodriguez, a dedicated and experienced insurance professional at Marcus Protects. 
                  With over 8 years in the insurance industry, I specialize in Life Insurance, Medicare Plans, 
                  ACA Marketplace coverage, and Notary services, providing tailored solutions to meet your unique needs.
                </p>
                <p className="mb-4">
                  My journey in insurance is driven by my commitment to protecting families and educating clients 
                  about the critical importance of proper coverage. This dedication was strengthened through my 
                  background in business and finance, where I learned the value of strategic planning and risk management.
                </p>
                <p>
                  I take pride in having protected over 1,000 families with comprehensive insurance strategies, 
                  helped 500+ individuals secure life insurance, and guided 300+ clients through Medicare enrollment. 
                  My approach combines professional expertise with personal care, ensuring you receive both superior 
                  coverage and clear understanding of your protection plan.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {qualifications.map((qual, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {qual}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect my commitment to protecting families in Rio Grande Valley
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center p-6 shadow-card hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              My Professional <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and insurance recommendation I make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 text-center shadow-card hover:shadow-lg transition-all group">
                  <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Marcus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Marcus Protects?
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Experience the difference of working with a true insurance professional
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Service</h4>
                    <p className="text-primary-foreground/80">Every client receives individual attention and customized insurance solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Local Expertise</h4>
                    <p className="text-primary-foreground/80">Deep understanding of Rio Grande Valley community needs and regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Coverage</h4>
                    <p className="text-primary-foreground/80">From life insurance to Medicare, all your protection needs under one roof.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Support</h4>
                    <p className="text-primary-foreground/80">Continuous service and support throughout your policy lifecycle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Transparent Process</h4>
                    <p className="text-primary-foreground/80">Clear explanations and honest guidance through every insurance decision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Competitive Rates</h4>
                    <p className="text-primary-foreground/80">Access to multiple carriers ensures you get the best coverage at the best price.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your insurance needs and create a protection plan that gives you peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <Phone className="h-5 w-5 mr-2" />
              Call 956-758-8700
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Rio Grande Valley, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;