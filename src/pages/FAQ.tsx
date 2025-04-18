
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';

const FAQ = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Uber-Hamsters?",
          answer: "Uber-Hamsters is a luxury boarding facility exclusively for hamsters. We provide a safe, comfortable, and enriching environment for your furry friend while you're away. Our staff is trained in hamster care and handles each guest with personalized attention."
        },
        {
          question: "Where are you located?",
          answer: "Our facilities are located at 123 Hamster Lane, Rodent City, CA 98765. We are conveniently situated near major highways and offer easy access for drop-offs and pick-ups."
        },
        {
          question: "What are your hours of operation?",
          answer: "Our facility is open for drop-offs and pick-ups Monday through Friday from 8 AM to 7 PM, and on weekends from 9 AM to 5 PM. After-hours arrangements can be made with advance notice for an additional fee."
        },
        {
          question: "Do you accept hamsters of all breeds and ages?",
          answer: "Yes, we welcome all hamster breeds and ages. Our accommodations are designed to suit the needs of different hamster types, from dwarf hamsters to Syrian hamsters. We do ask that you inform us of your hamster's age and any special considerations during the booking process."
        },
      ]
    },
    {
      category: "Booking & Stays",
      questions: [
        {
          question: "How do I make a reservation?",
          answer: "Reservations can be made through our website using the online booking form, by phone at (555) 123-4567, or via email at bookings@uberhamsters.com. We recommend booking at least one week in advance, especially during peak seasons."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We offer a full refund for cancellations made 48 hours or more before the scheduled check-in time. Cancellations between 24-48 hours receive a 50% refund. For cancellations less than 24 hours in advance, no refund is provided. However, we understand emergencies happen and may make exceptions on a case-by-case basis."
        },
        {
          question: "Can I book for multiple hamsters?",
          answer: "Absolutely! We offer accommodations for multiple hamsters, with options to house them together or separately based on your preference and their compatibility. We offer a 10% discount on the daily rate for each additional hamster from the same household."
        },
        {
          question: "What should I bring for my hamster's stay?",
          answer: "We provide all essential items for your hamster's stay, including bedding, food bowls, water bottles, and exercise equipment. However, we recommend bringing your hamster's regular food to maintain their diet, any medications they may need, and a favorite toy or item that smells like home to help them adjust."
        },
      ]
    },
    {
      category: "Care & Facilities",
      questions: [
        {
          question: "What type of accommodations do you provide?",
          answer: "We offer three tiers of accommodations: Standard, Premium, and Luxury. All accommodations include appropriate bedding, water bottles, food dishes, and exercise options. Higher tiers feature larger spaces, premium bedding, more frequent check-ins, and additional amenities tailored to pamper your pet."
        },
        {
          question: "How often will my hamster be checked on?",
          answer: "The frequency of wellness checks depends on the package you select. Standard packages include two daily checks, Premium includes four checks, and Luxury includes six checks throughout the day and evening. During these checks, our staff ensures your hamster has fresh water, food, and is displaying normal behavior."
        },
        {
          question: "What do you feed the hamsters?",
          answer: "We provide high-quality hamster food that meets all nutritional requirements. However, we strongly encourage bringing your hamster's regular food to maintain consistency in their diet and prevent digestive issues. If your hamster has special dietary needs, please let us know when booking."
        },
        {
          question: "What happens if my hamster needs medical attention?",
          answer: "In case of a health concern, we first contact you using the emergency contact information provided. We have partnerships with local exotic pet veterinarians who can provide care if needed. For non-emergency situations, we consult with you before proceeding with any veterinary visits. Any medical costs incurred will be the owner's responsibility."
        },
      ]
    },
    {
      category: "First-Time Clients",
      questions: [
        {
          question: "Is my hamster going to be stressed in a new environment?",
          answer: "It's normal for hamsters to need some adjustment time to a new environment. Our facilities are designed to minimize stress with appropriate hiding places, familiar bedding options, and a quiet atmosphere. We take special care with first-time guests to help them acclimate smoothly."
        },
        {
          question: "Can I tour your facility before making a reservation?",
          answer: "Absolutely! We encourage potential clients to schedule a tour of our facilities. This gives you peace of mind and allows us to show you the high standards of care we maintain. Tours are available during regular business hours and can be scheduled through our website or by phone."
        },
        {
          question: "Will my hamster be housed with other hamsters?",
          answer: "No, unless specifically requested for hamsters from the same household that are already accustomed to living together. We house each hamster separately to prevent stress and potential conflicts, ensuring a peaceful stay for every guest."
        },
        {
          question: "Do you provide updates during my hamster's stay?",
          answer: "Yes, depending on the package you select. Our Premium package includes daily photo updates, while our Luxury package includes video updates. For all packages, you're welcome to call during business hours for a verbal update on your hamster's wellbeing."
        },
      ]
    },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Find answers to common questions about our hamster boarding services. If you don't see what you're looking for, feel free to contact us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h2 className="text-xl font-bold mb-4 text-primary">
                  {category.category}
                </h2>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full space-y-4"
                >
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`} 
                      className="earth-card"
                    >
                      <AccordionTrigger className="text-left font-medium text-primary hover:text-primary/80">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're here to help! Contact our friendly team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 earth-gradient hover:opacity-90 transition-opacity"
              >
                <Link to="mailto:info@uberhamsters.com">Email Us</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="tel:+15551234567">Call (555) 123-4567</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQ;

