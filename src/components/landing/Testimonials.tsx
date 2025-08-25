'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '@Iury Philipy',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXJVd0s5I_ZkqrTmZ9qyVfmVeioCU_rqhREOASNMTLB3eLhThjHAw=w72-h72-p-rp-mo-br100',
    imageHint: 'client photo',
    rating: 5,
    comment: 'Excelente atendimento e os preços são ótimos!',
  },
  {
    name: '@Lucas Anchieta',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocIDKYCIkc65PYG9SvqmgSGI-UHobS4_nrQSoAuK8RwVM6xycv4=w72-h72-p-rp-mo-br100',
    imageHint: 'client photo',
    rating: 5,
    comment: 'Ótimo preço!',
  },
  {
    name: '@Giovana Nunes',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocImR-0b0LPMvaQEvIzHEx_boTIQiaxEN87-zutbYiIGjVEIaQ=w72-h72-p-rp-mo-br100',
    imageHint: 'client photo',
    rating: 4,
    comment: 'Produtos excelentes!',
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 text-yellow-500">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">O que nossos clientes dizem</h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-12">
          A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
        </p>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-6 flex-1">
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint}/>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="my-2">
                        <Rating rating={testimonial.rating} />
                      </div>
                      <p className="text-muted-foreground text-sm flex-1">
                        "{testimonial.comment}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
