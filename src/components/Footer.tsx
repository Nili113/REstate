import React from 'react';
import { 
  ArrowUp, 
  ArrowUpRight,
  Phone, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Building2, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/kenishaData';

interface FooterProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquiryClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry('Footer CTA: Schedule Inspection');
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#f8f6f0] border-t border-ivory-300">
      
      {/* 1. Curved Dark CTA Card (Inspired by Reference Banner) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#183628] via-[#10251c] to-[#0a1811] border border-forest-800/60 px-6 sm:px-12 py-16 sm:py-20 text-center overflow-hidden shadow-2xl">
          
          {/* Subtle Top Radial Glow / Vignette */}
          <div 
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full pointer-events-none opacity-40 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(197, 155, 39, 0.4) 0%, rgba(30, 63, 48, 0.2) 50%, transparent 80%)'
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="brand-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to secure your land in Arjundhara?
            </h3>
            
            <p className="text-ivory-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Directly consult with <strong>Miss Kenisha</strong> with verified cadastral boundaries, statutory clearances, and guided on-site parcel inspections.
            </p>

            <button
              onClick={handleInquiryClick}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-forest-950 font-bold text-sm hover:bg-gold-400 hover:text-forest-950 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Schedule On-Site Inspection</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Floating Island Card Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(20,30,24,0.06)] border border-[#e8e2d5]">
          
          {/* Main Directory Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Brand & Corporate Identity Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Logo & Seal */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border border-gold-500/60 shadow-sm shrink-0 flex items-center justify-center">
                    <img
                      src={COMPANY_INFO.sealImage}
                      alt="Kenisha Real Estate Seal"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="brand-font text-lg font-bold text-forest-950 block leading-tight">
                      Kenisha Real Estate
                    </span>
                    <span className="text-xs text-charcoal-500 font-medium">
                      केनिसा रियल स्टेट प्रा. लि.
                    </span>
                  </div>
                </div>

                {/* Statutory Scope Summary */}
                <p className="text-charcoal-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                  Registered private limited company under the Companies Act 2006 (Reg #{COMPANY_INFO.registrationNo}, PAN {COMPANY_INFO.panNo}). Solely promoted and directed by Miss Kenisha (Ranjita Dulal).
                </p>
              </div>

              {/* Direct Quick Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ivory-100 hover:bg-ivory-200 text-forest-950 border border-ivory-300 transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-800" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ivory-100 hover:bg-ivory-200 text-forest-950 border border-ivory-300 transition-colors font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-forest-800" />
                  <span>Arjundhara-06, Jhapa</span>
                </a>
              </div>
            </div>

            {/* Right Link Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
              
              {/* Column 1: Planning Sectors */}
              <div>
                <h4 className="font-bold text-forest-950 text-xs uppercase tracking-wider mb-4">
                  Planning Sites
                </h4>
                <ul className="space-y-2.5 text-charcoal-600">
                  <li>
                    <a href="#sites" className="hover:text-forest-900 transition-colors">
                      Arjundhara-06 Mata Mandir
                    </a>
                  </li>
                  <li>
                    <a href="#sites" className="hover:text-forest-900 transition-colors">
                      Rana Gaun Sector (Ward 08)
                    </a>
                  </li>
                  <li>
                    <a href="#sites" className="hover:text-forest-900 transition-colors">
                      Salbari Green Sector (Ward 09)
                    </a>
                  </li>
                  <li>
                    <a href="#calculator" className="hover:text-forest-900 transition-colors font-semibold text-forest-800">
                      Terai Land Calculator
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Statutory Dossier */}
              <div>
                <h4 className="font-bold text-forest-950 text-xs uppercase tracking-wider mb-4">
                  Public Dossier
                </h4>
                <ul className="space-y-2.5 text-charcoal-600">
                  <li>
                    <a href="#credentials" className="hover:text-forest-900 transition-colors">
                      Company Incorporation
                    </a>
                  </li>
                  <li>
                    <a href="#credentials" className="hover:text-forest-900 transition-colors">
                      Corporate PAN Certificate
                    </a>
                  </li>
                  <li>
                    <a href="#credentials" className="hover:text-forest-900 transition-colors">
                      Tax Clearance (FY 2081/82)
                    </a>
                  </li>
                  <li>
                    <a href="#credentials" className="hover:text-forest-900 transition-colors">
                      CAMIS QR Government Record
                    </a>
                  </li>
                  <li>
                    <a href="#credentials" className="hover:text-forest-900 transition-colors font-semibold text-gold-600">
                      29-Page Legal Archive →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Corporate Office */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold text-forest-950 text-xs uppercase tracking-wider mb-4">
                  Governance
                </h4>
                <ul className="space-y-2.5 text-charcoal-600">
                  <li>
                    <a href="#founder" className="hover:text-forest-900 transition-colors">
                      Miss Kenisha (Ranjita Dulal)
                    </a>
                  </li>
                  <li>
                    <span className="text-charcoal-500">
                      Sole Promoter (100% Equity)
                    </span>
                  </li>
                  <li>
                    <span className="text-charcoal-500">
                      Sun–Fri: 9:30 AM – 5:30 PM
                    </span>
                  </li>
                  <li>
                    <span className="text-charcoal-500">
                      Official Bank Accounts Only
                    </span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Thin Divider Line */}
          <div className="border-t border-[#ede7db] my-8" />

          {/* Sub-Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
            <div>
              © {new Date().getFullYear()} Kenisha Real Estate Pvt. Ltd. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <span>Reg #{COMPANY_INFO.registrationNo}</span>
              <span>•</span>
              <span>PAN {COMPANY_INFO.panNo}</span>
              <span>•</span>
              <button
                onClick={scrollToTop}
                className="hover:text-forest-900 transition-colors flex items-center gap-1 font-semibold text-forest-800"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Ghost Typography Watermark (Inspired by "Graphy" in Reference) */}
      <div 
        aria-hidden="true" 
        className="w-full overflow-hidden text-center select-none pointer-events-none -mt-10 sm:-mt-16 md:-mt-20 pb-4"
      >
        <span className="inline-block font-extrabold tracking-widest text-[#132b21]/[0.05] text-[6.5rem] sm:text-[11rem] md:text-[15rem] leading-none uppercase brand-font">
          KENISHA
        </span>
      </div>

    </footer>
  );
};
