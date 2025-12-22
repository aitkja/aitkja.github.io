import type { GalleryCategory, GoogleReview, SeoMetadata } from './types';

// Wedding gallery images
const Valentine_Signs = new URL('./images/stock/Weddings/Valentine_Signs.webp', import.meta.url).href;
const Cake_Toppers = new URL('./images/stock/Weddings/Cake_Toppers.webp', import.meta.url).href;
const Place_Tags = new URL('./images/stock/Weddings/Place_Tags.webp', import.meta.url).href;
const Save_The_Date = new URL('./images/stock/Weddings/Save_The_Date.webp', import.meta.url).href;
const Table_Numbers = new URL('./images/stock/Weddings/Table_Numbers.webp', import.meta.url).href;
const Name_Tags = new URL('./images/stock/Weddings/Name_Tags.webp', import.meta.url).href;
const Custom_Fridge_Magnets = new URL('./images/stock/Weddings/Custom_Fridge_Magnets.webp', import.meta.url).href;
const Champagne_Glass_Tags = new URL('./images/stock/Weddings/Champagne_Glass_Tags.webp', import.meta.url).href;

// Corporate gallery images
const Acrylic_Desk_Sign = new URL('./images/stock/Corporate/Acrylic Desk Sign.webp', import.meta.url).href;
const Custom_Etch_to_Cutting_Board = new URL('./images/stock/Corporate/Custom_Etch_to_Cutting_Board.webp', import.meta.url).href;
const Business_Card_Holder = new URL('./images/stock/Corporate/Business_Card_Holder.webp', import.meta.url).href;
const Business_bar_sign = new URL('./images/stock/Corporate/Business_bar_sign.webp', import.meta.url).href;
const Corporate_Pens = new URL('./images/stock/Corporate/Corporate_Pens.webp', import.meta.url).href;
const Cap_With_Logo = new URL('./images/stock/Corporate/Cap_With_Logo.webp', import.meta.url).href;
const Slate_Coasters = new URL('./images/stock/Corporate/Slate_Coasters.webp', import.meta.url).href;
const Wood_Coasters = new URL('./images/stock/Corporate/Wood_Coasters.webp', import.meta.url).href;

// Personal gallery images
const Welcome_Signs = new URL('./images/stock/Personal/Welcome_Signs.webp', import.meta.url).href;
const Welcome_Signs_2 = new URL('./images/stock/Personal/Welcome_Signs_2.webp', import.meta.url).href;
const Welcome_Door_Sign = new URL('./images/stock/Personal/Welcome_Door_Sign.webp', import.meta.url).href;
const Winter_Welcome_Sign = new URL('./images/stock/Personal/Winter_Welcome_Sign.webp', import.meta.url).href;
const Three_Layer_Ski_Sign = new URL('./images/stock/Personal/3_Layer_Ski_Sign.webp', import.meta.url).href;
const Crib_Sign = new URL('./images/stock/Personal/Crib_Sign.webp', import.meta.url).href;
const Diaper_Pong_board = new URL('./images/stock/Personal/Diaper_Pong_board.webp', import.meta.url).href;
const Ocean_charcuterie_boards = new URL('./images/stock/Personal/Ocean_charcuterie_boards.webp', import.meta.url).href;
const Fern_Coasters = new URL('./images/stock/Personal/Fern_Coasters.webp', import.meta.url).href;
const Palm_Coasters = new URL('./images/stock/Personal/Palm_Coasters.webp', import.meta.url).href;
const Mom_Sign = new URL('./images/stock/Personal/Mom_Sign.webp', import.meta.url).href;
const Room_Sign_Dino = new URL('./images/stock/Personal/Room_Sign_Dino.webp', import.meta.url).href;
const Room_Sign_Palm = new URL('./images/stock/Personal/Room_Sign_Palm.webp', import.meta.url).href;
const Custom_Cutting_Board = new URL('./images/stock/Personal/Custom_Cutting_Board.webp', import.meta.url).href;
const Custom_Pencils = new URL('./images/stock/Personal/Custom_Pencils.webp', import.meta.url).href;
const Custom_Pens = new URL('./images/stock/Personal/Custom_Pens.webp', import.meta.url).href;
const Key_Chains = new URL('./images/stock/Personal/Key_Chains.webp', import.meta.url).href;
const Name_Sign = new URL('./images/stock/Personal/Name_Sign.webp', import.meta.url).href;
const Van_Morrison_Mirror = new URL('./images/stock/Personal/Custom Mirror Etching.webp', import.meta.url).href;
const Wooden_Custom_Sign = new URL('./images/stock/Corporate/wooden_Custom_Sign.webp', import.meta.url).href;

