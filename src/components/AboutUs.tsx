import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Real Auditor Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-800 shadow-2xl max-w-md w-full">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <img
                  src="/images/auditor.jpg"
                  alt="Auditor at SANKAR'S Accounts & Auditing Puducherry Desk"
                  className="w-full h-[400px] object-cover object-top rounded-xl"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-white">
                  <p className="text-base font-extrabold">{BUSINESS_INFO.name} Accounts & Auditing</p>
                  <p className="text-xs text-blue-400">Senior Auditor & GST Practitioner Desk • Puducherry</p>
                </div>
              </div>
              <div className="mt-3 p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs font-bold text-white">
                <span>📞 Mobile: {BUSINESS_INFO.contacts.phonePrimary}</span>
                <span className="text-emerald-400">Landline: 0413-2203320</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Details */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
              Meet Our Auditor
            </span>

            <h2 className="text-3xl font-extrabold text-white">
              Personalized Accounts & Tax Auditing
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              At <strong>SANKAR’S Accounts & Auditing</strong>, we offer direct, face-to-face consultation at our office on <strong>Ellaipillaichavady Main Road (Near HDFC Bank), Puducherry</strong>. We provide expert guidance for proprietorships, partnership firms, small business owners, and individuals.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-200">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">GST Registration & Filings:</strong> GSTR-1, Reviewing GSTR-2A/2B, GSTR-3B, and GSTR-9 Annual Returns.
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Income Tax & Audits:</strong> Individual tax returns, Company ITR, Tax Audit under Income Tax Act.
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Bank Loan Projection Reports:</strong> Projected Balance Sheet & Profit Loss reports for bank loan approvals.
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">ROC Firm Name Registration:</strong> Registration of Company name in Registrar of Firms (ROC).
                </div>
              </div>
            </div>

            {/* Direct Call & WhatsApp buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS_INFO.contacts.phonePrimary}`}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Auditor ({BUSINESS_INFO.contacts.phonePrimary})
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Office
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
