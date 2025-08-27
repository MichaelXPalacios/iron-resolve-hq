import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar,
  Shield,
  CheckCircle,
  Send
} from "lucide-react";

const Contact = () => {
  useEffect(() => {
    if (window.location.hash === '#message') {
      const element = document.getElementById('message');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Today",
      description: "Speak directly with Tanner for immediate assistance",
      value: "660-624-1072",
      action: "tel:660-624-1072",
      primary: true
    },
    {
      icon: Mail,
      title: "Email Me",
      description: "Send your questions and I'll respond promptly",
      value: "tnappe.csb@gmail.com",
      action: "mailto:tnappe.csb@gmail.com",
      primary: false
    },
    {
      icon: MessageCircle,
      title: "Text Message",
      description: "Quick questions? Send me a text message",
      value: "956-758-8700",
      action: "sms:956-758-8700",
      primary: false
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a convenient time for detailed consultation",
      value: "Schedule Now",
      action: "#schedule",
      primary: false
    }
  ];

  const consultationBenefits = [
    "Free comprehensive insurance review",
    "Personalized coverage recommendations",
    "Multiple carrier comparison",
    "No obligation to purchase",
    "Clear explanation of all options",
    "Ongoing support after enrollment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to protect what matters most? I'm here to help you find the perfect insurance solution for your family's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className={`p-6 text-center shadow-card hover:shadow-lg transition-all group cursor-pointer ${method.primary ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <Button 
                        variant={method.primary ? "default" : "outline"} 
                        size="sm"
                        asChild
                      >
                        <a href={method.action}>
                          {method.value}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="message" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Send Me a <span className="text-primary">Message</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell me about your insurance needs and I'll get back to you within 24 hours
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <Card className="p-8 shadow-card">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(956) 123-4567" />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Insurance Interest</Label>
                        <select id="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select a service</option>
                          <option value="life-insurance">Life Insurance</option>
                          <option value="final-expense">Final Expense</option>
                          <option value="medicare">Medicare Plans</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell me about your insurance needs, family situation, or any questions you have..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 shadow-card">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Free Consultation Includes
                    </h3>
                    <ul className="space-y-3">
                      {consultationBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 shadow-card">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Office Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-muted-foreground">Rio Grande Valley, TX</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Business Hours</p>
                          <p className="text-muted-foreground">Monday - Friday: 8AM - 6PM</p>
                          <p className="text-muted-foreground">Weekend: By Appointment</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Emergency Contact</p>
                          <p className="text-muted-foreground">Available for urgent insurance matters</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Don't Wait to Protect Your Family
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Every day without proper insurance coverage is a risk. Let's get you protected today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <a href="tel:956-758-8700">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 956-758-8700
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5 mr-2" />
                Text for Quick Response
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;