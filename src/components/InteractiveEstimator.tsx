import React, { useState } from 'react';
import { Calculator, MessageSquare, Send, Check, Sparkles, FileSpreadsheet, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const InteractiveEstimator: React.FC = () => {
  const [serviceType, setServiceType] = useState('gst-monthly');
  const [businessType, setBusinessType] = useState('proprietorship');
  const [turnaround, setTurnaround] = useState('standard');
  const [clientNotes, setClientNotes] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceLabels: Record<string, string> = {
      'gst-monthly': 'GST Registration / Monthly Filings (GSTR-1, 2A, 3B)',
      'gst-annual': 'GSTR-9 Annual Return & Reconciliation',
      'income-tax': 'Income Tax Filing (ITR 1 - 7)',
      'tax-audit': 'Tax Audit under Income Tax Act',
      'roc-firm': 'Registration of Firm Name in ROC',
      'loan-report': 'Bank Loan Projection & Provisional Report'
    };

    const bizLabels: Record<string, string> = {
      'individual': 'Salaried Individual',
      'proprietorship': 'Proprietorship Business',
      'partnership': 'Partnership Firm',
      'pvt-ltd': 'Private Limited Company'
    };

    const text = `Hello SANKAR'S Accounts & Auditing,%0A%0AI would like a quotation/consultation for the following details:%0A- *Client Name:* ${name || 'Not specified'}%0A- *Phone:* ${phone || 'Not specified'}%0A- *Service Required:* ${serviceLabels[serviceType]}%0A- *Entity Type:* ${bizLabels[businessType]}%0A- *Urgency:* ${turnaround === 'urgent' ? 'Immediate / Priority' : 'Standard'}%0A- *Additional Notes:* ${clientNotes || 'None'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.contacts.whatsappPrimary}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanatory Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Service Inquiry Generator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get an Immediate <span className="gradient-text-emerald">Quote & Checklist</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Select your required tax or auditing service below. Our tool will package your requirements into a direct 1-click WhatsApp message to our Senior Tax Consultants in Pondicherry.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GST Returns (GSTR-1, 2A, 3B, 9)</h4>
                  <p className="text-xs text-slate-400">Regular monthly & annual filings with 100% ITC reconciliation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bank Loan & ROC Firm Registration</h4>
                  <p className="text-xs text-slate-400">Bank-accepted projection reports for Mudra & business expansion loans.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
              ⚡ <strong>Fast Response Guarantee:</strong> Inquiries sent via WhatsApp during business hours (9:30 AM - 7:00 PM) receive instant assistance!
            </div>
          </div>

          {/* Right Column: Calculator Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-500 text-slate-950 font-bold">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tax & Audit Requirement Selector</h3>
                  <p className="text-xs text-slate-400">Fast-track your consultation request</p>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                
                {/* Service Type Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    1. Select Required Service *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="gst-monthly">GST Registration / GSTR-1 & GSTR-3B Monthly Filing</option>
                    <option value="gst-annual">GSTR-9 & GSTR-9C Annual Return</option>
                    <option value="income-tax">Income Tax Return Filing (Individual / Company)</option>
                    <option value="tax-audit">Tax Audit under Income Tax Act</option>
                    <option value="roc-firm">Registration of Firm Name in Registrar of Firms (ROC)</option>
                    <option value="loan-report">Bank Loan Projection Report & Provisional Financials</option>
                  </select>
                </div>

                {/* Entity Type Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    2. Business / Entity Type *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'individual', label: 'Salaried Individual' },
                      { id: 'proprietorship', label: 'Proprietorship' },
                      { id: 'partnership', label: 'Partnership Firm' },
                      { id: 'pvt-ltd', label: 'Pvt Ltd / Company' }
                    ].map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setBusinessType(b.id)}
                        className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                          businessType === b.id
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9366699661"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Additional Details / Loan Amount Needed (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any specific requirements (e.g. Need projection report for 15 Lakhs MSME loan)..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-xl shadow-emerald-500/25 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Request to SANKAR'S Accounts via WhatsApp</span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
