'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111827] text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              GlobalTintas
            </Link>
            <p className="min-w-[50px]">
              Pelo canal de atendimento ao cliente, estamos disponíveis para atendê-lo(a) da melhor forma.
            </p>
            <p>Av. Ítrio Correa da Costa, 2646-A</p>
            <p>Rondonópolis - MT - CEP 78705-660</p>
            <p>Telefone: (66) 33421-0707</p>
            <p>Email: gabriel.nogueira@globaltinta.com.br</p>
          </div>
          
          {/* Center Column - pode adicionar links ou informações extras aqui */}
          <div className="hidden md:flex flex-col items-center justify-center space-y-2">
            {/* Placeholder para links, redes sociais, etc. */}
          </div>

          {/* Right Column - Map */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.370709657811!2d-54.66408402392167!3d-16.456756239615576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9d6f1f4f0e3%3A0x568ad820cf2cc1cb!2sGlobal%20Tintas%20e%20Vernizes!5e0!3m2!1spt-BR!2sbr!4v1755887577696!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-300">
          &copy; 2025 Global Tintas e Vernizes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
