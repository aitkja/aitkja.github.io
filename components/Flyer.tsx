import React from 'react';

// Load images via glob import to ensure they are bundled by Vite
// This creates an object like: { '../images/stock/...': '/assets/file.hash.webp' }
const images = import.meta.glob('../images/**/*.{webp,png,jpg,jpeg,svg}', { eager: true, import: 'default' });

// Helper to resolve the image path from the hardcoded strings
const getImg = (path: string) => {
  // Convert the absolute path /images/stock/... to the relative path key ../images/stock/...
  // The glob key is relative to this file (components/Flyer.tsx)
  // path passed in is like '/images/stock/...' (from root)
  // We need '../images/stock/...'
  // So we just prepend '..' to the path string if it starts with /images
  const relativePath = '..' + path;
  
  const resolved = images[relativePath];
  if (!resolved) {
    console.warn(`Image not found for path: ${path} (key: ${relativePath})`);
    return path; // Fallback to original string if not found (might work in dev)
  }
  return resolved as string;
};

const Flyer: React.FC = () => {
  const weddingImages = [
    getImg('/images/stock/Weddings/Cake_Toppers.webp'),
    getImg('/images/stock/Weddings/Place_Tags.webp'),
    getImg('/images/stock/Weddings/Save_The_Date.webp'),
    getImg('/images/stock/Weddings/Champagne_Glass_Tags.webp'),
    getImg('/images/stock/Weddings/Name_Tags.webp'),
    getImg('/images/stock/Weddings/Valentine_Signs.webp'),
    getImg('/images/stock/Weddings/Custom_Fridge_Magnets.webp'),
    getImg('/images/stock/Weddings/Table_Numbers.webp'),
  ];

  const corporateImages = [
    getImg('/images/stock/Corporate/Wood_Coasters.webp'),
    getImg('/images/stock/Corporate/Slate_Coasters.webp'),
    getImg('/images/stock/Corporate/Corporate_Pens.webp'),
    getImg('/images/stock/Corporate/Cap_With_Logo.webp'),
    getImg('/images/stock/Corporate/Business_Card_Holder.webp'),
    getImg('/images/stock/Corporate/Business_bar_sign.webp'),
    getImg('/images/stock/Corporate/wooden_Custom_Sign.webp'),
  ];

  const personalImages = [
    getImg('/images/stock/Personal/Fern_Coasters.webp'),
    getImg('/images/stock/Personal/Palm_Coasters.webp'),
    getImg('/images/stock/Personal/Key_Chains.webp'),
    getImg('/images/stock/Personal/Room_Sign_Dino.webp'),
    getImg('/images/stock/Personal/Welcome_Signs_2.webp'),
    getImg('/images/stock/Personal/Crib_Sign.webp'),
    getImg('/images/stock/Personal/Custom_Cutting_Board.webp'),
    getImg('/images/stock/Personal/Mom_Sign.webp'),
  ];

  const industrialImages = [
    getImg('/images/stock/Industrial/Industrial_Signage.webp'),
    getImg('/images/stock/Industrial/Custom_Acrylic_Cutting.webp'),
    getImg('/images/stock/Industrial/Small_Lamacoids.webp'),
    getImg('/images/stock/Industrial/Small_Lamacoids_2.webp'),
    getImg('/images/stock/Industrial/Custom_Acrylic_Cutting.webp'),
    getImg('/images/stock/Industrial/Etched_anodized_locks.webp'),
    getImg('/images/stock/Industrial/Industrial_Signage.webp'),
  ];

  const sections = [
    {
      title: "Wedding & Event Solutions",
      items: ["Custom Invitations", "Elegant Cake Toppers", "Personalized Signage", "Event Decor"],
      images: [
        weddingImages[5], // Valentine_Signs
        weddingImages[2], // Save_The_Date
        weddingImages[7], // Table_Numbers
        weddingImages[1], // Place_Tags
      ],
      imageAlt: "Custom laser cut wedding signage collage"
    },
    {
      title: "Personalized Gifts",
      items: ["Engraved Cutting Boards", "Custom Photo Frames", "Unique Home Decor", "Nursery Signs"],
      images: [
        personalImages[5], // Crib_Sign
        personalImages[1], // Palm_Coasters
        personalImages[7], // Mom_Sign
        personalImages[3], // Room_Sign_Dino
      ],
      imageAlt: "Personalized laser engraved gifts collage"
    },
    {
      title: "Corporate Branding",
      items: ["Branded Coasters", "Custom Awards & Trophies", "Office Signage", "Promotional Products"],
      images: [
        corporateImages[6], // wooden_Custom_Sign
        corporateImages[0], // Wood_Coasters
        corporateImages[4], // Business_Card_Holder
        corporateImages[2], // Corporate_Pens
      ],
      imageAlt: "Laser engraved corporate branding collage"
    },
    {
      title: "Industrial & Commercial",
      items: ["Equipment Tags & Lamacoids", "Control Panel Overlays", "Safety Signage", "Precision Parts"],
      images: [
        industrialImages[5], // Etched_anodized_locks
        industrialImages[1], // Custom_Acrylic_Cutting
        industrialImages[2], // Small_Lamacoids
        industrialImages[0], // Industrial_Signage
      ],
      imageAlt: "Industrial laser marking collage"
    }
  ];

  return (
    <div className="mx-auto flex flex-col font-sans relative overflow-hidden" style={{
      width: '8.5in',
      height: '11in',
      margin: '0 auto',
      padding: '0',
      WebkitPrintColorAdjust: 'exact',
      colorAdjust: 'exact',
      background: 'linear-gradient(180deg, #E4E8E0 0%, #BDC9C1 100%)',
    }}>
      
      {/* Main Header Area - Compressed for vertical space */}
      <header className="flex flex-col items-center justify-center pt-2 pb-1 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2A4B3A 100%)' }}>
        <div className="flex w-full max-w-5xl px-6 items-center justify-between gap-4">
          {/* Left: Contact & Location */}
          <div className="flex flex-col items-start gap-1 text-white/90 text-[10px] font-semibold w-[30%]">
            <div className="flex flex-col gap-0.5">
              <a href="https://www.forestcitylaser.com" className="flex items-center gap-1 hover:text-[#C4A484] transition-colors">
                <svg className="w-3 h-3 text-[#C4A484]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l4-4m0 0l4 4m-4-4v12" />
                </svg>
                www.forestcitylaser.com
              </a>
              <a href="mailto:info@forestcitylaser.com" className="flex items-center gap-1 hover:text-[#C4A484] transition-colors">
                <svg className="w-3 h-3 text-[#C4A484]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@forestcitylaser.com
              </a>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-[#C4A484]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                ForestCityLaser
              </div>
            </div>
            <div className="mt-1 flex items-center gap-1 text-white/70 text-[9px]">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Based in Riverbend, London ON
            </div>
          </div>

          {/* Center: Logo & Tagline */}
          <div className="flex flex-col items-center w-[30%]">
            <div className="h-20 w-20 mb-1 bg-white rounded-full flex items-center justify-center shadow-sm p-1.5">
              <img 
                src={getImg("/images/logo/Full_Logo.webp")}
                alt="Forest City Laser"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full mb-1">
              <div className="flex text-[#C4A484]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-[8px] font-bold tracking-wide uppercase">5-Star Rated on Google</span>
            </div>
          </div>

          {/* Right: Reviews Text */}
          <div className="flex flex-col gap-1.5 w-[40%]">
             <div className="bg-white/5 rounded px-2 py-1 border border-white/10">
              <p className="text-white/90 text-[8px] italic leading-tight mb-0.5 line-clamp-4">
                "We recently had a custom business sign done... absolutely thrilled with the result. The craftsmanship, attention to detail, and overall quality exceeded our expectations."
              </p>
              <p className="text-[#C4A484] text-[8px] font-bold uppercase text-right">
                - Karen S
              </p>
            </div>
            <div className="bg-white/5 rounded px-2 py-1 border border-white/10">
              <p className="text-white/90 text-[8px] italic leading-tight mb-0.5 line-clamp-4">
                "Placed an order for a custom acrylic piece and it was ready within two days. ... Overall, I am happy with my piece."
              </p>
              <p className="text-[#C4A484] text-[8px] font-bold uppercase text-right">
                - Scott B
              </p>
            </div>
          </div>
        </div>

        {/* Hero Message - Compact */}
        <div className="text-center w-full px-4 mt-1">
          <h1 className="text-[#C4A484] text-xl font-bold leading-tight mb-0.5 whitespace-nowrap">
            Custom Laser Solutions for Every Project
          </h1>
          <p className="text-white/90 text-sm font-medium italic">
            Virtual previews before every quote for confident decisions.
          </p>
        </div>
      </header>

      {/* Main Content - 2x2 Grid with reduced gap */}
      <main className="flex-grow px-6 py-2 grid grid-cols-2 gap-x-4 gap-y-1">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col h-full justify-start overflow-hidden">
            {/* Image Collage - Adjusted Aspect Ratio */}
            <div className="w-full aspect-[16/10] rounded-lg overflow-hidden shadow-md mb-1 grid grid-cols-2 grid-rows-2 gap-2 bg-transparent">
              {section.images.map((imgSrc, imgIndex) => (
                <div 
                  key={imgIndex}
                  className="w-full h-full bg-cover bg-center rounded-sm"
                  style={{ backgroundImage: `url("${imgSrc}")` }}
                  role="img"
                  aria-label={`${section.imageAlt} ${imgIndex + 1}`}
                />
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[#2A4B3A] text-base font-bold mb-0.5 relative inline-block leading-tight">
                {section.title}
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#C4A484] rounded-full"></span>
              </h2>
              <ul className="mt-0.5 space-y-0.5 w-full">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-center items-center gap-2 text-[#333333] text-xs leading-snug font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>

      {/* Compact Footer */}
      <footer className="text-white py-2 px-6 mt-auto flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2A4B3A 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-1.5">
          <div>
            <h3 className="text-[#C4A484] text-lg font-bold leading-tight">Ready to Create Something Amazing?</h3>
            <p className="text-white/90 text-xs">Get Your Custom Quote Today</p>
          </div>
          
          {/* URL Display (No Link/Arrow for Image Print) */}
          <div className="bg-[#2A4B3A] text-white px-6 py-1 rounded-full font-bold text-sm shadow-md">
            www.forestcitylaser.com
          </div>
          
          <div className="flex items-center gap-2 text-white/80">
            <img 
              src={getImg("/images/misc/Canadian_Flag.png")}
              alt="Canadian Flag"
              className="w-3 h-3 object-contain"
            />
            <span className="font-medium text-xs">Proudly Canadian</span>
            <img 
              src={getImg("/images/misc/Canadian_Flag.png")}
              alt="Canadian Flag"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0;
          }
          html, body {
            width: 8.5in;
            height: 11in;
            margin: 0;
            padding: 0;
            background-color: white;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          /* Ensure footer background prints */
          footer, div {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default Flyer;