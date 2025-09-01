import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const scheduleFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type ScheduleFormData = z.infer<typeof scheduleFormSchema>;

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const services = [
  "Life Insurance", "Final Expense", "Medicare Plans", "Policy Review"
];

const Schedule = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const serviceParam = searchParams.get('service');
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      service: serviceParam || "",
    },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedService = watch("service");

  const createGoogleCalendarEvent = async (data: ScheduleFormData) => {
    const startDateTime = new Date(`${data.date}T${convertTo24Hour(data.time)}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour later
    
    const event = {
      summary: `Insurance Consultation - ${data.service}`,
      description: `Insurance consultation with Tanner Nappe\nThis is the Phone Number I'll be calling with - Phone: 660-624-1072\nEmail: tnappe.csb@gmail.com\nService: ${data.service}${data.message ? `\nNotes: ${data.message}` : ''}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Chicago', // Austin timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Chicago',
      },
      attendees: [
        { email: data.email },
        { email: "tnappe.csb@gmail.com" },
        { email: "tanner.nappe25@gmail.com"}
      ],
    };

    // Create Google Calendar URL for manual addition
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=Austin,%20TX`;
    
    return googleCalendarUrl;
  };

  const convertTo24Hour = (time12h: string) => {
    const [time, modifier] = time12h.split(" ");
    const [hours, minutes] = time.split(":");
    let hoursNum = parseInt(hours, 10);

    if (modifier === "AM" && hoursNum === 12) {
      // Midnight case
      hoursNum = 0;
    } else if (modifier === "PM" && hoursNum < 12) {
      // Afternoon case
      hoursNum += 12;
    }
    return `${hoursNum.toString().padStart(2, "0")}:${minutes}:00`;
  };

  const onSubmit = async (data: ScheduleFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create Google Calendar URL
      const calendarUrl = await createGoogleCalendarEvent(data);
      
      // Open Google Calendar in new tab
      window.open(calendarUrl, '_blank');
      
      toast({
        title: "Appointment Scheduled!",
        description: "Your consultation has been scheduled. A Google Calendar event has been created. I'll contact you soon to confirm the details.",
      });
      
      // Navigate to a success page or back to home
      navigate('/', { replace: true });
      
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast({
        title: "Error",
        description: "There was an issue scheduling your appointment. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your insurance needs and find the perfect protection for you and your family.
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-primary" />
                Book Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(956) 123-4567"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Service Interest</Label>
                    <Select
                      value={selectedService}
                      onValueChange={(value) => setValue("service", value)}
                    >
                      <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      {...register("date")}
                      className={errors.date ? "border-destructive" : ""}
                    />
                    {errors.date && (
                      <p className="text-sm text-destructive">{errors.date.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Preferred Time
                    </Label>
                    <Select
                      value={selectedTime}
                      onValueChange={(value) => setValue("time", value)}
                    >
                      <SelectTrigger className={errors.time ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-sm text-destructive">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell me more about your insurance needs or any specific questions you have..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule My Consultation"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>What to expect:</strong> This consultation is completely free and no-obligation. 
                  We'll discuss your current coverage, identify any gaps, and explore options that fit your budget and needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;