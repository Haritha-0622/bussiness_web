import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const FAQAndReviews: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What GST returns do you handle for businesses in Pondicherry?",
      a: "We provide complete end-to-end GST return filings including GSTR-1 (Sales return), GSTR-2A/2B input tax credit review, GSTR-3B monthly summary tax return, and GSTR-9/9C Annual Returns."
    },
    {
      q: "Can I get a Bank Loan Projection Report for my business?",
      a: "Yes! We draft comprehensive Projected Profit & Loss Statements, Projected Balance Sheets, and CMA Data required by nationalized and private banks for Mudra Loans, MSME Loans, and Machinery Purchase loans."
    },
    {
      q: "How do I register my Partnership Firm name in ROC / Registrar of Firms?",
      a: "We assist with firm name availability check, Partnership Deed drafting, stamp duty execution, and submission to the Registrar of Firms (ROC) in Pondicherry."
    },
    {
      q: "What documents are required for Income Tax Filing?",
      a: "For salaried individuals: Form 16, Bank statements, PAN, and Aadhaar. For business proprietors: Trading accounts, Bank statements, GST returns, and asset details."
    },
    {
      q: "What are your business operating hours and lunch break time?",
      a: "Our office at 100 Feet Road, Ellaipillaichavady, Pondicherry is open Monday through Saturday from 9:30 AM to 7:00 PM. Our lunch break is from 1:30 PM to 3:00 PM."
    }
  ];

  const reviews = [
    {
      name: "Ramesh M.",
      type: "Pondicherry Business Proprietor",
      text: "SANKAR’S Accounts handled our GST registration and monthly GSTR-1 & 3B filings seamlessly. Extremely prompt and knowledgeable team on 100 Feet Road!",
      stars: 5
    },
    {
      name: "Kavitha R.",
      type: "Partnership Firm Owner",
      text: "Got our firm name registered in ROC without any hassle. They also prepared our bank loan projection report which got approved in just 4 days!",
      stars: 5
    },
    {
      name: "Sundararajan S.",
      type: "Salaried Taxpayer",
      text: "Fast and reliable Income Tax filing service. They explained all tax deductions under new and old regimes clearly. Highly recommended!",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* FAQ Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked <span className="gradient-text-emerald">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">What Our Clients Say</h3>
            <p className="text-xs text-slate-400">Trusted by over 1000+ business owners & taxpayers across Pondicherry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 relative">
                <Quote className="w-8 h-8 text-emerald-500/20 absolute top-4 right-4" />
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">"{rev.text}"</p>
                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-sm font-bold text-white">{rev.name}</p>
                  <p className="text-[11px] text-slate-400">{rev.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
