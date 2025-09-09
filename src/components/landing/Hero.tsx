'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const benefits = [
    'Rendimento: Galão 3,6L cobre até 50m² por demão.',
    'Alto Rendimento: Qualidade WEG que garante maior cobertura por lata, otimizando seu investimento.',
  ];

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[75vh] min-h-[400px] w-full flex items-center"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/Slide.webp"
          alt="Slide"
          fill // Faz a imagem ocupar toda a div pai
          className="object-cover object-[25%_center] absolute sm:object-center md:object-center"
          quality={75}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-[280px] sm:max-w-[450px] md:max-w-[650px]">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-medium tracking-tight mb-4 text-[#5A5A5A]">
          <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#00569D] to-[#0AC062]">
            Zarcão WEG: 
          </strong>{' '}
            A Proteção{' '}
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#00569D] to-[#0AC062]">
            Antiferrugem{' '}
            </strong>
            que seu{' '}
            Projeto Precisa
            .
          </h1>

          <p className="text-xs sm:text-base md:text-xl text-[#5A5A5A] mb-6 md:mb-8 ">
            A solução ideal da Global Tintas para quem busca alta performance em primers anticorrosivos.
            O Zarcão WEG oferece a máxima proteção para suas estruturas metálicas com a qualidade que
            seu projeto merece.
          </p>

          <ul className="space-y-2 text-xs sm:text-base text-[#5A5A5A] mb-6 ">
          {benefits.map((benefit, index) => (
              <li key={index}  className="flex items-start max-w-[241px] sm:max-w-none">
                 <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 m-[5px]"/>
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-base md:text-xl text-[#5A5A5A] mb-6 md:mb-8 ">
              <strong>Clique para falar com um especialista. Resposta rápida e profissional!</strong>
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
            target="_blank"
            className="inline-block w-full sm:w-[100%]"
          >
            <Button
              id="btn-whatsapp"
              size="lg"
              className="w-full sm:w-[80%] sm:h-[60px] bg-gradient-green from-[#15DF50] to-[#0AC062] text-white font-bold text-base sm:text-2xl hover:opacity-90 transition-opacity"
            >
              Tire suas Dúvidas no WhatsApp!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
