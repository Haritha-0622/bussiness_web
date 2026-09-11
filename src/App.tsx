import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutUs } from './components/AboutUs';
import { DocumentChecklist } from './components/DocumentChecklist';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutUs />
        <DocumentChecklist />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}
