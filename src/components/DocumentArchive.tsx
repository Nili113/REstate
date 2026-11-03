import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Calendar, 
  Building,
  FileCheck
} from 'lucide-react';
import { LEGAL_CREDENTIALS, LegalCredential } from '../data/kenishaData';

export const DocumentArchive: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDoc, setSelectedDoc] = useState<LegalCredential | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Statutory Records (9 Key Records)' },
    { id: 'incorporation', label: 'Incorporation & Charter' },
    { id: 'tax', label: 'Tax Clearances (80/81 & 81/82)' },
    { id: 'shareholder', label: 'Share Register & Corporate Seal' },
    { id: 'compliance', label: 'CAMIS Digital & Annual Return' },
  ];

  const filteredDocs = activeCategory === 'all'
    ? LEGAL_CREDENTIALS
    : LEGAL_CREDENTIALS.filter(d => d.category === activeCategory);

  return (
    <section id="credentials" className="py-24 bg-ivory-100 border-b border-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="brand-font text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
            Official Registrations & Tax Clearances
          </h2>
          <p className="text-charcoal-700 text-base leading-relaxed">
            Every document establishing <strong>Kenisha Real Estate Pvt. Ltd.</strong> is available for public verification. Inspect original high-resolution scans, official red stamps, Assistant Registrar signatures, and CAMIS QR codes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'bg-white text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.map((doc) => (
            <div 
              key={doc.id}
              className="luxury-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Document Image Thumbnail */}
              <div 
                className="relative aspect-[4/3] bg-forest-950/5 overflow-hidden cursor-pointer border-b border-ivory-300"
                onClick={() => {
                  setSelectedDoc(doc);
                  setIsZoomed(false);
                }}
              >
                <img 
                  src={doc.documentImage} 
                  alt={doc.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-forest-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-forest-900 text-xs font-bold flex items-center gap-2 shadow-lg border border-gold-500/50">
                    <Eye className="w-4 h-4 text-gold-400" />
                    Inspect Official Scan
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-forest-950 shadow-sm border border-ivory-300">
                    {doc.identifier}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-500 mb-2 font-medium">
                    <Building className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                    <span className="truncate">{doc.authority}</span>
                  </div>

                  <h3 className="brand-font text-lg font-bold text-forest-950 group-hover:text-forest-800 transition-colors mb-1">
                    {doc.title}
                  </h3>
                  
                  <div className="text-xs font-bold text-gold-600 mb-3">
                    {doc.nepaliTitle}
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed mb-4">
                    {doc.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="bg-ivory-100 p-3.5 rounded-xl border border-ivory-300 space-y-1.5 mb-5 text-xs text-charcoal-800">
                    {doc.keyPoints.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-ivory-200 flex items-center justify-between text-xs text-charcoal-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-forest-700" />
                    <span>{doc.issuedDate} ({doc.nepaliDate})</span>
                  </span>

                  <button
                    onClick={() => {
                      setSelectedDoc(doc);
                      setIsZoomed(false);
                    }}
                    className="font-bold text-forest-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Archive Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-ivory-400 shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-forest-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/40">
              <FileCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="brand-font font-bold text-forest-950 text-lg">
                29-Page Complete Legal Dossier on Record
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 mt-1 max-w-2xl leading-relaxed">
                Includes original Memorandum of Association (प्रबन्ध-पत्र), Articles of Association (नियमावली), 
                Share Register (शेयरधनी दर्ता किताब), and certified tax returns from FY 2080 to FY 2082 B.S. All available for in-person review at our Arjundhara-6 office.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              setSelectedDoc(LEGAL_CREDENTIALS[0]);
              setIsZoomed(false);
            }}
            className="btn-brand-primary text-xs shrink-0"
          >
            <Eye className="w-4 h-4 text-gold-400" />
            <span>Inspect Verified Scan Archive</span>
          </button>
        </div>

      </div>

      {/* Lightbox Document Modal */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-950/70 backdrop-blur-md"
          onClick={() => setSelectedDoc(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-ivory-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-forest-950 text-ivory-100 flex items-center justify-between border-b border-forest-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-forest-900 text-gold-400 border border-gold-500/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="brand-font text-lg font-bold text-white">
                    {selectedDoc.title}
                  </h3>
                  <p className="text-xs text-ivory-300">
                    {selectedDoc.nepaliTitle} • {selectedDoc.identifier}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded hover:bg-forest-800 text-ivory-200 transition-colors"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>
                <a
                  href={selectedDoc.documentImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-forest-800 text-ivory-200 transition-colors"
                  title="Open Full Image"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 rounded-full hover:bg-red-900/60 text-ivory-200 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body: Image Viewer with Scroll/Zoom */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-ivory-200 flex justify-center items-start">
              <div className={`transition-all duration-300 ${isZoomed ? 'w-[150%] max-w-none' : 'w-full max-w-3xl'}`}>
                <img
                  src={selectedDoc.documentImage}
                  alt={selectedDoc.title}
                  className="w-full h-auto rounded-lg shadow-xl border border-ivory-400 bg-white"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-ivory-100 border-t border-ivory-300 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-700">
              <div className="flex flex-wrap items-center gap-4">
                <span><strong>Issuing Authority:</strong> {selectedDoc.authority}</span>
                <span>•</span>
                <span><strong>Date:</strong> {selectedDoc.issuedDate} ({selectedDoc.nepaliDate})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-forest-800 font-bold flex items-center gap-1.5 bg-forest-100 px-3 py-1 rounded-full border border-forest-700/20">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" /> Government Verified Record
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
