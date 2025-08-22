'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              GlobalTintas
            </Link>
            <p>Rua Exemplo, 123, Bairro</p>
            <p>Cidade, Estado - CEP 12345-678</p>
            <p>Telefone: (11) 98765-4321</p>
          </div>
          
          {/* Center Column - Copyright */}
          <div className="flex items-end justify-center">
            <p className="text-sm text-gray-300">&copy; 2024 Global Tintas e Vernizes. Todos os direitos reservados.</p>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Mapa da localização da empresa"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    data-ai-hint="location map"
                />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
