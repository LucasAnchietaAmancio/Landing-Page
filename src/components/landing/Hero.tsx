'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[60vh] md:h-[75vh] min-h-[400px] w-full flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-[center_left_32%] md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Slider.png)" }}
        data-ai-hint="paint factory"
      >
        <div className="absolute top-0 left-0 w-full h-full/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-[250px] md:max-w-[650px]">
          <h1 className="text-1xl md:text-5xl font-medium tracking-tight mb-2 text-[#5A5A5A]">
            Precisando de primer de alta performance{' '}
            <strong className="bg-clip-text text-transparent bg-[#00569D] from-[#15DF50] to-[#0AC062]">
              para suas estruturas metálicas?
            </strong>{' '}
            Conte com a Global e garanta o melhor Zarcão do mercado.
          </h1>

          <p className="max-w-xl text-sm md:text-xl text-[#5A5A5A] mb-8 drop-shadow-md">
             Fornecemos soluções de alta performance para pintura de estruturas metálicas e aplicações industriais, com a qualidade e confiança que só a Global Tintas e Vernizes oferece.
          </p>

          <Link
              href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
              target="_blank"
              className="w[50px]"
            >
              <Button
                id="btn-whatsapp"
                size="lg"
                className="bg-gradient-blue text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Fale com nosso time
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
