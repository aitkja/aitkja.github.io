import { useEffect, useRef } from 'react';

// This hook can be attached to any element you want to animate on scroll.
// It will add the 'is-visible' class when the element enters the viewport.
// CSS in index.html handles the actual animation.

const useAnimateOnScroll = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Unobserve after the animation has been triggered once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return ref;
};

export default useAnimateOnScroll;
