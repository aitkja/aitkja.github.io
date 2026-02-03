
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
import Blog from './components/Blog';
import BlogPostView from './components/BlogPostView';
import useDynamicSeo from './hooks/useDynamicSeo';
import { SEO_METADATA, BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'flyer' | 'blog' | 'blog-post'>('home');
  const [keywordSlug, setKeywordSlug] = useState<string | null>(null);
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);
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

  // Handle navigation based on URL
  useEffect(() => {
    const handleNavigate = () => {
      const path = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
      
      const isFlyer = path === '/flyer';
      const isBlogList = path === '/blog';
      const isBlogPost = path.startsWith('/blog/') && path.length > 6;

      if (isFlyer) {
        setCurrentPage('flyer');
      } else if (isBlogList) {
        setCurrentPage('blog');
      } else if (isBlogPost) {
        const slug = path.replace('/blog/', '');
        setSelectedPostSlug(slug);
        setCurrentPage('blog-post');
      } else {
        setCurrentPage('home');
      }

      // Check for keyword-rich power URLs
      if (path === '/laser-engraving-london-ontario') setKeywordSlug('laser-engraving-london-ontario');
      else if (path === '/laser-cutting-london-ontario') setKeywordSlug('laser-cutting-london-ontario');
      else if (path === '/engraving-london-ontario') setKeywordSlug('engraving-london-ontario');
      else if (path === '/leather-engraving-london-on') setKeywordSlug('leather-engraving-london-on');
      else if (path === '/leather-engraving-service') setKeywordSlug('leather-engraving-service');
      else if (path === '/wood-laser-engraving-london-on') setKeywordSlug('wood-laser-engraving-london-on');
      else if (path === '/acrylic-cutting-london-on') setKeywordSlug('acrylic-cutting-london-on');
      else if (path === '/custom-acrylic-cutting') setKeywordSlug('custom-acrylic-cutting');
      else if (path === '/custom-signage-london-ontario') setKeywordSlug('custom-signage');
      else if (path === '/wedding-decor-event-signage-london-ontario') setKeywordSlug('wedding-events');
      else if (path === '/custom-gifts-london-ontario') setKeywordSlug('custom-gifts-london-ontario');
      else setKeywordSlug(null);
    };

    handleNavigate();
    window.addEventListener('popstate', handleNavigate);
    
    return () => {
      window.removeEventListener('popstate', handleNavigate);
    };
  }, []);

  // Handle Tawk.to visibility - official API is more robust than DOM manipulation
  useEffect(() => {
    const updateTawkVisibility = () => {
      // @ts-ignore - Tawk_API is added via script tag
      if (window.Tawk_API && window.Tawk_API.hideWidget && window.Tawk_API.showWidget) {
        if (currentPage === 'flyer') {
          // @ts-ignore
          window.Tawk_API.hideWidget();
        } else {
          // @ts-ignore
          window.Tawk_API.showWidget();
        }
      } 
      
      // Fallback for when Tawk is still loading its iframe
      const tawkSelector = 'iframe[src*="tawk.to"], .tawk-min-container, [id^="tawk"]';
      const tawkElement = document.querySelector(tawkSelector);
      if (tawkElement) {
        const tawkContainer = (tawkElement.closest('div') || tawkElement) as HTMLElement;
        if (tawkContainer) {
          tawkContainer.style.display = currentPage === 'flyer' ? 'none' : 'block';
        }
      }
    };

    // Run immediately
    updateTawkVisibility();

    // Tawk.to often loads after a delay, so we poll for it a few times
    const intervals = [500, 1500, 3000, 6000];
    const timeoutIds = intervals.map(ms => setTimeout(updateTawkVisibility, ms));

    // Also register the official Tawk_API.onLoad if it's not already set
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    const oldOnLoad = window.Tawk_API.onLoad;
    // @ts-ignore
    window.Tawk_API.onLoad = function() {
      if (oldOnLoad) oldOnLoad();
      updateTawkVisibility();
    };

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [currentPage]);

  // Merge the keyword-specific metadata into the standard SEO metadata if a slug is active
  const dynamicMetadata = { ...SEO_METADATA };
  if (keywordSlug && SEO_METADATA[keywordSlug]) {
    dynamicMetadata.hero = SEO_METADATA[keywordSlug];
  } else if (currentPage === 'blog') {
    dynamicMetadata.hero = SEO_METADATA['blog'];
  } else if (currentPage === 'blog-post' && selectedPostSlug && SEO_METADATA[selectedPostSlug]) {
    dynamicMetadata.hero = SEO_METADATA[selectedPostSlug];
  }

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

  const navigateToBlog = (slug?: string) => {
    const newPath = slug ? `/blog/${slug}/` : '/blog/';
    window.history.pushState({}, '', newPath);
    // Trigger the navigate handler
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  const FOREST_BG_URL = "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop";

  if (currentPage === 'flyer') {
    return <Flyer />;
  }

  if (currentPage === 'blog') {
    return (
      <div className="text-slate-800 font-sans isolate">
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${FOREST_BG_URL})` }}
        />
        <ScrollProgressBar />
        <Header sectionRefs={sectionRefs} />
        <main>
          <Blog onSelectPost={navigateToBlog} />
        </main>
        <Footer ref={paymentsRef} sectionRefs={sectionRefs} />
      </div>
    );
  }

  if (currentPage === 'blog-post' && selectedPostSlug) {
    const post = BLOG_POSTS.find(p => p.slug === selectedPostSlug);
    if (post) {
      return (
        <div className="text-slate-800 font-sans isolate">
          <ScrollProgressBar />
          <Header sectionRefs={sectionRefs} />
          <main>
            <BlogPostView post={post} onBack={() => navigateToBlog()} />
          </main>
          <Footer ref={paymentsRef} sectionRefs={sectionRefs} />
        </div>
      );
    }
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