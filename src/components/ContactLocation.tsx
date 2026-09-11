import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Navigation, Send, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const ContactLocation: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('GST Return Filing');
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi SANKAR'S Accounts & Auditing,%0A%0AName: ${name}%0APhone: ${phone}%0AService Required: ${service}`;
    window.open(`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Contact & Location
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Visit Our Shop or Call Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            R.S. No.10/5, Ellaipillaichavady Main Road (Near HDFC Bank), Puducherry-605005.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Address & Phone Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-blue-950 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-700 mr-2" />
                  Shop Address
                </h3>
                <button
                  onClick={handleCopyAddress}
                  className="px-2.5 py-1 rounded bg-white text-xs font-bold text-blue-800 border border-blue-200"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <p className="text-sm font-semibold text-slate-800">
                {BUSINESS_INFO.location.address}
              </p>

              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 transition-colors"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Open Directions in Google Maps
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Phone Numbers Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 flex items-center">
                <Phone className="w-5 h-5 text-blue-700 mr-2" />
                Call / WhatsApp Helplines
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
                  className="p-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 font-bold text-blue-900 text-sm block"
                >
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Mobile 1</p>
                  <p className="text-base text-blue-700">{BUSINESS_INFO.contacts.phonePrimary}</p>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.contacts.phoneSecondary}`}
                  className="p-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 font-bold text-blue-900 text-sm block"
                >
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Mobile 2</p>
                  <p className="text-base text-blue-700">{BUSINESS_INFO.contacts.phoneSecondary}</p>
                </a>
              </div>

              <p className="text-xs font-bold text-slate-700 pt-1">
                ☎️ Office Landline: <span className="text-blue-700">0413-2203320</span>
              </p>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=Hi%20SANKAR'S%20Accounts,%20I%20need%20tax%20filing%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Timings Box */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <p className="font-bold text-sm text-amber-900 flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                Shop Working Hours
              </p>
              <p className="font-semibold">Monday to Saturday: 9:30 AM to 7:00 PM</p>
              <p className="text-amber-800">Lunch Break: 1:30 PM to 3:00 PM</p>
            </div>

          </div>

          {/* Right Column: Quick Inquiry Form & Real Shop Photo Card */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Quick Contact Form</h3>
              <p className="text-xs text-slate-500 mb-4">Send a quick WhatsApp message directly to our office.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                  >
                    <option value="GST Return Filing">GST Registration & Filings (GSTR-1, 3B, 9)</option>
                    <option value="Income Tax Filing">Income Tax Return & Tax Audit</option>
                    <option value="ROC Firm Registration">Registration of Firm Name in ROC</option>
                    <option value="Bank Loan Report">Bank Loan Projection Report</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp Message</span>
                </button>
              </form>
            </div>

            {/* Real Shop Entrance Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-64 shadow bg-slate-900">
              <img
                src="/images/shop.jpg"
                alt="SANKAR'S AUDIT Puducherry Shop Front"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-4 text-white">
                <p className="text-xs font-bold text-amber-400">PUDUCHERRY SHOP FRONT</p>
                <p className="text-sm font-bold">{BUSINESS_INFO.location.address}</p>
                <a
                  href={BUSINESS_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-blue-200 hover:text-white mt-1"
                >
                  Click here to open Google Maps directions →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