// Industrial gallery images
const Industrial_Signage = new URL('./images/stock/Industrial/Industrial_Signage.webp', import.meta.url).href;
const Custom_Acrylic_Cutting = new URL('./images/stock/Industrial/Custom_Acrylic_Cutting.webp', import.meta.url).href;
const Custom_Acrylic_Cutting_2 = new URL('./images/stock/Industrial/Custom_Acrylic_Cutting_2.webp', import.meta.url).href;
const Small_Lamacoids = new URL('./images/stock/Industrial/Small_Lamacoids.webp', import.meta.url).href;
const Small_Lamacoids_2 = new URL('./images/stock/Industrial/Small_Lamacoids_2.webp', import.meta.url).href;
const Etched_anodized_locks = new URL('./images/stock/Industrial/Etched_anodized_locks.webp', import.meta.url).href;

export const NAV_LINKS = [
  { name: 'Home', refKey: 'hero' },
  { name: 'Portfolio', refKey: 'gallery' },
  { name: 'Our Process', refKey: 'process' },
  { name: 'Request Quote', refKey: 'quote' },
  { name: 'About', refKey: 'about' },
  { name: 'Contact', refKey: 'contact' },
  { name: 'Payment Portal', refKey: 'payments' },
];

export const POPULAR_PRODUCTS = [
  { src: Van_Morrison_Mirror, name: 'Custom Etched Mirror', alt: 'Van Morrison Etched Mirror' },
  { src: Custom_Etch_to_Cutting_Board, name: 'Custom Corporate Boards', alt: 'Corporate logo etched on cutting board' },
  { src: Custom_Acrylic_Cutting_2, name: 'Precision Acrylic Cutting', alt: 'Precision industrial acrylic cutting' },
  { src: Acrylic_Desk_Sign, name: 'Acrylic Desk Signs', alt: 'Custom Acrylic Desk Sign' },
  { src: Valentine_Signs, name: 'Valentine Signs', alt: 'Valentine Signs' },
  { src: Cake_Toppers, name: 'Cake Toppers', alt: 'Cake Toppers' },
  { src: Place_Tags, name: 'Place Tags', alt: 'Place Tags' },
  { src: Save_The_Date, name: 'Save The Date', alt: 'Save The Date' },
  { src: Business_Card_Holder, name: 'Business Card Holders', alt: 'Business Card Holder' },
  { src: Corporate_Pens, name: 'Corporate Pens', alt: 'Corporate Pens' },
  { src: Wood_Coasters, name: 'Wood Coasters', alt: 'Wood Coasters' },
  { src: Welcome_Signs, name: 'Welcome Signs', alt: 'Welcome Signs' },
  { src: Palm_Coasters, name: 'Palm Coasters', alt: 'Palm Coasters' },
  { src: Mom_Sign, name: 'Mom Signs', alt: 'Mom Sign' },
  { src: Room_Sign_Dino, name: 'Room Signs', alt: 'Room Sign' },
  { src: Custom_Cutting_Board, name: 'Custom Cutting Boards', alt: 'Custom Cutting Board' },
  { src: Industrial_Signage, name: 'Industrial Signage', alt: 'Industrial Signage' },
  { src: Etched_anodized_locks, name: 'Etched Anodized Locks', alt: 'Etched Anodized Locks' },
  { src: Custom_Acrylic_Cutting, name: 'Custom Acrylic Cutting', alt: 'Custom Acrylic Cutting' },
  { src: Business_bar_sign, name: 'Business Bar Sign', alt: 'Business bar sign on counter' },
  { src: Winter_Welcome_Sign, name: 'Winter Welcome Sign', alt: 'Winter welcome door sign' },
  { src: Three_Layer_Ski_Sign, name: '3 Layer Ski Sign', alt: 'Three layer ski themed sign' },
  { src: Crib_Sign, name: 'Crib Sign', alt: 'Custom crib name sign' },
  { src: Ocean_charcuterie_boards, name: 'Ocean Charcuterie Boards', alt: 'Ocean Charcuterie Boards' },
  { src: Wooden_Custom_Sign, name: 'Wooden Custom Sign', alt: 'Wooden Custom Sign' },
];


