import React from 'react';
import { UserCheck, Shield, Calendar, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/kenishaData';

interface FounderProfileProps {
  onOpenInquiry: (subject?: string) => void;
}

export const FounderProfile: React.FC<FounderProfileProps> = ({ onOpenInquiry }) => {
  return (
    <section id="founder" className="py-24 bg-ivory-50 border-b border-ivory-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Formal Title Stamp */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="luxury-card p-4 overflow-hidden">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-forest-950 shadow-inner">
                  <img
                    src={COMPANY_INFO.portraitImage}
                    alt="Miss Kenisha (Ranjita Dulal) - Founder & Managing Director"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                </div>

                <div className="pt-5 pb-2 px-3 text-center">
                  <div className="text-xs font-semibold text-gold-600 mb-1">
                    Statutory Leadership & Sole Promoter
                  </div>
                  <h3 className="brand-font text-2xl font-bold text-forest-950">
                    Miss Kenisha
                  </h3>
                  <p className="text-xs text-charcoal-600 font-medium mt-0.5">
                    Legal Name: <strong>Ranjita Dulal (रंजिता दुलाल)</strong>
                  </p>
                  <p className="text-xs text-forest-800 font-bold mt-1">
                    Founder, Chairperson & Managing Director
                  </p>
                </div>

                {/* Straightened Seal in Footer of Card */}
                <div className="mt-4 p-3 bg-ivory-100 rounded-xl border border-ivory-300 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border border-gold-500/40 shrink-0 shadow-sm flex items-center justify-center">
                      <img 
                        src={COMPANY_INFO.sealImage} 
                        alt="Kenisha Official Seal" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="text-[11px] text-charcoal-700">
                      <div className="font-bold text-forest-950">Official Circular Seal</div>
                      <span className="text-charcoal-500">Arjundhara-06, Jhapa</span>
                    </div>
                  </div>
                  <span className="text-[11px] bg-forest-100 text-forest-800 font-bold px-2.5 py-1 rounded-full border border-forest-700/20">
                    100% Equity
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Ethos & Verified Ledger Details */}
          <div className="lg:col-span-7">
            
            <h2 className="brand-font text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 mb-6 leading-tight">
              "We Don't Sell Land on Promises. We Sell Land on Registered Deeds."
            </h2>

            <div className="text-charcoal-700 text-base leading-relaxed space-y-4 mb-8">
              <p>
                Directed by <strong>Miss Kenisha (Ranjita Dulal)</strong>, Kenisha Real Estate Pvt. Ltd. was established to bring disciplined, verified land planning standards to eastern Nepal. Having family roots in <strong>Maipokhari, Ilam-04</strong> and commercial headquarters in <strong>Arjundhara-06, Jhapa</strong>, Miss Kenisha personally supervises all land acquisitions, layout boundaries, and cadastre surveys.
              </p>
              <p>
                In a market frequently complicated by unverified intermediaries, our corporate standard is uncompromising: 
                <strong> every plot is pre-audited through the Land Revenue Office (मालपोत) and Municipality, backed by a 100 Million NPR authorized capital base, and transferred with full tax compliance.</strong>
              </p>
            </div>

            {/* Factual Ledger Specifications Table */}
            <div className="bg-white rounded-2xl border border-ivory-400 overflow-hidden shadow-subtle mb-8">
              <div className="px-6 py-3.5 bg-forest-950 text-ivory-100 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Verified Corporate Credentials</span>
                <Shield className="w-4 h-4 text-gold-400" />
              </div>
              <div className="divide-y divide-ivory-200 text-xs sm:text-sm">
                <div className="px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-charcoal-500 font-medium">Founder & Managing Director</span>
                  <span className="font-bold text-forest-950">Miss Kenisha / Ranjita Dulal (रंजिता दुलाल)</span>
                </div>
                <div className="px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-charcoal-500 font-medium">Permanent Origin</span>
                  <span className="font-semibold text-charcoal-800">Maipokhari / Ilam Municipality-4, Nepal</span>
                </div>
                <div className="px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-charcoal-500 font-medium">Corporate Headquarters</span>
                  <span className="font-bold text-forest-950">Ward 06, Mata Mandir Tol, Arjundhara, Jhapa</span>
                </div>
                <div className="px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-charcoal-500 font-medium">Authorized Capital</span>
                  <span className="font-bold text-forest-950">NPR 100,000,000 (10 Crore)</span>
                </div>
                <div className="px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-charcoal-500 font-medium">Paid-Up Equity Holding</span>
                  <span className="font-bold text-forest-800">99,000 Equity Shares (100% Sole Promoter)</span>
                </div>
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('Direct Consultation with Miss Kenisha')}
                className="btn-brand-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult with Miss Kenisha</span>
              </button>
              
              <a
                href="#contact"
                className="btn-brand-secondary"
              >
                <span>View Office Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
