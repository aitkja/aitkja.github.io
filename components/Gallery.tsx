import React, { forwardRef } from 'react';
import { GALLERY_CATEGORIES } from '../constants';
import type { GalleryItem } from '../types';
import LazyImage from './LazyImage';
import { PlusCircleIcon } from './IconComponents';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { trackImageClick, getProductCategory, getProductName, trackEvent } from '../analytics';

// Ensure gallery display names are consistently Title Case,
// even when the underlying reference name uses underscores.
const formatDisplayName = (rawName: string) => {
  return rawName
    .replace(/_/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface GalleryProps {
  openLightbox: (imageUrl: string) => void;
  addToQuote: (refName: string) => void;
}

const GalleryCard: React.FC<{ item: GalleryItem; openLightbox: (src: string) => void; addToQuote: (refName: string) => void; index: number }> = ({ item, openLightbox, addToQuote, index }) => {
  // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
  const cardRef = useAnimateOnScroll<HTMLDivElement>();
  const onOpen = () => {
    trackImageClick({
      imageSrc: item.src,
      imageAlt: item.alt,
      section: 'Main Gallery',
      category: getProductCategory(item.src),
      productName: getProductName(item.src),
    });
    openLightbox(item.src);
  };
  const onQuote = () => {
    trackEvent('add_to_quote', 'Quote Interest', getProductName(item.src));
    addToQuote(item.name);
  };
  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-1 fade-in-up" style={{ transitionDelay: `${index * 50}ms` }}>
      <div className="relative cursor-pointer w-full aspect-w-1 aspect-h-1 bg-slate-200" onClick={onOpen}>
        <LazyImage src={item.src} alt={item.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-lg font-semibold">View Image</p>
        </div>
      </div>
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-50 gap-2">
        <p className="text-sm font-medium text-slate-700 flex-grow pr-2">{formatDisplayName(item.name)}</p>
        <button 
          onClick={onQuote}
          className="flex-shrink-0 flex items-center gap-1.5 text-sm text-indigo-600 font-semibold px-3 py-1.5 rounded-full bg-indigo-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
        >
          <PlusCircleIcon className="w-4 h-4" />
          Quote
        </button>
      </div>
    </div>
  );
};

const Gallery = forwardRef<HTMLElement, GalleryProps>(({ openLightbox, addToQuote }, ref) => {
  // FIX: Explicitly type the ref to HTMLHeadingElement for use on an h2.
  const headerRef = useAnimateOnScroll<HTMLHeadingElement>();
  // FIX: Explicitly type the ref to HTMLParagraphElement for use on a p.
  const subheaderRef = useAnimateOnScroll<HTMLParagraphElement>();

  return (
    <section ref={ref} className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 ref={headerRef} className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 fade-in-up">Our Work & Examples</h2>
          <p ref={subheaderRef} className="max-w-3xl mx-auto text-slate-600 fade-in-up" style={{ transitionDelay: '100ms' }}>
            Explore examples of our past work below, categorized for inspiration. While we showcase popular items, <strong>every project is custom!</strong> We love bringing unique ideas to life.
          </p>
        </div>

        {GALLERY_CATEGORIES.map((category) => (
          <div key={category.title} className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-8">
              {category.items.map((item, index) => (
                <GalleryCard key={item.src} item={item} openLightbox={openLightbox} addToQuote={addToQuote} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Gallery;