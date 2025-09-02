'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  const benefits = [
    'Máxima Proteção: Cria uma barreira de alta aderência que bloqueia o avanço da ferrugem.',
    'Alto Rendimento: Qualidade WEG que garante maior cobertura por lata, otimizando seu investimento.',
  ];

  return (
    <section
      id="home"
      className="relative h-[60vh] md:h-[75vh] min-h-[400px] w-full flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-[center_left_32%] sm:bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Slider.png)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-[280px] sm:max-w-[450px] md:max-w-[650px]">
          <h1 className="text-lg sm:text-2xl md:text-5xl font-medium tracking-tight mb-4 text-[#5A5A5A]">
            Tinta para Ferro: Conheça o{' '}
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#00569D] to-[#0AC062]">
              Primer Zarcão
            </strong>{' '}
            com{' '}
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#00569D] to-[#0AC062]">
              Proteção Antiferrugem
            </strong>
            .
          </h1>

          <p className="text-xs sm:text-base md:text-xl text-[#5A5A5A] mb-6 md:mb-8 drop-shadow-md">
            A solução ideal da Global Tintas para quem busca alta performance em primers anticorrosivos.
            O Zarcão WEG oferece a máxima proteção para suas estruturas metálicas com a qualidade que
            seu projeto merece.
          </p>

          <ul className="space-y-2 text-xs sm:text-base text-[#5A5A5A] mb-6 drop-shadow-md">
          {benefits.map((benefit, index) => (
              <li key={index}  className="flex items-start max-w-[241px] sm:max-w-none">
                 <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 m-[5px]"/>
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>

          <Link
            href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
            target="_blank"
            className="inline-block"
          >
            <Button
              id="btn-whatsapp"
              size="lg"
              className="w-full sm:w-auto  sm:max-w-[241px] bg-gradient-blue text-white font-bold text-base sm:text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento Agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
