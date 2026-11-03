import React from 'react';
import { Building2, FileCheck2, Shovel, ShieldCheck, ArrowRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/kenishaData';

interface ServicesSectionProps {
  onOpenInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-gold-400" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6 text-gold-400" />;
      case 'Shovel': return <Shovel className="w-6 h-6 text-gold-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-ivory-200/50 border-b border-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="brand-font text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
            Services Ratified in Memorandum
          </h2>
          <p className="text-charcoal-700 text-base leading-relaxed">
            As approved in our Memorandum of Association (प्रबन्ध-पत्र) by the Office of the Company Registrar, Kenisha Real Estate Pvt. Ltd. holds formal corporate authority across four core real estate capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SERVICES.map((srv, idx) => (
            <div 
              key={idx}
              className="luxury-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-forest-950 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-gold-500/40 shadow-sm">
                  {getIcon(srv.icon)}
                </div>

                <div className="text-xs font-semibold text-gold-600 mb-1.5">
                  Clause 4({['ख', 'छ', 'घ', 'क'][idx]}) Authority
                </div>

                <h3 className="brand-font text-xl font-bold text-forest-950 mb-1 group-hover:text-forest-800 transition-colors">
                  {srv.title}
                </h3>

                <div className="text-xs font-semibold text-charcoal-600 mb-4">
                  {srv.nepaliTitle}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ivory-300">
                <button
                  onClick={() => onOpenInquiry(`Service Consultation: ${srv.title}`)}
                  className="w-full py-2.5 px-3 rounded-full text-xs font-bold bg-ivory-100 hover:bg-forest-900 hover:text-white text-forest-950 border border-ivory-300 transition-all flex items-center justify-center gap-2 group-hover:border-forest-900"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
