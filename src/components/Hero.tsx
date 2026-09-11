import React from 'react';
import { ShieldCheck, Phone, MessageSquare, MapPin, CheckCircle2, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-700/80 border border-blue-400/40 text-blue-100 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GST Practitioner & Accounts Auditor • Puducherry</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {BUSINESS_INFO.name} <span className="text-amber-400">{BUSINESS_INFO.subTitle}</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional <strong className="text-amber-300">GST & VAT Registration</strong>, Maintenance of Accounts, E-Filing of Monthly GST Returns (GSTR-1, 2A, 3B, 9), Income Tax Returns & ROC Firm Registration.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-white">
              <div className="flex items-center space-x-2 bg-blue-950/60 p-3 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST Registration & Monthly Filings</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-950/60 p-3 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Income Tax & Tax Audit Filing</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-950/60 p-3 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bank Loan Projection Reports</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-950/60 p-3 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Registrar of Firms (ROC) Reg.</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold bg-amber-400 text-blue-950 hover:bg-amber-300 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.contacts.phonePrimary}
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi%20SANKAR'S%20Accounts,%20I%20need%20tax%20filing%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>

              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-xs font-semibold text-blue-200 hover:text-white bg-blue-950/50 border border-blue-700"
              >
                <Navigation className="w-4 h-4 mr-1.5 text-amber-400" />
                Google Maps
              </a>
            </div>

            {/* Address Banner */}
            <div className="text-xs text-blue-200 flex items-center justify-center lg:justify-start pt-2">
              <MapPin className="w-4 h-4 mr-1 text-amber-400 shrink-0" />
              <span>Location: {BUSINESS_INFO.location.address}</span>
            </div>

          </div>

          {/* Right Column: Real Shop Storefront Entrance Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white p-3 rounded-2xl shadow-2xl border border-blue-200 max-w-sm w-full">
              <div className="relative rounded-xl overflow-hidden group bg-slate-900">
                <img
                  src="/images/shop.jpg"
                  alt="SANKAR'S AUDIT Accounts & Auditing Shop Board Puducherry"
                  className="w-full h-[420px] object-cover object-center rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Our Shop Exterior & Sign Board</p>
                  <p className="text-sm font-bold">R.S. No.10/5, Ellaipillaichavady Main Road (Near HDFC Bank)</p>
                  <p className="text-xs text-blue-200 mt-0.5">Puducherry - 605005 • Landline: 0413-2203320</p>
                </div>
              </div>
              <div className="mt-3 p-2.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>📍 Ellaipillaichavady Main Road</span>
                <span className="text-blue-700">Puducherry</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
