'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-[#f4f7f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nossa História</h2>
            <p className="text-lg text-muted-foreground">
            Pertencente ao grupo Gold e com mais de uma década de atuação, a Global Tintas e Vernizes nasceu da paixão pelas cores e da busca incessante pela excelência e qualidade. Iniciamos como uma pequena distribuidora, e, com muito empenho e dedicação, conquistamos nosso espaço no mercado, tornando-nos referência no setor. Hoje, somos revendedores autorizados de marcas renomadas como WEG, Farben e Flexcolor, além de estarmos conectados às maiores fabricantes de tintas do mundo.
            </p>
            <p className="text-lg text-muted-foreground">
            Nossa missão vai além de fornecer produtos que colorem e protejam; buscamos inspirar e transformar ambientes e superfícies, oferecendo soluções inovadoras e de alto desempenho. Priorizamos o relacionamento com nossos clientes, garantindo atendimento personalizado, consultoria especializada e soluções sob medida para cada necessidade, valorizando a confiança e a satisfação em cada projeto.
            </p>
            <p className="text-lg text-muted-foreground">
            Combinando tradição, tecnologia e sustentabilidade, a Global Tintas e Vernizes se dedica a proporcionar experiências únicas através da cor, contribuindo para o sucesso de nossos parceiros e clientes em seus projetos residenciais, comerciais e industriais. Nosso compromisso é estar sempre à frente, oferecendo produtos de qualidade, serviços confiáveis e inovação constante, refletindo nossa paixão pelo que fazemos.
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <Card className="relative w-full max-w-lg h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105">
              <Image
                src="/Empresa.jpeg"
                alt="Foto da empresa Global Tintas e Vernizes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
