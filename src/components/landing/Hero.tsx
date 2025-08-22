'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-[60vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1200x800.png')" }}
        data-ai-hint="paint factory"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Excelência em Tintas e Vernizes
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          Fornecemos soluções de alta performance para os setores industrial e automotivo, com a qualidade e confiança que só a Global Tintas e Vernizes oferece.
        </p>
        <Button size="lg" className="bg-gradient-green text-white font-bold text-lg hover:opacity-90 transition-opacity px-8 py-6">
          Conheça nossas soluções
        </Button>
      </div>
    </section>
  );
};

export default Hero;
