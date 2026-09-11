import React from 'react';
import { ShieldCheck, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black text-neutral-400 text-xs py-12 pb-24 md:pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{BUSINESS_INFO.name} {BUSINESS_INFO.subTitle}</h3>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Pondicherry's trusted office for GST Filing (GSTR-1, 2A, 3B, 9), Income Tax Returns, Tax Audits, Bank Loan Reports & Registration of Company name in ROC.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-xs">Address & Hours</h4>
              <p className="flex items-start text-neutral-300">
                <MapPin className="w-4 h-4 text-blue-400 mr-1.5 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location.address}</span>
              </p>
              <p className="flex items-start text-neutral-300">
                <Clock className="w-4 h-4 text-amber-400 mr-1.5 shrink-0 mt-0.5" />
                <span>Mon - Sat: 9.30 AM to 7.00 PM<br />(Lunch: 1.30 PM - 3.00 PM)</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-xs">Call & WhatsApp</h4>
              <p className="text-sm font-bold text-blue-400">
                Phone: {BUSINESS_INFO.contacts.phonePrimary} / {BUSINESS_INFO.contacts.phoneSecondary}
              </p>
              <p className="text-xs text-neutral-400 font-medium">
                ☎️ Landline: 0413-2203320
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-500"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-neutral-900 text-center text-neutral-500 text-[11px]">
            © {new Date().getFullYear()} SANKAR’S Accounts & Auditing. All Rights Reserved. Puducherry - 605005.
          </div>

        </div>
      </footer>

      {/* Floating Action Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-neutral-800 p-2.5 md:hidden flex items-center justify-around gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow"
        >
          <Phone className="w-4 h-4 mr-1.5" />
          Call 9366699661
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi%20SANKAR'S%20Accounts,%20I%20need%20tax%20filing%20assistance.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow"
        >
          <MessageSquare className="w-4 h-4 mr-1.5" />
          WhatsApp Chat
        </a>
      </div>
    </>
  );
};
