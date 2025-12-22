import React, { forwardRef, RefObject } from 'react';
import type { SectionRefs } from '../types';
import { NAV_LINKS } from '../constants';
import { CanadianFlagIcon } from './IconComponents';
import Full_Logo from '../images/logo/Full_Logo.webp';
import Canadian_Flag from '../images/misc/Canadian_Flag.png';
import Apple_Pay from '../images/misc/apple-pay.png';
import Google_Pay from '../images/misc/google-pay.png';
import Mastercard_Icon from '../images/misc/Mastercard.png';
import Visa_Icon from '../images/misc/visa.png';
import Amex_Icon from '../images/misc/amex.png';

interface FooterProps {
  sectionRefs: SectionRefs;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ sectionRefs }, ref) => {
    
  const scrollToSection = (refKey: string) => {
    sectionRefs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <footer className="bg-slate-200/95 text-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center text-center">
             <img src={Full_Logo} alt="Forest City Laser Full Logo" className="h-24 w-auto mb-4 text-white" />
            <p className="text-sm">
              Custom laser engraving and cutting for wood, acrylic, and leather in London, Ontario. Based in Riverbend, serving all of South-Western Ontario.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                 <li key={link.refKey}>
                    <button onClick={() => scrollToSection(link.refKey)} className="text-sm hover:text-slate-900 transition-colors">{link.name}</button>
                 </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@forestcitylaser.com" className="hover:text-slate-900 transition-colors">info@forestcitylaser.com</a></li>
              <li>Location: Riverbend, London, ON</li>
              <li className="text-xs text-slate-500">(Contact for appointments)</li>
            </ul>
          </div>

          <section ref={ref}>
            <h4 className="font-semibold text-slate-800 mb-4">Make a Payment</h4>
            <p className="text-sm mb-4">We accept all major credit cards, Apple Pay, and Google Pay.</p>
            <div className="flex justify-center gap-4 mb-4">
                <img src={Visa_Icon} alt="Visa" className="h-8 w-auto" />
                <img src={Mastercard_Icon} alt="Mastercard" className="h-8 w-auto" />
                <img src={Amex_Icon} alt="American Express" className="h-8 w-auto" />
                <img src={Apple_Pay} alt="Apple Pay" className="h-8 w-auto" />
                <img src={Google_Pay} alt="Google Pay" className="h-8 w-auto" />
            </div>
            <a 
              href="https://square.link/u/xrE4uABv?src=embed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-all transform hover:scale-105"
            >
              Make a Secure Payment
            </a>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-300 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} Forest City Laser. All rights reserved.</p>
            <div className="mt-3 flex items-center justify-center gap-6 text-slate-700">
              <span className="text-sm">Follow us</span>
              <a
                href="https://www.instagram.com/forestcitylaser/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors"
                aria-label="Visit our Instagram profile"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.5 6.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580529627577"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors"
                aria-label="Visit our Facebook page"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M13.5 3H15a1 1 0 011 1v3h-2.5a1.5 1.5 0 00-1.5 1.5V11H16l-.5 3h-3v7h-3v-7H7v-3h2.5V8.5A3.5 3.5 0 0113 5h.5z"/></svg>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-slate-800">Proudly Canadian</span>
                <img src={Canadian_Flag} alt="Canadian Flag" className="h-4 w-auto" />
            </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;