const PartnersSection = () => {
  const partners = [
    "Cigna",
    "United Healthcare", 
    "Humana",
    "Aetna",
    "Wellcare",
    "American-Amicable",
    "Mutual of Omaha",
    "Transamerica",
    "Life Insurance & Annuities",
    "Gerber Life Insurance"
  ];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg shadow-sm border p-6 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-semibold text-foreground text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;