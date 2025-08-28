// Future JavaScript for interactivity (e.g., form validation, gallery effects)

// Google Analytics Event Tracking Functions
function trackEvent(eventName, category, label = null, value = null) {
    // Check if gtag is available (Google Analytics is loaded)
    if (typeof gtag !== 'undefined') {
        const isDebug = (function(){
            try {
                return (window && window.location && window.location.search.indexOf('ga_debug=1') !== -1)
                    || (document.cookie && document.cookie.indexOf('ar_debug=1') !== -1)
                    || (localStorage && localStorage.getItem('ga_debug') === '1');
            } catch(e) { return false; }
        })();
        const eventData = {
            event_category: category,
            event_label: label,
            value: value,
            debug_mode: isDebug || undefined
        };
        
        // Remove null values
        Object.keys(eventData).forEach(key => eventData[key] === null && delete eventData[key]);
        
        gtag('event', eventName, eventData);
        console.log('GA Event:', eventName, eventData); // For debugging
    }
}

// Helper function to get product category from image path
function getProductCategory(imagePath) {
    if (imagePath.includes('/Weddings/')) return 'Wedding Items';
    if (imagePath.includes('/Corperate/')) return 'Corporate Items';
    if (imagePath.includes('/Personal/')) return 'Personal Items';
    if (imagePath.includes('/Industrial/')) return 'Industrial Items';
    return 'Unknown Category';
}