export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    title: 'Wedding Items',
    items: [
      { src: Valentine_Signs, name: 'Valentine_Signs', alt: 'Valentine Signs' },
      { src: Table_Numbers, name: 'Table_Numbers', alt: 'Table Numbers' },
      { src: Cake_Toppers, name: 'Cake_Toppers', alt: 'Cake Toppers' },
      { src: Name_Tags, name: 'Name_Tags', alt: 'Name Tags' },
      { src: Place_Tags, name: 'Place_Tags', alt: 'Place Tags' },
      { src: Custom_Fridge_Magnets, name: 'Custom_Fridge_Magnets', alt: 'Custom Fridge Magnets' },
      { src: Champagne_Glass_Tags, name: 'Champagne_Glass_Tags', alt: 'Champagne Glass Tags' },
      { src: Save_The_Date, name: 'Save_The_Date', alt: 'Save The Date' },
    ],
  },
  {
    title: 'Corporate Items',
    items: [
      { src: Custom_Etch_to_Cutting_Board, name: 'Corporate Cutting Boards', alt: 'Custom corporate logo etched on wood' },
      { src: Acrylic_Desk_Sign, name: 'Acrylic Desk Signs', alt: 'Custom acrylic desk signage' },
      { src: Business_bar_sign, name: 'Business_bar_sign', alt: 'Business bar sign' },
      { src: Business_Card_Holder, name: 'Business_Card_Holder', alt: 'Business Card Holder' },
      { src: Cap_With_Logo, name: 'Cap_With_Logo', alt: 'Cap With Logo' },
      { src: Corporate_Pens, name: 'Corporate_Pens', alt: 'Corporate Pens' },
      { src: Slate_Coasters, name: 'Slate_Coasters', alt: 'Slate Coasters' },
      { src: Wood_Coasters, name: 'Wood_Coasters', alt: 'Wood Coasters' },
      { src: Wooden_Custom_Sign, name: 'wooden_Custom_Sign', alt: 'Wooden custom sign' },
    ],
  },
  {
    title: 'Personal Items & Gifts',
    items: [
      { src: Van_Morrison_Mirror, name: 'Custom Etched Mirror', alt: 'Custom etched mirror with artwork' },
      { src: Ocean_charcuterie_boards, name: 'Ocean_charcuterie_boards', alt: 'Ocean charcuterie boards' },
      { src: Crib_Sign, name: 'Crib_Sign', alt: 'Crib sign' },
      { src: Diaper_Pong_board, name: 'Diaper_Pong_board', alt: 'Diaper pong board' },
      { src: Welcome_Signs, name: 'Welcome_Signs', alt: 'Welcome Signs' },
      { src: Welcome_Signs_2, name: 'Welcome_Signs_2', alt: 'Welcome Signs 2' },
      { src: Welcome_Door_Sign, name: 'Welcome_Door_Sign', alt: 'Welcome Door Sign' },
      { src: Winter_Welcome_Sign, name: 'Winter_Welcome_Sign', alt: 'Winter Welcome Sign' },
      { src: Fern_Coasters, name: 'Fern_Coasters', alt: 'Fern Coasters' },
      { src: Palm_Coasters, name: 'Palm_Coasters', alt: 'Palm Coasters' },
      { src: Mom_Sign, name: 'Mom_Sign', alt: 'Mom Sign' },
      { src: Room_Sign_Dino, name: 'Room_Sign_Dino', alt: 'Room Sign Dino' },
      { src: Room_Sign_Palm, name: 'Room_Sign_Palm', alt: 'Room Sign Palm' },
      { src: Custom_Cutting_Board, name: 'Custom_Cutting_Board', alt: 'Custom Cutting Board' },
      { src: Custom_Pencils, name: 'Custom_Pencils', alt: 'Custom Pencils' },
      { src: Custom_Pens, name: 'Custom_Pens', alt: 'Custom Pens' },
      { src: Key_Chains, name: 'Key_Chains', alt: 'Key Chains' },
      { src: Name_Sign, name: 'Name_Sign', alt: 'Name Sign' },
      { src: Three_Layer_Ski_Sign, name: '3_Layer_Ski_Sign', alt: 'Three layer ski sign' },
    ],
  },
  {
    title: 'Industrial Signage & Lamacoids',
    items: [
      { src: Custom_Acrylic_Cutting_2, name: 'Industrial Acrylic Cutting', alt: 'Precision acrylic cutting' },
      { src: Etched_anodized_locks, name: 'Etched_anodized_locks', alt: 'Etched anodized locks' },
      { src: Industrial_Signage, name: 'Industrial_Signage', alt: 'Industrial Signage' },
      { src: Small_Lamacoids, name: 'Small_Lamacoids', alt: 'Small Lamacoids' },
      { src: Small_Lamacoids_2, name: 'Small_Lamacoids_2', alt: 'Small Lamacoids 2' },
      { src: Custom_Acrylic_Cutting, name: 'Custom_Acrylic_Cutting', alt: 'Custom Acrylic Cutting' },
    ],
  },
];

