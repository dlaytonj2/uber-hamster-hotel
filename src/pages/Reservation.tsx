
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import PageTransition from '@/components/ui/PageTransition';

type Hamster = {
  id: number;
  name: string;
  age: string;
  specialNeeds: string;
};

const Reservation = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [hamsters, setHamsters] = useState<Hamster[]>([{ id: 1, name: '', age: '', specialNeeds: '' }]);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const addHamster = () => {
    setHamsters([...hamsters, { 
      id: hamsters.length + 1, 
      name: '', 
      age: '', 
      specialNeeds: '' 
    }]);
  };

  const removeHamster = (id: number) => {
    if (hamsters.length > 1) {
      setHamsters(hamsters.filter(hamster => hamster.id !== id));
    }
  };

  const updateHamster = (id: number, field: keyof Hamster, value: string) => {
    setHamsters(hamsters.map(hamster => 
      hamster.id === id ? { ...hamster, [field]: value } : hamster
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation logic would go here
    if (!startDate || !endDate) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }
    
    if (hamsters.some(hamster => !hamster.name)) {
      toast({
        title: "Error",
        description: "Please provide names for all your hamsters.",
        variant: "destructive",
      });
      return;
    }
    
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      toast({
        title: "Error",
        description: "Please fill in all contact information fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    // Form would typically be sent to a server here
    console.log('Reservation submitted:', { startDate, endDate, hamsters, contactInfo });
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Book Your Hamster's Stay
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Complete the form below to reserve luxury accommodations for your furry friends.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Date selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-in"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !startDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="check-out">Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-out"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !endDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? format(endDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            initialFocus
                            disabled={(date) => date < (startDate || new Date())}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  {/* Hamster information */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Hamster Information</h3>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={addHamster}
                      >
                        Add Another Hamster
                      </Button>
                    </div>
                    
                    {hamsters.map((hamster, index) => (
                      <div key={hamster.id} className="space-y-4 p-4 border border-gray-200 rounded-md">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Hamster #{index + 1}</h4>
                          {hamsters.length > 1 && (
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeHamster(hamster.id)}
                              className="h-8 text-destructive hover:text-destructive/90"
                            >
                              Remove
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`hamster-name-${hamster.id}`}>Name</Label>
                            <Input
                              id={`hamster-name-${hamster.id}`}
                              value={hamster.name}
                              onChange={(e) => updateHamster(hamster.id, 'name', e.target.value)}
                              placeholder="Hamster name"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`hamster-age-${hamster.id}`}>Age</Label>
                            <Input
                              id={`hamster-age-${hamster.id}`}
                              value={hamster.age}
                              onChange={(e) => updateHamster(hamster.id, 'age', e.target.value)}
                              placeholder="Age (e.g., 1 year)"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`hamster-needs-${hamster.id}`}>Special Needs or Instructions</Label>
                          <Input
                            id={`hamster-needs-${hamster.id}`}
                            value={hamster.specialNeeds}
                            onChange={(e) => updateHamster(hamster.id, 'specialNeeds', e.target.value)}
                            placeholder="Special diet, medications, etc."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Your Name</Label>
                        <Input
                          id="contact-name"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                          placeholder="Full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        placeholder="(416) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full rounded-full" size="lg">
                      Submit Reservation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-start">
              <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <p className="text-sm text-blue-700">
                After submitting your reservation request, we'll review availability and contact you within 24 hours to confirm your booking and discuss any additional details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Reservation;
