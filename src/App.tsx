import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlanningSitesSection } from './components/PlanningSitesSection';
import { DocumentArchive } from './components/DocumentArchive';
import { FounderProfile } from './components/FounderProfile';
import { LandCalculator } from './components/LandCalculator';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const handleOpenInquiry = (subject?: string) => {
    setInquirySubject(subject || 'General Consultation');
    setModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenInquiry={handleOpenInquiry} />
        <PlanningSitesSection onOpenInquiry={handleOpenInquiry} />
        <DocumentArchive />
        <FounderProfile onOpenInquiry={handleOpenInquiry} />
        <LandCalculator />
        <ServicesSection onOpenInquiry={handleOpenInquiry} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseInquiry}
        initialSubject={inquirySubject}
      />
    </div>
  );
};

export default App;
