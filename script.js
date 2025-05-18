// Future JavaScript for interactivity (e.g., form validation, gallery effects)

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
            "Elegant Wedding & Event Decor",    // Refined
            "Your Corporate Branding Partner",  // Refined
            "Unique Personalized Gifts",        // Refined
            "Precision Industrial Engraving & Cutting" // Refined
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

}); 