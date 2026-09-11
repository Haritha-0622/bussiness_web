import React, { useState } from 'react';
import { FileSpreadsheet, Receipt, Building2, TrendingUp, CheckCircle2, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, ServiceItem } from '../data/businessInfo';

export const ServicesSection: React.FC = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Our Key Services
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            GST, Income Tax & Auditing Services
          </h2>
          <p className="text-sm text-slate-600">
            Fast, reliable, and affordable tax filing services for business owners and individuals in Pondicherry.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_INFO.services.map((service) => (
            <div key={service.id} className="clean-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-800 font-bold">
                    {service.category === 'gst' && <FileSpreadsheet className="w-6 h-6" />}
                    {service.category === 'income-tax' && <Receipt className="w-6 h-6" />}
                    {service.category === 'roc' && <Building2 className="w-6 h-6" />}
                    {service.category === 'bank-loan' && <TrendingUp className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="text-xs font-semibold text-blue-700 uppercase">Pondicherry HQ</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.detailedDesc}
                </p>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4">
                  <p className="text-xs font-bold text-slate-700 mb-2 uppercase">Includes:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {service.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-bold text-blue-700 hover:underline flex items-center"
                >
                  View Documents Needed
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GST Highlight Banner */}
        <div className="mt-10 bg-blue-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h3 className="text-xl font-bold">Need Help with Monthly GST Filing (GSTR-1, 2A, 3B, 9)?</h3>
            <p className="text-xs text-blue-200 mt-1">We reconcile your Input Tax Credit (ITC) to ensure zero penalty and maximum savings.</p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
            className="px-5 py-3 rounded-xl text-xs font-bold bg-amber-400 text-blue-950 hover:bg-amber-300 transition-colors shrink-0 shadow"
          >
            Call {BUSINESS_INFO.contacts.phonePrimary}
          </a>
        </div>

      </div>

      {/* Service Documents Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-900">{selectedServiceModal.title}</h3>
              <button onClick={() => setSelectedServiceModal(null)} className="text-slate-500 text-lg font-bold">✕</button>
            </div>
            
            <p className="text-xs text-slate-600">{selectedServiceModal.detailedDesc}</p>
            
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase mb-2">Required Documents to Bring:</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedServiceModal.documentsNeeded.map((doc, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t">
              <button onClick={() => setSelectedServiceModal(null)} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-200 text-slate-800">Close</button>
              <a href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
