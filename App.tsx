
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GoogleReviews from './components/GoogleReviews';
import PopularProducts from './components/PopularProducts';
import Gallery from './components/Gallery';
import Process from './components/Process';
import QuoteForm from './components/QuoteForm';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import ScrollProgressBar from './components/ScrollProgressBar';
import Flyer from './components/Flyer';
import useDynamicSeo from './hooks/useDynamicSeo';
import { SEO_METADATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'flyer'>('home');
  const [keywordSlug, setKeywordSlug] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [quoteReference, setQuoteReference] = useState<string>('');

  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const paymentsRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    hero: heroRef,
    gallery: galleryRef,
    process: processRef,
    quote: quoteRef,
    about: aboutRef,
    contact: contactRef,
    payments: paymentsRef,
  };

  // Handle navigation based on URL and hide Tawk on flyer page
  useEffect(() => {
    const handleNavigate = () => {
      const path = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
      
      const isFlyer = path === '/flyer';
      setCurrentPage(isFlyer ? 'flyer' : 'home');

      // Check for keyword-rich power URLs
      if (path === '/laser-engraving-london-ontario') setKeywordSlug('laser-engraving-london-ontario');
      else if (path === '/laser-cutting-london-ontario') setKeywordSlug('laser-cutting-london-ontario');
      else if (path === '/engraving-london-ontario') setKeywordSlug('engraving-london-ontario');
      else if (path === '/leather-engraving-london-on' || path === '/leather-engraving-service') setKeywordSlug('leather-engraving-london-on');
      else if (path === '/wood-laser-engraving-london-on') setKeywordSlug('wood-laser-engraving-london-on');
      else if (path === '/acrylic-cutting-london-on' || path === '/custom-acrylic-cutting') setKeywordSlug('acrylic-cutting-london-on');
      else if (path === '/custom-signage-london-ontario') setKeywordSlug('custom-signage');
      else if (path === '/wedding-decor-event-signage-london-ontario') setKeywordSlug('wedding-events');
      else setKeywordSlug(null);
      
      // Hide/show Tawk widget based on page
      const tawkElement = document.querySelector('iframe[src*="tawk.to"]');
      if (tawkElement) {
        const tawkContainer = tawkElement.closest('div') as HTMLElement;
        if (tawkContainer) {
          tawkContainer.style.display = isFlyer ? 'none' : 'block';
        }
      }
    };

    handleNavigate();
    window.addEventListener('popstate', handleNavigate);
    
    return () => {
      window.removeEventListener('popstate', handleNavigate);
    };
  }, []);

  // Merge the keyword-specific metadata into the standard SEO metadata if a slug is active
  const dynamicMetadata = keywordSlug && SEO_METADATA[keywordSlug] 
    ? { ...SEO_METADATA, hero: SEO_METADATA[keywordSlug] } 
    : SEO_METADATA;

  useDynamicSeo(sectionRefs, dynamicMetadata);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const addToQuote = (refName: string) => {
    setQuoteReference(prev => {
      if (prev.trim() === '') return refName;
      const refs = prev.split(',').map(r => r.trim());
      if (!refs.includes(refName)) {
        return `${prev}, ${refName}`;
      }
      return prev;
    });

    quoteRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const FOREST_BG_URL = "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop";

  if (currentPage === 'flyer') {
    return <Flyer />;
  }

  return (
    <div className="text-slate-800 font-sans isolate">
      {/* This div creates the global, fixed background that flows through the site */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${FOREST_BG_URL})` }}
      />
      
      <ScrollProgressBar />
      <Header sectionRefs={sectionRefs} />
      <main>
        <Hero 
          ref={heroRef} 
          galleryRef={galleryRef} 
          quoteRef={quoteRef} 
          forcedHeadline={keywordSlug ? dynamicMetadata.hero.title.split('|')[0].trim() : undefined}
        />
        <section className="py-6 bg-slate-100/80 backdrop-blur-sm border-b border-slate-200/70">
          <GoogleReviews />
        </section>
        <PopularProducts openLightbox={openLightbox} />
        <Gallery ref={galleryRef} openLightbox={openLightbox} addToQuote={addToQuote} />
        <Process ref={processRef} />
        <QuoteForm ref={quoteRef} quoteReference={quoteReference} setQuoteReference={setQuoteReference} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer ref={paymentsRef} sectionRefs={sectionRefs} />
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default App;