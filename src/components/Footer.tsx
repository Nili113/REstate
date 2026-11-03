import React from 'react';
import { ShieldCheck, MapPin, Phone, Award, Landmark, ArrowUp, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/kenishaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-ivory-200 border-t border-gold-500/30">
      
      {/* Top Banner with Official Stamp & Statutory Badges */}
      <div className="border-b border-forest-800/80 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Company Identity */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shrink-0 shadow-md border-2 border-gold-500/50 flex items-center justify-center">
              <img
                src={COMPANY_INFO.sealImage}
                alt="Kenisha Real Estate Official Seal"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-gold-400 tracking-wide mb-0.5">
                Government Registered • Companies Act 2006
              </div>
              <h3 className="brand-font text-xl sm:text-2xl font-bold text-white leading-tight">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-ivory-300 mt-0.5">
                {COMPANY_INFO.nepaliName} • {COMPANY_INFO.registeredOfficeNepali}
              </p>
            </div>
          </div>

          {/* Quick Credential Chips */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-forest-900/90 border border-forest-700/80 text-ivory-200 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reg: <strong className="text-white">{COMPANY_INFO.registrationNo}</strong></span>
            </div>
            
            <div className="px-3.5 py-2 rounded-xl bg-forest-900/90 border border-forest-700/80 text-ivory-200 flex items-center gap-2 shadow-sm">
              <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>PAN: <strong className="text-white">{COMPANY_INFO.panNo}</strong></span>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-forest-900/90 border border-forest-700/80 text-ivory-200 flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tax Clearance: <strong className="text-white">FY 2081/82</strong></span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Executive & Leadership */}
          <div>
            <h4 className="brand-font text-base font-bold text-white mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-gold-400" />
              <span>Leadership & Governance</span>
            </h4>
            <div className="text-xs text-ivory-300 space-y-2.5 leading-relaxed">
              <p>
                <strong className="text-white">Founder & Managing Director:</strong><br />
                Miss Kenisha / Ranjita Dulal (रंजिता दुलाल)<br />
                <span className="text-gold-400 font-semibold">100% Sole Equity Promoter</span>
              </p>
              <p>
                <strong className="text-white">Permanent Origin:</strong> Maipokhari, Ilam-04<br />
                <strong className="text-white">Headquarters:</strong> Arjundhara-06, Jhapa
              </p>
              <p className="text-[11px] text-ivory-400 pt-1">
                Direct personal supervision of all land acquisitions, cadastral demarcation, and municipal clearances.
              </p>
            </div>
          </div>

          {/* Column 2: Active Planning Sectors */}
          <div>
            <h4 className="brand-font text-base font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Planning Locations</span>
            </h4>
            <ul className="text-xs space-y-2.5 text-ivory-300 font-medium">
              <li>
                <a href="#sites" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Arjundhara-06 Mata Mandir Tol</span>
                </a>
              </li>
              <li>
                <a href="#sites" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Rana Gaun Plotted Settlement (Ward 08)</span>
                </a>
              </li>
              <li>
                <a href="#sites" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Salbari Green Planning Sector (Ward 09)</span>
                </a>
              </li>
              <li>
                <a href="#sites" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Sanischare – Arjundhara Linkage Parcels</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Terai Land Unit Converter (बीघा/कठ्ठा/धुर)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Credentials */}
          <div>
            <h4 className="brand-font text-base font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Public Documents</span>
            </h4>
            <ul className="text-xs space-y-2.5 text-ivory-300 font-medium">
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Certificate of Incorporation (324284)</span>
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Corporate PAN Certificate (619817794)</span>
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>CAMIS Electronic Government QR Record</span>
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Tax Clearance Certificate FY 2080/081</span>
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">•</span>
                  <span>Tax Clearance Certificate FY 2081/082</span>
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-gold-400">
                  <span>→</span>
                  <span>29-Page Complete Legal Dossier</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Coordinates */}
          <div>
            <h4 className="brand-font text-base font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Direct Office Access</span>
            </h4>
            <div className="text-xs text-ivory-300 space-y-3 leading-relaxed">
              <div>
                <strong className="text-white block mb-0.5">Physical Office:</strong>
                <p className="text-ivory-300">
                  Ward No. 06, Mata Mandir Tol,<br />
                  Arjundhara Municipality, Jhapa, Nepal
                </p>
              </div>
              <div>
                <strong className="text-white block mb-0.5">Official Inquiries:</strong>
                <p className="text-gold-400 font-bold">{COMPANY_INFO.phone}</p>
              </div>
              <div>
                <strong className="text-white block mb-0.5">Visiting Hours:</strong>
                <p className="text-ivory-300">
                  Sun – Fri: 9:30 AM – 5:30 PM<br />
                  Saturday: Guided Site Walks by Appointment
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Consumer Advisory & Anti-Fraud Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-forest-900/80 border border-gold-500/30 text-xs text-ivory-200 leading-relaxed shadow-sm flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-gold-400 block mb-1">Consumer Advisory & Anti-Fraud Notice:</strong>
            Kenisha Real Estate Pvt. Ltd. operates strictly through registered company accounts and formal legal documentation. We never request cash deposits through unverified intermediaries. All land deeds (लालपुर्जा / रजिस्ट्रेसन) are executed directly at the Land Revenue Office (मालपोत कार्यालय).
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <div>
            © {new Date().getFullYear()} Kenisha Real Estate Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Reg. No. {COMPANY_INFO.registrationNo}</span>
            <span>•</span>
            <span>PAN {COMPANY_INFO.panNo}</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="px-4 py-1.5 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-400 transition-colors flex items-center gap-1.5 border border-forest-700/80 font-semibold"
              title="Return to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
