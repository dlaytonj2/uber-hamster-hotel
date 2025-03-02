
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import PageTransition from '@/components/ui/PageTransition';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Placeholder image data - you would replace these with actual images
  const images = {
    accommodations: [
      { id: 1, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Luxury hamster accommodation" },
      { id: 2, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Deluxe hamster suite" },
      { id: 3, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Premium hamster housing" },
      { id: 4, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Hamster play area" },
      { id: 5, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Hamster feeding area" },
      { id: 6, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", alt: "Hamster relaxation zone" },
    ],
    activities: [
      { id: 7, src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", alt: "Hamster on wheel" },
      { id: 8, src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", alt: "Hamsters playing" },
      { id: 9, src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", alt: "Hamster tube maze" },
      { id: 10, src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", alt: "Hamster agility course" },
    ],
    happyGuests: [
      { id: 11, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Happy hamster client" },
      { id: 12, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Hamster being groomed" },
      { id: 13, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Hamster eating treats" },
      { id: 14, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Hamster family" },
      { id: 15, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Hamster getting attention" },
    ],
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Take a peek at our luxury facilities and see our happy hamster guests enjoying their stay.
            </p>
          </div>
          
          <Tabs defaultValue="accommodations" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="happyGuests">Happy Guests</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(images).map(([category, categoryImages]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryImages.map((image) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div 
                          className="overflow-hidden rounded-lg border cursor-pointer transition-all hover:opacity-90 hover:shadow-md" 
                          onClick={() => openLightbox(image.src)}
                        >
                          <AspectRatio ratio={4/3}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="object-cover w-full h-full"
                              loading="lazy"
                            />
                          </AspectRatio>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              We update our gallery regularly with new photos of our facilities and guests.
              <br />Check back often to see more of what makes Uber-Hamsters special!
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;
