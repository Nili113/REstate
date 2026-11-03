import React from 'react';
import { Compass, Map, Building, ShieldCheck, MapPin, ArrowRight, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/kenishaData';

interface HeroProps {
  onOpenInquiry: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-br from-[#fbf9f5] via-[#f5f0e6] to-[#ede6d8] border-b border-ivory-400">
      
      {/* Background Landscape Photo Masked on the Right (Inspired by Reference) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[58%] h-full bg-cover bg-center opacity-25 lg:opacity-85 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/images/hero-landscape.jpg')`,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clean, Hooky, Easy-on-the-Eyes Hero Content */}
          <div className="lg:col-span-7">
            
            {/* Hooky, Prestigious Headline in Outfit */}
            <h1 className="brand-font text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 leading-[1.12] mb-5 tracking-tight">
              Find Your Place in <br className="hidden sm:inline" />
              <span className="text-gold-500 font-semibold">Arjundhara</span>
            </h1>

            {/* Clean, De-Cluttered Hook (Easy on the Eyes) */}
            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed mb-7 max-w-xl font-normal">
              Explore planned residential sections across <strong>Arjundhara-06 (Mata Mandir Tol)</strong>, <strong>Rana Gaun</strong>, and <strong>Salbari</strong>. Complete with verified cadastral boundaries, municipal clearances, and direct founder verification.
            </p>

            {/* Two Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                href="#sites"
                className="btn-brand-primary"
              >
                <Map className="w-4 h-4 text-gold-400" />
                <span>Explore Project Sites</span>
              </a>

              <button
                onClick={() => onOpenInquiry('Hero Inquire About Land')}
                className="btn-brand-secondary"
              >
                <span>Inquire About Land</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Transparent Guidance Notice Bar (from Reference) */}
            <div className="p-4 rounded-xl bg-white/90 border border-ivory-400 text-xs text-charcoal-700 max-w-xl shadow-subtle flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-forest-950">Statutory Notice:</strong> Official blueprints, plot demarcations, and inspection bookings are verified directly with <strong>Miss Kenisha</strong> at our Arjundhara office.
                <span className="block text-[11px] text-charcoal-500 mt-0.5">
                  Reg # {COMPANY_INFO.registrationNo} • PAN: {COMPANY_INFO.panNo}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Beautifully Framed Executive Portrait of Miss Kenisha */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              
              <div className="luxury-card p-3.5 overflow-hidden">
                
                {/* Photo frame */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-forest-950 shadow-inner">
                  <img
                    src={COMPANY_INFO.portraitImage}
                    alt="Miss Kenisha (Ranjita Dulal) - Founder & MD"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  
                  {/* Subtle lower gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-transparent p-4 text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold-400 block mb-0.5">
                      Founder & Managing Director
                    </span>
                    <div className="brand-font text-xl font-bold text-white leading-tight">
                      Miss Kenisha
                    </div>
                    <div className="text-xs text-ivory-300 mt-0.5">
                      Ranjita Dulal (रंजिता दुलाल)
                    </div>
                  </div>
                </div>

                {/* Integrated Corporate Seal Bar */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-ivory-100 border border-ivory-300 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-gold-500/50 shrink-0 shadow-sm flex items-center justify-center">
                      <img
                        src={COMPANY_INFO.sealImage}
                        alt="Kenisha Corporate Seal"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-forest-950 text-xs">Official Corporate Seal</div>
                      <span className="text-[11px] text-charcoal-500">Arjundhara-6, Jhapa</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 border border-forest-700/20">
                    100% Equity
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Quick Highlight Bar (Directly from Reference) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-2xl border border-ivory-400 p-5 shadow-elevated">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 border border-gold-500/30">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-forest-950 text-sm">4 Planned Project Sectors</div>
              <p className="text-xs text-charcoal-500">Mapped planning tracts across Arjundhara and Jhapa</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-ivory-300 pt-3 md:pt-0 md:pl-4">
            <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center shrink-0 border border-forest-600/20">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-forest-950 text-sm">Direct Founder Authority</div>
              <p className="text-xs text-charcoal-500">Inquiries coordinated with Miss Kenisha (Ranjita Dulal)</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-ivory-300 pt-3 md:pt-0 md:pl-4">
            <div className="w-12 h-12 rounded-xl bg-ivory-200 text-forest-900 flex items-center justify-center shrink-0 border border-ivory-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-forest-950 text-sm">On-Site Inspection Visits</div>
              <p className="text-xs text-charcoal-500">Guided parcel walkthroughs and boundary checks</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
