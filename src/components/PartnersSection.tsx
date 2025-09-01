import partners from "@/assets/Partners2.png";

const PartnersSection = () => {

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Top Rated Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We have access to 100+ trusted insurance providers to offer you a wide range of Medicare and Life Insurance 
            plans. These partnerships give us the ability to match you with the best company and plan for your specific needs.
          </p>
        </div>

        <div className="flex justify-center">
            <img src={partners} alt="Partner Logos" className="max-w-4x1 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;