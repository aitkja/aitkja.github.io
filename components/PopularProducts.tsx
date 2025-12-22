import React, { useRef, useEffect } from 'react';
import { POPULAR_PRODUCTS } from '../constants';
import type { GalleryItem } from '../types';
import LazyImage from './LazyImage';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { trackImageClick, getProductCategory, getProductName } from '../analytics';

interface PopularProductsProps {
  openLightbox: (imageUrl: string) => void;
}

const ProductCard: React.FC<{ product: GalleryItem; openLightbox: (imageUrl: string) => void; eagerLoad?: boolean }> = ({ product, openLightbox, eagerLoad }) => (
  <div 
    className="flex-none w-48 sm:w-64 mx-2 sm:mx-4 cursor-pointer group"
    onClick={() => {
      trackImageClick({
        imageSrc: product.src,
        imageAlt: product.alt,
        section: 'Popular Products',
        category: getProductCategory(product.src),
        productName: getProductName(product.src),
      });
      openLightbox(product.src);
    }}
  >
    <div className="overflow-hidden rounded-lg shadow-lg w-full h-32 sm:h-48 bg-slate-200">
      <LazyImage 
        src={product.src} 
        alt={product.alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        eagerLoad={eagerLoad} // Pass eagerLoad prop to LazyImage
      />
    </div>
    <h3 className="mt-4 text-center font-semibold text-slate-700">{product.name}</h3>
  </div>
);


const PopularProducts: React.FC<PopularProductsProps> = ({ openLightbox }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
  const headerRef = useAnimateOnScroll<HTMLDivElement>();

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute('data-animated', "true");

    // The following code for cloning children is removed because directly manipulating
    // DOM attributes on cloned nodes doesn't update React components properly.
    // Instead, we will render the ProductCard components twice directly within the JSX.

    // const scrollerInner = scroller.querySelector('.scroller__inner');
    // if (!scrollerInner) return;
    // if (scrollerInner.children.length > POPULAR_PRODUCTS.length) return;
    // const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];
    // scrollerContent.forEach(item => {
    //     const duplicatedItem = item.cloneNode(true) as HTMLElement;
    //     duplicatedItem.querySelectorAll('img[loading="lazy"]').forEach(img => {
    //         img.setAttribute('loading', 'eager');
    //     });
    //     duplicatedItem.setAttribute('aria-hidden', 'true');
    //     scrollerInner.appendChild(duplicatedItem);
    // });

  }, []);


  return (
    <section className="py-20 bg-slate-100/80 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Products</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Get inspired by some of our most requested items. Every piece is customizable to fit your vision perfectly.
          </p>
        </div>

        <style>{`
          .scroller {
            -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
            mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
          }
          .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
          }
          .scroller[data-animated="true"] .scroller__inner {
            animation: scroll 25s linear infinite;
          }
          @keyframes scroll {
            to {
              transform: translate(calc(-50%));
            }
          }
        `}</style>

        <div className="scroller overflow-hidden w-full" ref={scrollerRef} data-animated="true">
            <div className="scroller__inner flex">
                {POPULAR_PRODUCTS.map((product, index) => (
                    <ProductCard key={`${product.name}-${index}`} product={product} openLightbox={openLightbox} />
                ))}
                {POPULAR_PRODUCTS.map((product, index) => (
                    <ProductCard key={`${product.name}-${index}-duplicate`} product={product} openLightbox={openLightbox} eagerLoad={true} aria-hidden="true" />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;