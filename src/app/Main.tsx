'use client';

import About from '@/components/about/About';
import Benefits from '@/components/benefits/Benefits';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Join from '@/components/join/Join';
import Nav from '@/components/nav/Nav';

export default function Main() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Benefits />
      <Join />
      <Footer />
    </>
  );
}
