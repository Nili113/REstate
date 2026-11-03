import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, Eye, X, ShieldAlert, UserCheck } from 'lucide-react';
import { PLANNING_SITES } from '../data/kenishaData';

interface PlanningSitesSectionProps {
  onOpenInquiry: (projectName: string) => void;
}

export const PlanningSitesSection: React.FC<PlanningSitesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedMap, setSelectedMap] = useState<{ title: string; image: string } | null>(null);

  return (
    <section id="sites" className="py-24 bg-ivory-200/60 border-b border-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="brand-font text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
            Our Project Sites in Jhapa
          </h2>
          <p className="text-charcoal-700 text-base leading-relaxed">
            Explore verified land planning sectors in Arjundhara mapped and demarcated from official layout cadastre blueprints.
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PLANNING_SITES.map((site) => (
            <article 
              key={site.id}
              className="luxury-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Cadastre Map Image Preview */}
                <div className="relative aspect-[16/10] bg-forest-950 overflow-hidden group">
                  <img
                    src={site.mapImage}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  
                  {/* Status & Ward Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-forest-950/90 text-ivory-100 text-xs font-semibold backdrop-blur-md border border-forest-700/60 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 inline mr-1" />
                      {site.ward}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-500 text-white text-xs font-bold shadow-sm">
                      {site.status}
                    </span>
                  </div>

                  {/* High-res map inspect button */}
                  <button
                    onClick={() => setSelectedMap({ title: site.name, image: site.mapImage })}
                    className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-forest-950/90 hover:bg-forest-900 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all border border-forest-700 shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-400" />
                    <span>View Cadastre Blueprint</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-semibold text-gold-600 mb-1.5 flex items-center gap-1.5">
                    <span>{site.municipality}, {site.district}</span>
                    <span className="text-charcoal-300">•</span>
                    <span className="text-charcoal-500 font-semibold">{site.code}</span>
                  </div>

                  <h3 className="brand-font text-2xl font-bold text-forest-950 mb-1">
                    {site.name}
                  </h3>
                  <div className="text-xs font-semibold text-charcoal-600 mb-4">
                    {site.nepaliName}
                  </div>

                  {/* Associated Contact Reference */}
                  <div className="p-3 rounded-xl bg-ivory-100 border border-ivory-300 flex items-center gap-2.5 mb-5 text-xs">
                    <UserCheck className="w-4 h-4 text-forest-800 shrink-0" />
                    <div className="text-charcoal-700">
                      <strong>Contact Reference:</strong> Miss Kenisha (Ranjita Dulal) — Managing Director
                    </div>
                  </div>

                  <p className="text-sm text-charcoal-700 leading-relaxed mb-5">
                    {site.locationSummary}
                  </p>

                  {/* Road & Access info */}
                  <div className="p-3.5 rounded-xl bg-ivory-100 border border-ivory-300 mb-5 flex items-center gap-2.5 text-xs text-charcoal-800">
                    <Navigation className="w-4 h-4 text-forest-700 shrink-0" />
                    <span><strong>Road Access:</strong> {site.accessRoad}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 text-xs text-charcoal-700">
                    {site.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-gold-500 font-bold">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Details Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs border-t border-ivory-300 pt-5">
                    {site.specs.map((spec, idx) => (
                      <div key={idx} className="bg-ivory-50 p-2.5 rounded-xl border border-ivory-200">
                        <span className="text-charcoal-500 block text-[11px] font-medium">{spec.label}</span>
                        <strong className="text-forest-950 font-bold">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 bg-ivory-50 border-t border-ivory-300 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-charcoal-600">
                  Ref: <strong className="text-forest-950">{site.code}</strong>
                </span>

                <button
                  onClick={() => onOpenInquiry(`Inquiry about ${site.name} (${site.code})`)}
                  className="btn-brand-primary text-xs"
                >
                  <span>Inquire About Land</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Factual Integrity Commitment Banner (from Reference) */}
        <div className="p-5 rounded-2xl bg-white border border-ivory-400 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal-700">
            <div className="w-10 h-10 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-forest-700" />
            </div>
            <div>
              <strong className="text-forest-950 block">Factual Integrity Commitment:</strong>
              We do not publish speculative land prices or estimated plot counts online. Inquiries, plot ledgers, and site inspection bookings are coordinated directly with Miss Kenisha.
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry('Ask Question regarding Planning Sites')}
            className="btn-brand-secondary text-xs shrink-0"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Blueprint Lightbox Modal */}
      {selectedMap && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-md"
          onClick={() => setSelectedMap(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-ivory-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-800">
              <div>
                <h3 className="brand-font text-lg font-bold">
                  {selectedMap.title}
                </h3>
                <p className="text-xs text-gold-400">Cadastre Survey Blueprint Map</p>
              </div>
              <button 
                onClick={() => setSelectedMap(null)}
                className="p-1.5 rounded-full hover:bg-forest-800 text-ivory-200"
                aria-label="Close blueprint modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-ivory-200 flex items-center justify-center">
              <img 
                src={selectedMap.image} 
                alt={selectedMap.title}
                className="max-w-full max-h-[75vh] object-contain rounded shadow-lg"
              />
            </div>
            <div className="px-6 py-4 bg-ivory-100 border-t border-ivory-300 text-xs text-charcoal-700 flex justify-between items-center">
              <span>Cadastral Layout Blueprint from Kenisha Real Estate Corporate Records</span>
              <button 
                onClick={() => {
                  const title = selectedMap.title;
                  setSelectedMap(null);
                  onOpenInquiry(`Schedule on-site perimeter walk for ${title}`);
                }}
                className="btn-brand-primary text-xs"
              >
                <span>Schedule Site Walk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
