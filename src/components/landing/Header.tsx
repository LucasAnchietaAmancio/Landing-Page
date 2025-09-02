'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MapPin, Menu } from 'lucide-react';
import Image from "next/image";

// Ícones oficiais
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center h-8 sm:h-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="truncate max-w-[200px] sm:max-w-none">
              Av. Ítrio Correa da Costa, 2646-A, Rondonópolis - MT
            </span>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="w-28 md:w-36 object-contain"
            />
          </Link>

          {/* Links Desktop */}
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
              rel="noopener noreferrer"
            >
              <Button
                id="btn-whatsapp"
                size="lg"
                className="bg-gradient-green from-[#15DF50] to-[#0AC062] text-white font-bold text-base hover:opacity-90 transition-opacity px-6 py-5 flex items-center"
              >
                Nosso WhatsApp
                <FaWhatsapp className="ml-2 text-lg" />
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
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
                className="w-[260px] sm:w-[320px] bg-background flex flex-col"
              >
                {/* Logo no menu */}
                <div className="flex justify-center items-center py-4 border-b">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>

                {/* Links */}
                <div className="flex flex-col items-center gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* WhatsApp no menu mobile */}
                <div className="mt-auto pb-6 flex justify-center">
                  <Link
                    href="https://api.whatsapp.com/send?phone=556696520091&text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20pre%C3%A7os%20de%20voc%C3%AAs%2E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-green from-[#15DF50] to-[#0AC062] text-white font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 px-4 py-3">
                      Fale no WhatsApp
                      <FaWhatsapp className="text-lg" />
                    </Button>
                  </Link>
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
