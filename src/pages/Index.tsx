
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Clock, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/ui/PageTransition';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Premium Hamster Boarding
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 max-w-3xl">
                Luxury Boarding for Your Beloved Hamsters
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[700px] mb-8">
                Providing exceptional care, comfort, and love for your hamsters when you can't be there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 py-6">
                  <Link to="/reservation">Book a Stay</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6">
                  <Link to="/gallery">View Our Facilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[900px] mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                Why Choose Uber-Hamsters?
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide the highest quality care for your furry friends, with amenities that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-sm hover-scale">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Safe Environment</h3>
                  <p className="text-muted-foreground">
                    Our facilities are designed with your hamster's safety as the top priority, with secure enclosures and 24/7 monitoring.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm hover-scale">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
                  <p className="text-muted-foreground">
                    Each hamster receives individual attention and care tailored to their unique preferences and needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm hover-scale lg:col-span-1 md:col-span-2">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Convenient drop-off and pick-up times to accommodate your travel schedule, with options for extended stays.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[900px] mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                What Hamster Parents Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it—see what others have to say about their experience with Uber-Hamsters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array(5).fill(0).map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">
                      "My hamster always comes back happy and healthy. The staff goes above and beyond to ensure my little friend is comfortable and well-cared for during my travels."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Hamster Parent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                Ready to Book Your Hamster's Luxury Stay?
              </h2>
              <p className="text-lg text-white/80 max-w-[700px] mb-8">
                Secure a spot for your furry friend at San Francisco's premier hamster boarding facility.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/reservation" className="flex items-center">
                  Make a Reservation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
