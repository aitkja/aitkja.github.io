declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  const isDebug = (() => {
    try {
      return (
        (typeof window !== 'undefined' && window.location?.search?.includes('ga_debug=1')) ||
        (typeof document !== 'undefined' && document.cookie?.includes('ar_debug=1')) ||
        (typeof localStorage !== 'undefined' && localStorage.getItem('ga_debug') === '1')
      );
    } catch {
      return false;
    }
  })();

  const params: Record<string, unknown> = {
    event_category: category,
    event_label: label,
    value,
    debug_mode: isDebug || undefined,
  };

  Object.keys(params).forEach((k) => (params as any)[k] == null && delete (params as any)[k]);

  window.gtag!('event', eventName, params);
}

export function getProductCategory(imagePath: string): string {
  if (!imagePath) return '';
  if (imagePath.includes('/Weddings/')) return 'Wedding Items';
  if (imagePath.includes('/Corporate/')) return 'Corporate Items';
  if (imagePath.includes('/Corperate/')) return 'Corporate Items';
  if (imagePath.includes('/Personal/')) return 'Personal Items';
  if (imagePath.includes('/Industrial/')) return 'Industrial Items';
  return 'Unknown Category';
}

export function getProductName(imagePath: string): string {
  if (!imagePath) return '';
  const file = imagePath.split('/').pop() || '';
  const name = file.split('.')[0] || '';
  return name.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

export function trackImageClick(opts: {
  imageSrc?: string;
  imageAlt?: string;
  section?: string;
  category?: string;
  productName?: string;
  elementId?: string;
  pageLocation?: string;
}) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  const isDebug = (() => {
    try {
      return (
        (typeof window !== 'undefined' && window.location?.search?.includes('ga_debug=1')) ||
        (typeof document !== 'undefined' && document.cookie?.includes('ar_debug=1')) ||
        (typeof localStorage !== 'undefined' && localStorage.getItem('ga_debug') === '1')
      );
    } catch {
      return false;
    }
  })();

  const imageName = opts.productName || (opts.imageSrc ? getProductName(opts.imageSrc) : '') || opts.imageAlt || '';

  const params = {
    image_src: opts.imageSrc || '',
    image_alt: opts.imageAlt || '',
    image_name: imageName,
    section: opts.section || '',
    product_category: opts.category || '',
    product_name: opts.productName || imageName,
    element_id: opts.elementId || '',
    page_location: opts.pageLocation || (typeof window !== 'undefined' ? window.location.href : ''),
    debug_mode: isDebug || undefined,
  };

  window.gtag!('event', 'image_click', params);
}









