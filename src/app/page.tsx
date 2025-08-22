import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import AboutUs from '@/components/landing/AboutUs';
import Sectors from '@/components/landing/Sectors';
import Suppliers from '@/components/landing/Suppliers';
import Statistics from '@/components/landing/Statistics';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Sectors />
        <Suppliers />
        <Statistics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