// Helper function to get product name from image path
function getProductName(imagePath) {
    const fileName = imagePath.split('/').pop().split('.')[0];
    return fileName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Track a single GA4 event with parameters for image clicks
function trackImageClick(params) {
    if (typeof gtag === 'undefined') return;
    const isDebug = (function(){
        try {
            return (window && window.location && window.location.search.indexOf('ga_debug=1') !== -1)
                || (document.cookie && document.cookie.indexOf('ar_debug=1') !== -1)
                || (localStorage && localStorage.getItem('ga_debug') === '1');
        } catch(e) { return false; }
    })();
    const {
        imageSrc,
        imageAlt,
        section,
        category,
        productName,
        elementId,
        pageLocation
    } = params;

    const imageName = productName || (imageSrc ? getProductName(imageSrc) : '') || (imageAlt || '');

    const eventParams = {
        image_src: imageSrc || '',
        image_alt: imageAlt || '',
        image_name: imageName || '',
        section: section || '',
        product_category: category || '',
        product_name: productName || imageName || '',
        element_id: elementId || '',
        page_location: pageLocation || (typeof window !== 'undefined' ? window.location.href : ''),
        debug_mode: isDebug || undefined
    };

    gtag('event', 'image_click', eventParams);
    console.log('GA Image Event:', 'image_click', eventParams);
}

document.addEventListener('DOMContentLoaded', () => {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

    // Function to open the lightbox
    function openLightbox(imageUrl) {
        lightboxImage.src = imageUrl;
        lightboxOverlay.classList.remove('lightbox-hidden');
        lightboxOverlay.classList.add('lightbox-visible');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Track lightbox view
        const category = getProductCategory(imageUrl);
        const productName = getProductName(imageUrl);
        trackEvent('product_view', 'Gallery Interaction', `${category} - ${productName}`);
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('lightbox-visible');
        lightboxOverlay.classList.add('lightbox-hidden');
        lightboxImage.src = ''; // Clear image src
        document.body.style.overflow = ''; // Restore background scrolling
    }

    // Add click listeners to all gallery image links
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link navigation
            const imageUrl = trigger.href;
            
            // Track gallery click
            const category = getProductCategory(imageUrl);
            const productName = getProductName(imageUrl);
            
            // Determine if this is from main gallery or popular products
            const isPopularProduct = trigger.closest('.popular-products') !== null;
            const section = isPopularProduct ? 'Popular Products' : 'Main Gallery';
            
            trackEvent('gallery_click', 'Product Interest', `${section} - ${category} - ${productName}`);

            // Also log a unique image-click event using the image name
            const img = trigger.querySelector('img');
            trackImageClick({
                imageSrc: imageUrl,
                imageAlt: img ? img.getAttribute('alt') : '',
                section,
                category,
                productName,
                elementId: img ? img.id : '',
                pageLocation: window.location.href
            });
            
            openLightbox(imageUrl);
        });
    });

    // Add click listener to close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Add click listener to overlay background (to close lightbox)
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (event) => {
            // Close only if clicking the overlay itself, not the image inside
            if (event.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // Optional: Close lightbox with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightboxOverlay.classList.contains('lightbox-visible')) {
            closeLightbox();
        }
    });

    // --- Add to Quote Button Logic ---
    const quoteRefInput = document.getElementById('image-reference');
    const gallery = document.getElementById('gallery'); // Get gallery container
    let highlightTimeout = null; // Variable to store the highlight timer

    if (gallery && quoteRefInput) {
        gallery.addEventListener('click', (event) => {
            if (event.target.classList.contains('add-to-quote-btn')) {
                event.preventDefault();

                const referenceName = event.target.dataset.ref;
                if (referenceName) {
                    // Track "Add to Quote" clicks
                    const galleryItem = event.target.closest('.gallery-item');
                    if (galleryItem) {
                        const img = galleryItem.querySelector('img');
                        if (img) {
                            const category = getProductCategory(img.src);
                            const productName = getProductName(img.src);
                            trackEvent('add_to_quote', 'Quote Interest', `${category} - ${productName}`);
                        }
                    }
                    
                    // Append reference if field is not empty, otherwise set it
                    if (quoteRefInput.value.trim() !== '') {
                        // Avoid adding duplicates
                        if (!quoteRefInput.value.split(', ').includes(referenceName)) {
                           quoteRefInput.value += ", " + referenceName;
                        }
                    } else {
                        quoteRefInput.value = referenceName;
                    }

                    const quoteSection = document.getElementById('quote');
                    if (quoteSection) {
                        quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }

                    // Clear existing highlight timer if any
                    if (highlightTimeout) {
                        clearTimeout(highlightTimeout);
                        quoteRefInput.style.backgroundColor = ''; // Remove previous highlight immediately
                    }

                    quoteRefInput.style.transition = 'background-color 0.1s ease-in-out';
                    quoteRefInput.style.backgroundColor = '#e8f5e9';
                    highlightTimeout = setTimeout(() => {
                        quoteRefInput.style.backgroundColor = '';
                        highlightTimeout = null; // Reset timer variable
                    }, 1500); // Highlight for 1.5 seconds
                }
            }
        });
    }

    // Track Quote Form Submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (event) => {
            // Get form data for tracking
            const material = document.getElementById('material').value;
            const quantity = document.getElementById('quantity').value;
            const references = document.getElementById('image-reference').value;
            
            // Track quote submission
            trackEvent('quote_submitted', 'Lead Generation', `Material: ${material || 'Not specified'}`, parseInt(quantity) || 1);
            
            // If references were added, track which products were quoted
            if (references) {
                references.split(',').forEach(ref => {
                    const cleanRef = ref.trim();
                    if (cleanRef) {
                        trackEvent('product_quoted', 'Quote Interest', cleanRef);
                    }
                });
            }
        });
    }

    // Track Navigation Clicks
    const navLinks = document.querySelectorAll('nav a, .cta-button, .footer-column a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const linkText = link.textContent.trim();
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                // Internal navigation
                trackEvent('navigation', 'Site Navigation', linkText);
            } else if (link.classList.contains('cta-button')) {
                // CTA button clicks
                trackEvent('cta_click', 'User Engagement', linkText);
            }
        });
    });

    // Track social media/external links in the footer
    const footerLinks = document.querySelectorAll('.footer-column a:not([href^="#"])');
    footerLinks.forEach(link => {
        link.addEventListener('click', () => {
             trackEvent('outbound_link_click', 'Footer Engagement', link.href);
        });
    });

    // Track Form Field Interactions
    const formFields = document.querySelectorAll('#quote-form input, #quote-form textarea, #quote-form select');
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
             trackEvent('form_field_focus', 'Form Engagement', field.name);
        });
        field.addEventListener('change', () => {
             trackEvent('form_field_change', 'Form Engagement', `${field.name}: ${field.value}`);
        });
    });

    // Track Payment Portal Clicks
    const paymentButton = document.getElementById('embedded-checkout-modal-checkout-button');
    if (paymentButton) {
        paymentButton.addEventListener('click', () => {
            trackEvent('payment_portal_click', 'Conversion', 'Payment Portal Access');
        });
    }

    // Track Video Interactions (if video is present)
    const heroVideo = document.querySelector('.hero-background-video');
    if (heroVideo) {
        let videoTrackingData = {
            played: false,
            quartile1: false,
            quartile2: false,
            quartile3: false,
            completed: false
        };

        heroVideo.addEventListener('play', () => {
            if (!videoTrackingData.played) {
                trackEvent('video_play', 'Video Engagement', 'Hero Video Started');
                videoTrackingData.played = true;
            }
        });

        heroVideo.addEventListener('timeupdate', () => {
            const progress = (heroVideo.currentTime / heroVideo.duration) * 100;
            
            if (progress >= 25 && !videoTrackingData.quartile1) {
                trackEvent('video_progress', 'Video Engagement', 'Hero Video 25%');
                videoTrackingData.quartile1 = true;
            } else if (progress >= 50 && !videoTrackingData.quartile2) {
                trackEvent('video_progress', 'Video Engagement', 'Hero Video 50%');
                videoTrackingData.quartile2 = true;
            } else if (progress >= 75 && !videoTrackingData.quartile3) {
                trackEvent('video_progress', 'Video Engagement', 'Hero Video 75%');
                videoTrackingData.quartile3 = true;
            }
        });

        heroVideo.addEventListener('ended', () => {
            if (!videoTrackingData.completed) {
                trackEvent('video_complete', 'Video Engagement', 'Hero Video Completed');
                videoTrackingData.completed = true;
            }
        });
    }

    // --- Animated Headline Logic ---
    const dynamicHeadlineSpan = document.querySelector('.headline-dynamic');
    if (dynamicHeadlineSpan) {
        const headlines = [
            "Custom Laser Cutting & Engraving", 
            "Elegant Wedding & Event Decor",    
            "Your Corporate Branding Partner",  
            "Unique Personalized Gifts",        
            "Industrial Engraving & Cutting" // Shortened
        ];
        let currentIndex = 0;
        dynamicHeadlineSpan.textContent = headlines[0]; 

        const changeInterval = 4000; // Time in ms (e.g., 4 seconds)
        const fadeTime = 500; // Must match CSS transition time

        setInterval(() => {
            dynamicHeadlineSpan.classList.add('fade-out');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % headlines.length;
                dynamicHeadlineSpan.textContent = headlines[currentIndex];
                dynamicHeadlineSpan.classList.remove('fade-out');
            }, fadeTime);

        }, changeInterval);
    }

    // --- Global image click tracking (non-lightbox images) ---
    document.addEventListener('click', (event) => {
        const img = event.target.closest('img');
        if (!img) return;

        // Avoid double-tracking for images inside lightbox triggers (already handled above)
        if (img.closest('.lightbox-trigger')) return;

        const src = img.currentSrc || img.src || '';
        const alt = img.getAttribute('alt') || '';
        const inPopular = !!img.closest('.popular-products');
        const inGallery = !!img.closest('#gallery');
        const inHeader = !!img.closest('header');
        const inFooter = !!img.closest('footer');

        let section = 'General';
        if (inPopular) section = 'Popular Products';
        else if (inGallery) section = 'Main Gallery';
        else if (inHeader) section = 'Header';
        else if (inFooter) section = 'Footer';

        const category = getProductCategory(src);
        const productName = getProductName(src);

        trackImageClick({
            imageSrc: src,
            imageAlt: alt,
            section,
            category,
            productName,
            elementId: img.id || '',
            pageLocation: window.location.href
        });
    });

}); 