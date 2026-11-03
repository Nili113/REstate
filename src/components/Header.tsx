import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, MessageSquareQuote } from 'lucide-react';
import { COMPANY_INFO } from '../data/kenishaData';

interface HeaderProps {
  onOpenInquiry: (initialSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Notice Bar (from Reference) */}
      <div className="bg-forest-950 text-white text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-gold-500 text-forest-950 uppercase tracking-wider">
              Official Notice
            </span>
            <span className="text-ivory-300 hidden sm:inline text-xs">
              Jhapa Land Planning Portal — Direct Local Verification & Statutory Clearance
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="text-ivory-200">
              <span className="text-gold-400 font-semibold">Contact:</span>{' '}
              <strong className="text-white">Miss Kenisha (Ranjita Dulal)</strong>
            </span>
            <span className="hidden md:inline text-forest-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-ivory-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Arjundhara Municipality, Jhapa</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md py-2.5 border-b border-ivory-400' 
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-ivory-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-gold-500/70 shadow-sm shrink-0 flex items-center justify-center">
              <img
                src={COMPANY_INFO.sealImage}
                alt="Kenisha Real Estate Seal"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="brand-font text-lg sm:text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors leading-tight">
                Kenisha Real Estate
              </span>
              <span className="text-xs text-charcoal-500 font-medium tracking-wide">
                केनिसा रियल स्टेट • Arjundhara, Jhapa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-charcoal-700">
            <a href="#sites" className="hover:text-forest-900 transition-colors">
              Our Projects
            </a>
            <a href="#credentials" className="hover:text-forest-900 transition-colors">
              Documents
            </a>
            <a href="#founder" className="hover:text-forest-900 transition-colors">
              Miss Kenisha
            </a>
            <a href="#calculator" className="hover:text-forest-900 transition-colors">
              Terai Calculator
            </a>
            <a href="#services" className="hover:text-forest-900 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-forest-900 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Nav Inquire About Land')}
              className="btn-brand-primary text-xs"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Inquire About Land</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal-800 hover:text-forest-950"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-ivory-300 px-6 py-5 shadow-xl text-charcoal-800">
            <div className="flex flex-col gap-3.5 text-sm font-semibold">
              <a
                href="#sites"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                Our Projects in Jhapa
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                Verified Government Documents
              </a>
              <a
                href="#founder"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                About Miss Kenisha (Ranjita Dulal)
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                Terai Land Calculator
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                Scope & Services
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-forest-900"
              >
                Contact & Location
              </a>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry('Mobile Inquire About Land');
                  }}
                  className="w-full btn-brand-primary justify-center text-xs"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Inquire About Land</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
