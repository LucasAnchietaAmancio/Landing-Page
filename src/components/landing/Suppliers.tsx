'use client';

import React from 'react';
import Image from 'next/image';

const supplierLogos = [
  { src: "https://placehold.co/150x60.png", alt: "WEG Logo", hint: "weg logo" },
  { src: "https://placehold.co/150x60.png", alt: "Supplier Logo 2", hint: "supplier logo" },
  { src: "https://placehold.co/150x60.png", alt: "Supplier Logo 3", hint: "supplier logo" },
  { src: "https://placehold.co/150x60.png", alt: "Supplier Logo 4", hint: "supplier logo" },
  { src: "https://placehold.co/150x60.png", alt: "Supplier Logo 5", hint: "supplier logo" },
  { src: "https://placehold.co/150x60.png", alt: "Supplier Logo 6", hint: "supplier logo" },
];

const Suppliers = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-muted-foreground mb-8">
          Nossos Parceiros e Fornecedores
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {supplierLogos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain"
                    data-ai-hint={logo.hint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
