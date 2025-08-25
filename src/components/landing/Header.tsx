'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MapPin, Menu, X } from 'lucide-react';
import Image from "next/image";

// Ícones oficiais
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Setores', href: '#solutions' },
  { name: 'Depoimentos', href: '#testimonials' },
];

const socialLinks = [
  { name: 'Instagram', icon: <FaInstagram className="h-5 w-5" />, href: 'https://www.instagram.com/globaltintasevernizes/?next=%2F' },
  { name: 'WhatsApp', icon: <FaWhatsapp className="h-5 w-5" />, href: 'https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Av. Ítrio Correa da Costa, 2646-A, Rondonópolis - MT</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
             <Link
              href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
              target="_blank"
              onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            >
              <Button
                size="lg"
                className="bg-gradient-green from-[#15DF50] to-[#0AC062] text-white font-bold text-lg hover:opacity-90 transition-opacity px-8 py-6 flex items-center justify-between"
              >
                Nosso WhatsApp
                <FaWhatsapp className="ml-4 text-xl" />
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Link
                      href="/"
                      className="text-xl font-bold text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      GlobalTintas
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 gap-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
