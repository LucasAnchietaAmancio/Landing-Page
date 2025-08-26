'use client';

import Link from 'next/link'
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Droplets, Medal, Users, Truck, CreditCard, Sparkles } from 'lucide-react';

const stats = [
  { icon: <Sparkles className="h-8 w-8 text-primary" />, value: "+12", label: "Anos no Mercado" },
  { icon: <Building className="h-8 w-8 text-primary" />, value: "+500", label: "Orçamentos no Mês" },
  { icon: <Droplets className="h-8 w-8 text-primary" />, value: "+120K", label: "Litros Vendidos" },
  { icon: <Medal className="h-8 w-8 text-primary" />, value: "WEG", label: "Revendedor Autorizado" },
];

const services = [
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'PARCELAMOS NO CARTÃO',
    description: 'Flexibilidade no pagamento para facilitar seus projetos.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'ATENDIMENTO PERSONALIZADO',
    description: 'Nossa equipe está pronta para entender e atender sua necessidade.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'ENTREGA PARA TODO O BRASIL',
    description: 'Receba seus produtos com agilidade e segurança onde estiver.',
  },
];

const Statistics = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              {stat.icon}
              <p className="text-4xl font-bold text-primary mt-2">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="flex flex-col items-center gap-4 pt-6">
                <div className="bg-secondary p-4 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
        <Link
              href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
              target="_blank"
            >
          <Button id="btn-whatsapp" size="lg" className="bg-gradient-blue text-white font-bold text-lg hover:opacity-90 transition-opacity px-8 py-6">
            Fale com um especialista
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
