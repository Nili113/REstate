import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, PLANNING_SITES } from '../data/kenishaData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Inquiry / Site Inspection',
    parcel: 'Arjundhara-06 Mata Mandir & Salbari Corridor',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-ivory-50 border-b border-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Coordinates & Information */}
          <div className="lg:col-span-5">
            <h2 className="brand-font text-3xl sm:text-4xl font-bold text-forest-950 mb-4">
              Visit Our Office in Arjundhara, Jhapa
            </h2>

            <p className="text-charcoal-700 text-sm leading-relaxed mb-8">
              We welcome prospective home builders, land purchasers, and legal representatives to inspect 
              our original registered deeds, cadastral survey maps, and municipal clearances in person.
            </p>

            <div className="space-y-6 mb-8 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/40 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-forest-950">Registered Corporate Office</div>
                  <div className="text-charcoal-700 leading-snug mt-0.5">
                    {COMPANY_INFO.registeredOffice}
                  </div>
                  <div className="text-xs text-charcoal-500 font-medium mt-1">
                    {COMPANY_INFO.registeredOfficeNepali}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/40 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-forest-950">Direct Consultation Desk</div>
                  <div className="text-charcoal-700 mt-0.5">
                    Official Inquiries: <strong>{COMPANY_INFO.phone}</strong>
                  </div>
                  <div className="text-xs text-charcoal-500 mt-0.5">
                    Direct Contact Reference: Miss Kenisha (Ranjita Dulal)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/40 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-forest-950">Office Schedule</div>
                  <div className="text-charcoal-700 mt-0.5">
                    Sunday – Friday: 9:30 AM – 5:30 PM
                  </div>
                  <div className="text-xs text-charcoal-500 mt-0.5">
                    Saturday: Site Inspections & Walks by Prior Appointment
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-5 rounded-2xl bg-white border border-ivory-400 shadow-subtle flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-forest-800 shrink-0 mt-0.5" />
              <div className="text-xs text-charcoal-700 leading-relaxed">
                <strong className="text-forest-950 block mb-1">Direct Developer Verification:</strong>
                All transactions are executed through formal registered sale deeds (राजीनामा) witnessed at the Arjundhara Sub-branch of the Land Revenue Office with verified bank settlement.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-ivory-300 pb-5 mb-6">
                <div>
                  <h3 className="brand-font text-2xl font-bold text-forest-950">
                    Direct Inquiry & Site Inspection
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Your request is submitted directly to Miss Kenisha's corporate schedule.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-gold-500/40 shrink-0 flex items-center justify-center">
                  <img src={COMPANY_INFO.sealImage} alt="Seal" className="w-full h-full object-contain" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="brand-font text-2xl font-bold text-forest-950 mb-2">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-sm text-charcoal-700 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong>{formState.fullName}</strong>. Your inspection request for <strong>{formState.parcel}</strong> has been logged. Our office in Arjundhara will contact you at <strong>{formState.phone}</strong> to confirm your appointment.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        fullName: '',
                        phone: '',
                        email: '',
                        subject: 'General Inquiry / Site Inspection',
                        parcel: 'Arjundhara-06 Mata Mandir & Salbari Corridor',
                        preferredDate: '',
                        message: ''
                      });
                    }}
                    className="btn-brand-primary text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Binod Basnet"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+977 98XXXXXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Inquiry Purpose
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      >
                        <option value="Residential Parcel Purchase">Residential Parcel Purchase</option>
                        <option value="Commercial Road-Facing Plot">Commercial Road-Facing Plot</option>
                        <option value="Land Planning & Valuation Audit">Land Planning & Valuation Audit</option>
                        <option value="Site Inspection & Survey Walk">Site Inspection & Survey Walk</option>
                        <option value="Meeting with Miss Kenisha">Meeting with Miss Kenisha</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                        Select Planning Sector
                      </label>
                      <select
                        value={formState.parcel}
                        onChange={(e) => setFormState({ ...formState, parcel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                      >
                        {PLANNING_SITES.map(s => (
                          <option key={s.id} value={s.name}>{s.name} ({s.ward})</option>
                        ))}
                        <option value="General Arjundhara Area">Other Arjundhara Ward Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                      Specific Requirements or Cadastre Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Inquiring about a 1 Kattha parcel facing east with 20 ft road access..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-brand-primary py-4 text-sm justify-center"
                  >
                    <span>Submit Official Inspection Booking</span>
                    <Send className="w-4 h-4 text-gold-400" />
                  </button>

                  <p className="text-[11px] text-center text-charcoal-500 pt-1 font-medium">
                    Direct submission to Kenisha Real Estate Corporate Office. We do not distribute contact details to third-party brokers.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