export const SEO_METADATA: SeoMetadata = {
  hero: {
    title: 'Laser Engraving & Cutting London Ontario | Forest City Laser',
    description: 'Top-rated laser engraving and cutting service in London, Ontario. Specializing in custom wood, acrylic, and leather products. Precision custom gifts and industrial signage.',
  },
  gallery: {
    title: 'Portfolio | Forest City Laser',
    description: 'Browse our gallery of custom laser-cut and engraved items, including wedding decor, corporate branding, personalized gifts, and industrial signage.',
  },
  process: {
    title: 'Our Process | Forest City Laser',
    description: 'From idea to finished product, learn about our simple and transparent 5-step process for bringing your custom laser-cut visions to life.',
  },
  quote: {
    title: 'Request a Quote | Forest City Laser',
    description: 'Get a free, no-obligation quote for your custom laser cutting or engraving project. We bring your unique ideas to life with precision and care.',
  },
  about: {
    title: 'About Us | Forest City Laser',
    description: 'Learn about Forest City Laser, a London, Ontario-based business born from a passion for combining technical precision with beautiful design.',
  },
  contact: {
    title: 'Contact Us | Forest City Laser',
    description: 'Get in touch with Forest City Laser. We are ready to answer your questions and discuss your next custom project. Live chat available during business hours.',
  },
  payments: {
    title: 'Payment Portal | Forest City Laser',
    description: 'Securely make a payment for your custom laser engraving or cutting order through our online payment portal.'
  }
};

// --- Google Reviews (Homepage) ---
// Tip: For each review, open it on Google and use "Share" → copy link.
// Those "share review" links are the cleanest way to link to the exact review.
export const GOOGLE_REVIEWS_PROFILE_URL =
  'https://www.google.com/search?q=Forest+City+Laser+reviews';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: 'Karen Stephens',
    rating: 5,
    dateLabel: 'a month ago',
    text:
      '“We recently had a custom business sign done by Forest City Laser, and we are absolutely thrilled with the result. The craftsmanship, attention to detail, and overall quality exceeded our expectations… Highly recommend Forest City Laser for anyone looking for beautiful, high-quality signage.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/PojmRf7F1YKnQqep6',
  },
  {
    author: 'Scott Boyd',
    rating: 5,
    dateLabel: '2 weeks ago',
    text:
      '“Placed an order for a custom acrylic piece and it was ready within two days. One side was glossy and the other matte, as seen in the photos. The cut edge also had a good finish to it. Overall, I am happy with my piece.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/yiy38Mvjcq2Uke117',
  },
  {
    author: 'Peter Carr',
    rating: 5,
    dateLabel: '2 hours ago',
    text:
      '“Forest City Laser is fantastic! Very nice to deal with and they do great work! Highly recommended and appreciated.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/8yuiBeoNrvHhZbmp9',
  },
  {
    author: 'Holly Bridge',
    rating: 5,
    dateLabel: '3 days ago',
    text:
      '“Very efficient and responds right away with updates. Very friendly to work with. I will certainly be calling them for service again in the future. They did exactly what I needed, so happy with their service!”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/6MDqZy44mSUB1czK7',
  },
];
