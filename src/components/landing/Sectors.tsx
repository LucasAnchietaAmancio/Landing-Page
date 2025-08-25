'use client';
import Link from 'next/link'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Car, Paintbrush } from 'lucide-react';

const sectors = [
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: 'INDÚSTRIA',
    description: 'Soluções completas em tintas industriais para proteção, durabilidade e acabamento superior em qualquer superfície.',
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: 'AUTOMOTIVO',
    description: 'Linha completa para repintura automotiva, com tecnologia de ponta para um acabamento perfeito e resistente.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'VERNIZES',
    description: 'Vernizes de alta performance que garantem brilho, proteção e valorização para motores geradores e transformadores',
  },
];

const Sectors = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nossos Setores</h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
          Atendemos diversos segmentos com produtos de alta qualidade e performance.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sectors.map((sector) => (
            <Card key={sector.title} className="text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-secondary p-4 rounded-full mb-4">
                  {sector.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
              href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
              target="_blank"
            >
        <Button size="lg" className="bg-gradient-blue text-white font-bold text-lg hover:opacity-90 transition-opacity px-8 py-6">
          Solicite um orçamento
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default Sectors;
