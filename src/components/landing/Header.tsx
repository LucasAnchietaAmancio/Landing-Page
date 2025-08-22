'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MapPin, Linkedin, Instagram, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Soluções', href: '#solutions' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.115l-1.362 4.957 5.063-1.323z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
  { name: 'WhatsApp', icon: <WhatsAppIcon className="h-5 w-5" />, href: '#' },
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
            <span>Rua Exemplo, 123, Cidade, Estado</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className="hover:opacity-80 transition-opacity">
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
            GlobalTintas
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
                        GlobalTintas
                     </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 gap-8">
                    {navLinks.map((link) => (
                      <a key={link.name} href={link.href} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
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
