import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PLANNING_SITES, COMPANY_INFO } from '../data/kenishaData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialSubject }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [parcel, setParcel] = useState(PLANNING_SITES[0].name);
  const [message, setMessage] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      const match = PLANNING_SITES.find(s => initialSubject.includes(s.code) || initialSubject.includes(s.name));
      if (match) {
        setParcel(match.name);
      }
      setMessage(initialSubject);
    }
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gold-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-gold-500/50 shrink-0 flex items-center justify-center">
              <img src={COMPANY_INFO.sealImage} alt="Seal" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="brand-font text-lg font-bold text-white">
                Schedule Site Inspection
              </h3>
              <p className="text-xs text-gold-400">
                Direct Appointment with Miss Kenisha's Corporate Office
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-forest-800 text-ivory-200 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="brand-font text-2xl font-bold text-forest-950 mb-2">
                Inspection Appointment Registered
              </h4>
              <p className="text-sm text-charcoal-700 mb-6 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your request to inspect parcels in <strong>{parcel}</strong> has been logged. Our office in Arjundhara will contact you at <strong>{phone}</strong> to confirm your appointment and guided perimeter walkthrough.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-brand-primary text-xs"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Karki"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+977 98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                  Target Planning Parcel / Sector
                </label>
                <select
                  value={parcel}
                  onChange={(e) => setParcel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                >
                  {PLANNING_SITES.map(s => (
                    <option key={s.id} value={s.name}>{s.name} ({s.ward})</option>
                  ))}
                  <option value="General Arjundhara Planning">Other Arjundhara Ward Sector</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                  Notes or Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Inquiring about a 1 Kattha plot facing road access..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-ivory-100 border border-ivory-300 flex items-center gap-2.5 text-xs text-charcoal-700">
                <ShieldCheck className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Verified corporate coordination with Miss Kenisha.</span>
              </div>

              <button
                type="submit"
                className="w-full btn-brand-primary py-3.5 text-sm justify-center"
              >
                <span>Confirm Inspection Request</span>
                <Send className="w-4 h-4 text-gold-400" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
