'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nossa História</h2>
            <p className="text-lg text-muted-foreground">
              Fundada há mais de uma década, a Global Tintas e Vernizes nasceu da paixão por cores e da busca incessante por qualidade. Começamos como uma pequena distribuidora e, com muito trabalho e dedicação, nos tornamos uma referência no mercado, sendo hoje revendedores autorizados da WEG, uma das maiores fabricantes de tintas do mundo.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa missão é oferecer produtos que não apenas colorem e protegem, mas que também inspiram e transformam ambientes e produtos. Valorizamos o relacionamento com nossos clientes, oferecendo um atendimento personalizado e soluções sob medida para cada necessidade.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Foto da empresa Global Tintas e Vernizes"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="company photo"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
