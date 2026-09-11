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
    <section id="checklist" className="py-16 bg-blue-50/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Checklist Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Documents to Bring to Our Shop
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
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
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Box */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center">
              <FileText className="w-4 h-4 text-blue-700 mr-2" />
              Checklist for {activeTab.toUpperCase()}
            </h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 flex items-center"
            >
              {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? 'Copied!' : 'Copy List'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lists[activeTab].map((item, idx) => (
              <div key={idx} className="flex items-center p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-blue-900 bg-blue-50 p-3 rounded-lg border border-blue-100">
            📍 You can bring printed copies or send soft copies via WhatsApp to <strong>{BUSINESS_INFO.contacts.phonePrimary}</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
