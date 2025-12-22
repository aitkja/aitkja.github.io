import React, { useState, useEffect } from 'react';
import type { SectionRefs } from '../types';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';
import Logo_Text from '../images/logo/Logo_Text.webp'; // Changed to Logo_Text

interface HeaderProps {
  sectionRefs: SectionRefs;
}

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (refKey: string) => {
    sectionRefs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const headerClasses = isScrolled
    ? 'bg-white/80 shadow-md backdrop-blur-sm'
    : 'bg-gradient-to-b from-black/50 to-transparent';

  const textClasses = isScrolled
    ? 'text-slate-600 hover:text-slate-900'
    : 'text-white hover:text-slate-200';

  const mobileIconClasses = isScrolled
    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    : 'text-white hover:bg-white/20';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className={`cursor-pointer transition-colors duration-300 ${textClasses}`}>
              <img src={Logo_Text} alt="Forest City Laser Logo" className="h-32 w-auto" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.refKey)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${textClasses}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${mobileIconClasses}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel. Background is always light, so text is always dark. */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg block">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.refKey)}
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;