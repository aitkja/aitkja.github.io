// Future JavaScript for interactivity (e.g., form validation, gallery effects)

document.addEventListener('DOMContentLoaded', () => {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const galleryContainer = document.getElementById('gallery'); // Use gallery section as event scope

    // Function to open the lightbox
    function openLightbox(imageUrl) {
        if (!lightboxOverlay || !lightboxImage) return; // Safety check
        lightboxImage.src = imageUrl;
        lightboxOverlay.classList.remove('lightbox-hidden');
        lightboxOverlay.classList.add('lightbox-visible');
        document.body.style.overflow = 'hidden';
    }

    // Function to close the lightbox
    function closeLightbox() {
        if (!lightboxOverlay || !lightboxImage) return;
        lightboxOverlay.classList.remove('lightbox-visible');
        lightboxOverlay.classList.add('lightbox-hidden');
        lightboxImage.src = '';
        document.body.style.overflow = '';
    }

    // Consolidated click listener for lightbox triggers
    if (galleryContainer) {
        galleryContainer.addEventListener('click', (event) => {
            const triggerLink = event.target.closest('.lightbox-trigger, .learn-more-btn');

            if (triggerLink) {
                event.preventDefault(); // Prevent default link behavior
                let imageUrl = '';

                if (triggerLink.classList.contains('lightbox-trigger')) {
                    // Clicked directly on the image link
                    imageUrl = triggerLink.href;
                } else if (triggerLink.classList.contains('learn-more-btn')) {
                    // Clicked on 'View Details', find the main image link within the same item
                    const galleryItem = triggerLink.closest('.gallery-item');
                    const imageLink = galleryItem?.querySelector('.lightbox-trigger');
                    if (imageLink) {
                        imageUrl = imageLink.href;
                    }
                }

                if (imageUrl) {
                    openLightbox(imageUrl);
                }
            }
        });
    }

    // Add click listener to close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Add click listener to overlay background (to close lightbox)
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (event) => {
            if (event.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // Optional: Close lightbox with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightboxOverlay?.classList.contains('lightbox-visible')) {
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

    // --- Animated Headline Logic ---
    const dynamicHeadlineSpan = document.querySelector('.headline-dynamic');
    if (dynamicHeadlineSpan) {
        const headlines = [
            "Custom Laser Cutting & Engraving", // Initial text from HTML
            "Custom Wedding Decor",
            "Corporate Branding Solutions", // Added Solutions
            "Personalized Gifts & Awards",  // Added Awards
            "Precision Industrial Signage" // Added Precision
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

    // --- Initialize Swiper for Featured Projects Carousel ---
    const featuredSwiper = new Swiper('.featured-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: { // Responsive adjustments
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                 slidesPerView: 2.5, // Show parts of next/prev slides
                 spaceBetween: 30
            }
        }
    });

    // --- Initialize Isotope for Portfolio Filtering ---
    const portfolioGrid = document.querySelector('.portfolio-grid');

    if (portfolioGrid) {
        imagesLoaded( portfolioGrid, function() {
            const iso = new Isotope( portfolioGrid, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry'
            });

            // Filter items on button click
            const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                });
            });
        });
    }

}); 