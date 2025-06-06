
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Standard",
      price: 30,
      description: "Essential care for your hamster in a comfortable environment.",
      features: [
        "Cozy standard accommodation",
        "Two daily wellness checks",
        "Regular feeding schedule",
        "Basic daily exercise",
        "Water bottle maintenance",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: 45,
      description: "Enhanced comfort and additional activities for an enriched stay.",
      features: [
        "Spacious deluxe accommodation",
        "Four daily wellness checks",
        "Premium food options",
        "Extended playtime sessions",
        "Photo updates sent to owner",
        "Temperature-controlled habitat",
        "Premium bedding materials",
      ],
      highlighted: true,
    },
    {
      name: "Luxury",
      price: 75,
      description: "The ultimate luxury experience with personalized attention.",
      features: [
        "Extra-large luxury suite",
        "Six daily wellness checks",
        "Gourmet meal preparation",
        "Private play sessions",
        "Daily grooming",
        "Video updates sent to owner",
        "Special treat time",
        "One-on-one attention time",
        "Priority check-in/check-out",
      ],
      highlighted: false,
    },
  ];

  const addOns = [
    {
      name: "Health Check",
      price: 15,
      description: "Basic health assessment by our trained staff",
    },
    {
      name: "Grooming Session",
      price: 20,
      description: "Full grooming including nail trimming and coat care",
    },
    {
      name: "Special Diet",
      price: 10,
      description: "Custom food preparation for hamsters with special dietary needs",
    },
    {
      name: "Extended Play",
      price: 12,
      description: "Additional supervised playtime in our activity area",
    },
    {
      name: "Photo Package",
      price: 25,
      description: "Daily professional photos of your hamster during their stay",
    },
    {
      name: "Late Checkout",
      price: 15,
      description: "Extended stay until 6 PM on departure day",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Pricing & Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Choose the perfect accommodation package for your hamster's stay with us.
            </p>
          </div>
          
          {/* Daily Rate Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden transition-all ${
                  plan.highlighted 
                    ? "border-2 border-primary shadow-lg scale-105 relative" 
                    : "border border-border shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                    <span className="ml-2 text-muted-foreground">/night</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {plan.description}
                  </p>
                  
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className={plan.highlighted ? "font-medium" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      asChild
                      className={`w-full rounded-full ${plan.highlighted ? "" : "bg-primary/90 hover:bg-primary"}`}
                    >
                      <Link to="/reservation">Book {plan.name}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add-ons Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                Optional Add-ons
              </h2>
              <p className="text-muted-foreground">
                Enhance your hamster's stay with these premium services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="border border-border rounded-lg p-6 transition-all hover:shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{addon.name}</h3>
                    <div className="text-lg font-medium">${addon.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-20 bg-secondary/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Multiple Hamster Discount</h3>
                <p className="text-muted-foreground text-sm">
                  Receive a 10% discount on the daily rate for each additional hamster from the same household.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Extended Stay Pricing</h3>
                <p className="text-muted-foreground text-sm">
                  Stays of 7+ nights receive a 15% discount on the total booking.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Holiday Periods</h3>
                <p className="text-muted-foreground text-sm">
                  A 20% surcharge applies during major holidays and peak seasons.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Cancellation Policy</h3>
                <p className="text-muted-foreground text-sm">
                  Full refund if cancelled 48+ hours before check-in, 50% refund if cancelled 24-48 hours before.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Hamster's Stay?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our caring staff is ready to provide your hamster with the attention and comfort they deserve.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/reservation">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Pricing;
