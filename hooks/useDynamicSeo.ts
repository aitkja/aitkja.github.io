import { useEffect, useRef } from 'react';
import type { SectionRefs, SeoMetadata } from '../types';

const useDynamicSeo = (sectionRefs: SectionRefs, metadata: SeoMetadata): void => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activeSectionRef = useRef<string | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      let mostVisibleSection: { id: string | null; ratio: number } = { id: null, ratio: 0 };

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > mostVisibleSection.ratio) {
          const sectionId = Object.keys(sectionRefs).find(key => sectionRefs[key].current === entry.target);
          if (sectionId) {
            mostVisibleSection = { id: sectionId, ratio: entry.intersectionRatio };
          }
        }
      });
      
      const newActiveSection = mostVisibleSection.id;

      if (newActiveSection && newActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = newActiveSection;
        const meta = metadata[newActiveSection];
        if (meta) {
          document.title = meta.title;
          
          const updateMetaTag = (selector: string, content: string, attr: 'name' | 'property' = 'name') => {
            const tag = document.querySelector(`meta[${attr}="${selector}"]`);
            if (tag) tag.setAttribute('content', content);
          };

          updateMetaTag('description', meta.description);
          updateMetaTag('og:title', meta.title, 'property');
          updateMetaTag('og:description', meta.description, 'property');
          updateMetaTag('twitter:title', meta.title, 'property');
          updateMetaTag('twitter:description', meta.description, 'property');
        }
      } else if (window.scrollY < window.innerHeight / 2 && activeSectionRef.current !== 'hero') {
        // Fallback to hero section if scrolled to the top
        const heroMeta = metadata.hero;
        if (heroMeta) {
          activeSectionRef.current = 'hero';
          document.title = heroMeta.title;
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    });

    const currentObserver = observerRef.current;
    
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        currentObserver.observe(ref.current);
      }
    });
    
    // Set initial SEO on load
    const initialMeta = metadata.hero;
    if (initialMeta) {
      document.title = initialMeta.title;
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionRefs, metadata]);
};

export default useDynamicSeo;
