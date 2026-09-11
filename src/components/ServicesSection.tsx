import React, { useState } from 'react';
import { FileSpreadsheet, Receipt, Building2, TrendingUp, CheckCircle2, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, ServiceItem } from '../data/businessInfo';

export const ServicesSection: React.FC = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 bg-black text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
            Our Key Services
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            GST, Income Tax & Auditing Services
          </h2>
          <p className="text-sm text-neutral-400">
            Fast, reliable, and affordable tax filing services for business owners and individuals in Pondicherry.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_INFO.services.map((service) => (
            <div key={service.id} className="clean-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400 font-bold">
                    {service.category === 'gst' && <FileSpreadsheet className="w-6 h-6" />}
                    {service.category === 'income-tax' && <Receipt className="w-6 h-6" />}
                    {service.category === 'roc' && <Building2 className="w-6 h-6" />}
                    {service.category === 'bank-loan' && <TrendingUp className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="text-xs font-semibold text-blue-400 uppercase">Pondicherry HQ</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed">
                  {service.detailedDesc}
                </p>

                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 mb-4">
                  <p className="text-xs font-bold text-neutral-400 mb-2 uppercase">Includes:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-200">
                    {service.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-900">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center"
                >
                  View Documents Needed
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GST Highlight Banner */}
        <div className="mt-10 bg-neutral-900 border border-neutral-800 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white">Need Help with Monthly GST Filing (GSTR-1, 2A, 3B, 9)?</h3>
            <p className="text-xs text-neutral-400 mt-1">We reconcile your Input Tax Credit (ITC) to ensure zero penalty and maximum savings.</p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
            className="px-5 py-3 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0 shadow"
          >
            Call {BUSINESS_INFO.contacts.phonePrimary}
          </a>
        </div>

      </div>

      {/* Service Documents Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 max-w-lg w-full p-6 rounded-2xl shadow-2xl border border-neutral-800 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-lg font-bold text-white">{selectedServiceModal.title}</h3>
              <button onClick={() => setSelectedServiceModal(null)} className="text-neutral-400 hover:text-white text-lg font-bold">✕</button>
            </div>
            
            <p className="text-xs text-neutral-300">{selectedServiceModal.detailedDesc}</p>
            
            <div>
              <h4 className="text-xs font-bold text-blue-400 uppercase mb-2">Required Documents to Bring:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-200">
                {selectedServiceModal.documentsNeeded.map((doc, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-neutral-800">
              <button onClick={() => setSelectedServiceModal(null)} className="px-4 py-2 rounded-lg text-xs font-bold bg-neutral-800 text-neutral-300 hover:bg-neutral-700">Close</button>
              <a href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500">WhatsApp Us</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
