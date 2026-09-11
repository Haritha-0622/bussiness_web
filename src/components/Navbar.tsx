import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState({ label: 'Open Now', color: 'bg-emerald-500', detail: 'Mon-Sat: 9:30 AM - 7:00 PM' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const dec = hours + minutes / 60;

      if (day === 0) {
        setStatus({ label: 'Closed Today (Sunday)', color: 'bg-amber-500', detail: 'Opens Monday 9:30 AM' });
      } else if (dec >= 9.5 && dec < 13.5) {
        setStatus({ label: 'Open Now', color: 'bg-emerald-500', detail: 'Lunch: 1:30 PM - 3:00 PM' });
      } else if (dec >= 13.5 && dec < 15.0) {
        setStatus({ label: 'Lunch Break', color: 'bg-amber-500', detail: 'Reopens at 3:00 PM' });
      } else if (dec >= 15.0 && dec < 19.0) {
        setStatus({ label: 'Open Now', color: 'bg-emerald-500', detail: 'Closes at 7:00 PM' });
      } else {
        setStatus({ label: 'Closed Now', color: 'bg-red-500', detail: 'Opens tomorrow 9:30 AM' });
      }
    };

    updateStatus();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' : 'bg-white py-3 border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Strip */}
        <div className="hidden lg:flex justify-between items-center text-xs pb-2 border-b border-slate-100 text-slate-600 mb-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center font-medium text-blue-900">
              <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" />
              100 Feet Road, Ellaipillaichavady, Pondicherry-605005
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
              Mon - Sat: 9.30 AM to 7.00 PM (Lunch: 1.30 PM - 3.00 PM)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              <span className={`w-2 h-2 rounded-full mr-1.5 ${status.color}`}></span>
              {status.label}
            </span>
            <a href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`} className="font-bold text-blue-700 hover:text-blue-900 flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1" />
              {BUSINESS_INFO.contacts.phoneFormattedPrimary}
            </a>
          </div>
        </div>

        {/* Main Bar */}
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-lg sm:text-xl text-blue-950 leading-tight">
                {BUSINESS_INFO.name}
              </h1>
              <p className="text-xs text-blue-700 font-semibold">{BUSINESS_INFO.subTitle}</p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
            <a href="#checklist" className="hover:text-blue-700 transition-colors">Documents Needed</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact & Map</a>
          </nav>

          {/* Quick Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi%20SANKAR'S%20Accounts,%20I%20need%20tax%20filing%20assistance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              WhatsApp
            </a>

            <a
              href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Call 9366699661
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 mt-2">
          <div className="text-xs font-semibold text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
            📍 {BUSINESS_INFO.location.address}
          </div>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 hover:text-blue-700">Our Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 hover:text-blue-700">About SANKAR'S</a>
          <a href="#checklist" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 hover:text-blue-700">Required Documents</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 hover:text-blue-700">Contact & Address</a>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <a href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`} className="py-2 px-3 text-center text-xs font-bold bg-blue-700 text-white rounded-lg">Call Us</a>
            <a href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}`} target="_blank" rel="noopener noreferrer" className="py-2 px-3 text-center text-xs font-bold bg-emerald-600 text-white rounded-lg">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
};
