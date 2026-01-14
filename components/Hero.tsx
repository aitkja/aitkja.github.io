
import React, { useState, useEffect, forwardRef, RefObject } from 'react';
import Wallpaper from '../images/misc/Wallpaper.webp'; // Import the new wallpaper

const HEADLINES = [
  "Laser Engraving & Cutting in London Ontario",
  "Custom Laser Solutions",
  "Elegant Wedding & Event Decor",
  "Your Corporate Branding Partner",
  "Unique Personalized Gifts",
  "Industrial Engraving & Cutting"
];

interface HeroProps {
  galleryRef: RefObject<HTMLElement>;
  quoteRef: RefObject<HTMLElement>;
  forcedHeadline?: string;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ galleryRef, quoteRef, forcedHeadline }, ref) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // If a headline is forced, don't cycle
    if (forcedHeadline) return;

    let timeout: number | undefined;
    const interval = window.setInterval(() => {
      setIsFading(true);
      timeout = window.setTimeout(() => {
        setHeadlineIndex((prevIndex) => (prevIndex + 1) % HEADLINES.length);
        setIsFading(false);
      }, 500); // Corresponds to fade out duration
    }, 4000);

    return () => {
      window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [forcedHeadline]);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref} 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 p-8 max-w-4xl mx-auto">
        <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 min-h-[20rem] md:min-h-[24rem] flex items-center justify-center leading-tight px-2">
          {forcedHeadline ? (
            <span className="opacity-100 px-4">
              {forcedHeadline}
            </span>
          ) : (
            HEADLINES.map((headline, idx) => (
              <span
                key={headline}
                className={[
                  'absolute inset-x-0 top-1/2 -translate-y-1/2 transition-opacity duration-500 select-none pointer-events-none px-4',
                  idx === headlineIndex ? (isFading ? 'opacity-0' : 'opacity-100') : 'opacity-0',
                ].join(' ')}
                aria-hidden={idx === headlineIndex ? undefined : true}
              >
                {headline}
          </span>
            ))
          )}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-200">
          Precision laser engraving and cutting in London, Ontario. We specialize in custom wood gifts, acrylic cutting, leather engraving, and industrial parts. Quality craftsmanship for your unique vision.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => scrollToSection(galleryRef)}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
          >
            View Portfolio
          </button>
          <button 
            onClick={() => scrollToSection(quoteRef)}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
});

export default Hero;
