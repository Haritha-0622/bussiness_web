import React, { useState } from 'react';
import { FileText, CheckCircle2, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const DocumentChecklist: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gst' | 'it' | 'roc' | 'loan'>('gst');
  const [copied, setCopied] = useState(false);

  const lists = {
    gst: [
      "PAN Card of Proprietor / Partners / Company",
      "Aadhaar Card copy",
      "Cancelled Cheque or Bank Passbook front page",
      "Electricity Bill of Business Premises",
      "Rental Agreement / Property NOC",
      "Sales & Purchase Bills for filing period"
    ],
    it: [
      "PAN & Aadhaar Card",
      "Form 16 / Salary Certificate",
      "Bank Account Statement for Financial Year",
      "Investment Proofs (80C LIC, PPF, 80D Insurance)",
      "Housing Loan / Interest Certificate (if any)"
    ],
    roc: [
      "Proposed Firm Names (2-3 choices)",
      "PAN & Aadhaar of all Partners",
      "Partnership Deed copy",
      "Address proof of Pondicherry office premises"
    ],
    loan: [
      "Last 3 Years ITR copy (if available)",
      "6-12 Months Bank Statement",
      "Loan requirement quotation / Machinery estimate",
      "GST returns summary"
    ]
  };

  const handleCopy = () => {
    const text = `Document Checklist - SANKAR'S Accounts & Auditing\n\n` + 
      lists[activeTab].map((item, i) => `${i + 1}. ${item}`).join('\n') + 
      `\n\nAddress: ${BUSINESS_INFO.location.address}\nCall: ${BUSINESS_INFO.contacts.phonePrimary}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="checklist" className="py-16 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
            Checklist Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Documents to Bring to Our Shop
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Keep these documents ready when visiting our Pondicherry office.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[
            { id: 'gst', label: 'GST Filings' },
            { id: 'it', label: 'Income Tax ITR' },
            { id: 'roc', label: 'ROC Firm Registration' },
            { id: 'loan', label: 'Bank Loan Report' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Box */}
        <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center">
              <FileText className="w-4 h-4 text-blue-400 mr-2" />
              Checklist for {activeTab.toUpperCase()}
            </h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-900 text-neutral-200 border border-neutral-800 hover:border-neutral-700 flex items-center"
            >
              {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? 'Copied!' : 'Copy List'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lists[activeTab].map((item, idx) => (
              <div key={idx} className="flex items-center p-3 rounded-xl bg-black border border-neutral-800 text-xs text-neutral-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-neutral-300 bg-neutral-900 p-3 rounded-xl border border-neutral-800">
            📍 You can bring printed copies or send soft copies via WhatsApp to <strong>{BUSINESS_INFO.contacts.phonePrimary}</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
