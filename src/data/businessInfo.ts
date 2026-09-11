export interface ServiceItem {
  id: string;
  category: 'gst' | 'income-tax' | 'roc' | 'bank-loan';
  title: string;
  shortDesc: string;
  detailedDesc: string;
  documentsNeeded: string[];
  keyHighlights: string[];
  iconName: string;
  popular?: boolean;
}

export const BUSINESS_INFO = {
  name: "SANKAR’S",
  subTitle: "Accounts & Auditing",
  fullTitle: "SANKAR’S Accounts & Auditing",
  tagline: "GST & Income Tax Filing Services | Registration of Firms (ROC)",
  experienceYears: "15+",
  tag: "Pondicherry's Trusted Financial & Tax Consultancy",
  
  contacts: {
    phonePrimary: "9366699661",
    phoneSecondary: "9865924240",
    landline: "0413-2203320",
    phoneFormattedPrimary: "+91 93666 99661",
    phoneFormattedSecondary: "+91 98659 24240",
    landlineFormatted: "0413-2203320",
    whatsappPrimary: "919366699661",
    whatsappSecondary: "919865924240",
    email: "sankaraccounts.pdy@gmail.com",
  },

  location: {
    address: "R.S. No.10/5, Ellaipillaichavady Main Road (Near HDFC Bank), Puducherry - 605005",
    landmark: "Near HDFC Bank / 100 Feet Road Junction",
    city: "Pondicherry",
    pincode: "605005",
    googleMapsUrl: "https://maps.app.goo.gl/ymVgxqo17s4cxRRV8?g_st=iwb",
    embedMapQuery: "R.S. No.10/5, Ellaipillaichavady Main Road, Pondicherry-605005",
  },

  hours: {
    schedule: "Monday to Saturday: 9:30 AM to 7:00 PM",
    lunchBreak: "1:30 PM to 3:00 PM (Lunch)",
    days: "Monday - Saturday",
    closedDay: "Sunday (Open for urgent filings by appointment)",
    openTimeDecimal: 9.5, // 9:30 AM
    lunchStartDecimal: 13.5, // 1:30 PM
    lunchEndDecimal: 15.0, // 3:00 PM
    closeTimeDecimal: 19.0, // 7:00 PM
  },

  services: [
    {
      id: "gst-registration-filing",
      category: "gst",
      title: "GST Registration & Returns Filing",
      shortDesc: "Complete GST lifecycle management: New registration, GSTR-1, GSTR-2A/2B review, GSTR-3B & GSTR-9 Annual Returns.",
      detailedDesc: "Hassle-free GST compliance for businesses, proprietors, and companies. We handle monthly & quarterly return filings, Input Tax Credit (ITC) reconciliation, and annual audit filings.",
      documentsNeeded: ["PAN Card of Proprietor/Partner/Company", "Aadhaar Card", "Bank Account Cancelled Cheque/Passbook", "Electricity Bill / Rental Agreement of Business Premises"],
      keyHighlights: ["GSTR-1 Sales Return Filing", "GSTR-2A & GSTR-2B ITC Review", "GSTR-3B Summary Return", "GSTR-9 & 9C Annual Returns"],
      iconName: "FileSpreadsheet",
      popular: true,
    },
    {
      id: "income-tax-filing",
      category: "income-tax",
      title: "Income Tax Filing & Tax Audit",
      shortDesc: "Expert ITR filing for Salaried Individuals, Proprietors, Companies, and Tax Audits under Income Tax Act.",
      detailedDesc: "Maximize your tax savings legally with thorough tax return filing (ITR-1 to ITR-7), Form 16 processing, capital gains tax optimization, and mandatory tax audits.",
      documentsNeeded: ["PAN Card & Aadhaar Card", "Form 16 / Salary Certificates", "Bank Statements for financial year", "Investment Proofs (80C, 80D, etc.)", "Trading/Profit & Loss details"],
      keyHighlights: ["Individual & Salaried ITR Filing", "Partnership & Company Tax Returns", "Tax Audit under Section 44AB", "Advance Tax Calculation"],
      iconName: "ReceiptCheck",
      popular: true,
    },
    {
      id: "roc-firm-registration",
      category: "roc",
      title: "Registration of Firms (ROC)",
      shortDesc: "Official firm name registration, Partnership Deed registration, and Registrar of Firms (ROC) compliance.",
      detailedDesc: "Secure your business identity with official firm name registration in the Registrar of Firms. We handle partnership deed drafting, registration certificates, and legal compliance.",
      documentsNeeded: ["Partner PAN & Aadhaar Cards", "Partnership Deed Copy", "Address Proof of Firm", "NOC from Property Owner"],
      keyHighlights: ["Company Name Registration in ROC", "Partnership Firm Registration", "Deed Drafting & Stamp Duty Assistance", "Registrar Certificate Filing"],
      iconName: "Building2",
      popular: true,
    },
    {
      id: "loan-provisional-reports",
      category: "bank-loan",
      title: "Provisional & Projection Reports for Bank Loans",
      shortDesc: "CMA Data, Projected Profit & Loss, Balance Sheet & Financial Statements for Bank Loan Approvals.",
      detailedDesc: "Get bank-accepted Financial Projection Reports & Provisional Balance Sheets engineered for Mudra Loans, MSME Loans, Business Expansion, Machinery & Housing Loans.",
      documentsNeeded: ["Last 3 Years Income Tax Returns (if available)", "Last 6 Months Bank Statement", "Quotation / Machinery Estimate for Loan", "GST Returns summary"],
      keyHighlights: ["CMA Data Preparation", "Projected Balance Sheet & P&L Statement", "MSME & Mudra Loan Reports", "Bank Audit Certification"],
      iconName: "TrendingUp",
      popular: true,
    }
  ] as ServiceItem[]
};
