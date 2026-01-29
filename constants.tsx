import type { GalleryCategory, GoogleReview, SeoMetadata, BlogPost } from './types';

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
  { name: 'Blog', refKey: 'blog' },
  { name: 'About', refKey: 'about' },
  { name: 'Contact', refKey: 'contact' },
  { name: 'Payment Portal', refKey: 'payments' },
];

export const POPULAR_PRODUCTS = [
  { src: Van_Morrison_Mirror, name: 'Custom Etched Mirror', alt: 'Custom laser etched mirror artwork in London Ontario' },
  { src: Custom_Etch_to_Cutting_Board, name: 'Custom Corporate Boards', alt: 'Corporate logo laser engraving on wood cutting board London Ontario' },
  { src: Custom_Acrylic_Cutting_2, name: 'Precision Acrylic Cutting', alt: 'Precision industrial acrylic laser cutting London Ontario' },
  { src: Acrylic_Desk_Sign, name: 'Acrylic Desk Signs', alt: 'Custom acrylic laser cutting and engraving for desk signs' },
  { src: Valentine_Signs, name: 'Valentine Signs', alt: 'Custom laser cut Valentine decor and signage' },
  { src: Cake_Toppers, name: 'Cake Toppers', alt: 'Custom laser cut acrylic and wood cake toppers London Ontario' },
  { src: Place_Tags, name: 'Place Tags', alt: 'Laser cut wedding place tags and event signage' },
  { src: Save_The_Date, name: 'Save The Date', alt: 'Custom laser engraved save the date wood magnets' },
  { src: Business_Card_Holder, name: 'Business Card Holders', alt: 'Custom laser cut business card holder with logo' },
  { src: Corporate_Pens, name: 'Corporate Pens', alt: 'Laser engraved corporate pens London Ontario' },
  { src: Wood_Coasters, name: 'Wood Coasters', alt: 'Custom laser engraved wood coasters for branding' },
  { src: Welcome_Signs, name: 'Welcome Signs', alt: 'Custom laser cut wood welcome signs for home decor' },
  { src: Palm_Coasters, name: 'Palm Coasters', alt: 'Laser engraved palm leaf coasters wood' },
  { src: Mom_Sign, name: 'Mom Signs', alt: 'Custom laser cut name signs for gifts' },
  { src: Room_Sign_Dino, name: 'Room Signs', alt: 'Custom laser cut kids room name signs London Ontario' },
  { src: Custom_Cutting_Board, name: 'Custom Cutting Boards', alt: 'Custom laser engraving on wood cutting boards gifts' },
  { src: Industrial_Signage, name: 'Industrial Signage', alt: 'Industrial laser engraving and signage London Ontario' },
  { src: Etched_anodized_locks, name: 'Etched Anodized Locks', alt: 'Precision laser engraving on anodized metal locks' },
  { src: Custom_Acrylic_Cutting, name: 'Custom Acrylic Cutting', alt: 'Custom acrylic laser cutting service London Ontario' },
  { src: Business_bar_sign, name: 'Business Bar Sign', alt: 'Laser cut acrylic business sign for counter display' },
  { src: Winter_Welcome_Sign, name: 'Winter Welcome Sign', alt: 'Winter welcome door sign laser cut wood' },
  { src: Three_Layer_Ski_Sign, name: '3 Layer Ski Sign', alt: 'Multi-layer laser cut wood sign artwork' },
  { src: Crib_Sign, name: 'Crib Sign', alt: 'Custom nursery name sign laser cut wood' },
  { src: Ocean_charcuterie_boards, name: 'Ocean Charcuterie Boards', alt: 'Custom laser engraving on resin and wood charcuterie boards' },
  { src: Wooden_Custom_Sign, name: 'Wooden Custom Sign', alt: 'Custom laser cut and engraved wood signage' },
];


export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    title: 'Wedding Items',
    items: [
      { src: Valentine_Signs, name: 'Valentine_Signs', alt: 'Custom laser cut Valentine wedding decor' },
      { src: Table_Numbers, name: 'Table_Numbers', alt: 'Laser cut wood and acrylic table numbers' },
      { src: Cake_Toppers, name: 'Cake_Toppers', alt: 'Custom laser cut cake toppers London Ontario' },
      { src: Name_Tags, name: 'Name_Tags', alt: 'Laser engraved wedding name tags and place cards' },
      { src: Place_Tags, name: 'Place_Tags', alt: 'Custom laser cut place tags for events' },
      { src: Custom_Fridge_Magnets, name: 'Custom_Fridge_Magnets', alt: 'Laser engraved wood magnets for wedding favors' },
      { src: Champagne_Glass_Tags, name: 'Champagne_Glass_Tags', alt: 'Acrylic laser cut champagne glass name tags' },
      { src: Save_The_Date, name: 'Save_The_Date', alt: 'Custom laser engraved save the date magnets' },
    ],
  },
  {
    title: 'Corporate Items',
    items: [
      { src: Custom_Etch_to_Cutting_Board, name: 'Corporate Cutting Boards', alt: 'Corporate logo laser engraving on wood London Ontario' },
      { src: Acrylic_Desk_Sign, name: 'Acrylic Desk Signs', alt: 'Custom acrylic desk signage laser cut' },
      { src: Business_bar_sign, name: 'Business_bar_sign', alt: 'Laser cut business sign for retail counters' },
      { src: Business_Card_Holder, name: 'Business_Card_Holder', alt: 'Custom wood business card holder laser cut' },
      { src: Cap_With_Logo, name: 'Cap_With_Logo', alt: 'Laser engraved leather patches for hats' },
      { src: Corporate_Pens, name: 'Corporate_Pens', alt: 'Laser engraved pens for business branding' },
      { src: Slate_Coasters, name: 'Slate_Coasters', alt: 'Custom laser engraved slate coasters' },
      { src: Wood_Coasters, name: 'Wood_Coasters', alt: 'Laser engraved wood coasters with logo' },
      { src: Wooden_Custom_Sign, name: 'wooden_Custom_Sign', alt: 'Custom laser engraved wood business signage' },
    ],
  },
  {
    title: 'Personal Items & Gifts',
    items: [
      { src: Van_Morrison_Mirror, name: 'Custom Etched Mirror', alt: 'Custom laser etched mirror artwork gifts London Ontario' },
      { src: Ocean_charcuterie_boards, name: 'Ocean_charcuterie_boards', alt: 'Personalized laser engraving on wood boards' },
      { src: Crib_Sign, name: 'Crib_Sign', alt: 'Custom laser cut nursery name sign' },
      { src: Diaper_Pong_board, name: 'Diaper_Pong_board', alt: 'Custom laser engraved wood games' },
      { src: Welcome_Signs, name: 'Welcome_Signs', alt: 'Laser cut wood welcome signs for home' },
      { src: Welcome_Signs_2, name: 'Welcome_Signs_2', alt: 'Custom wood signage laser cut' },
      { src: Welcome_Door_Sign, name: 'Welcome_Door_Sign', alt: 'Front door laser cut welcome sign' },
      { src: Winter_Welcome_Sign, name: 'Winter_Welcome_Sign', alt: 'Seasonal laser cut wood decor' },
      { src: Fern_Coasters, name: 'Fern_Coasters', alt: 'Botanical laser engraved wood coasters' },
      { src: Palm_Coasters, name: 'Palm_Coasters', alt: 'Laser cut tropical leaf wood coasters' },
      { src: Mom_Sign, name: 'Mom_Sign', alt: 'Custom laser cut Mother’s Day gifts' },
      { src: Room_Sign_Dino, name: 'Room_Sign_Dino', alt: 'Laser cut dinosaur name sign for kids room' },
      { src: Room_Sign_Palm, name: 'Room_Sign_Palm', alt: 'Laser cut palm leaf name sign for kids room' },
      { src: Custom_Cutting_Board, name: 'Custom_Cutting_Board', alt: 'Custom laser engraved cutting board gift' },
      { src: Custom_Pencils, name: 'Custom_Pencils', alt: 'Laser engraved personalized pencils' },
      { src: Custom_Pens, name: 'Custom_Pens', alt: 'Laser engraved personalized pens' },
      { src: Key_Chains, name: 'Key_Chains', alt: 'Custom laser cut wood and acrylic keychains' },
      { src: Name_Sign, name: 'Name_Sign', alt: 'Custom laser cut name signs London Ontario' },
      { src: Three_Layer_Ski_Sign, name: '3_Layer_Ski_Sign', alt: 'Layered laser cut wood artwork sign' },
    ],
  },
  {
    title: 'Industrial Signage & Lamacoids',
    items: [
      { src: Custom_Acrylic_Cutting_2, name: 'Industrial Acrylic Cutting', alt: 'Precision industrial acrylic laser cutting London Ontario' },
      { src: Etched_anodized_locks, name: 'Etched_anodized_locks', alt: 'Laser engraved anodized metal locks' },
      { src: Industrial_Signage, name: 'Industrial_Signage', alt: 'Industrial laser engraving and safety signage' },
      { src: Small_Lamacoids, name: 'Small_Lamacoids', alt: 'Laser engraved lamacoid tags and labels' },
      { src: Small_Lamacoids_2, name: 'Small_Lamacoids_2', alt: 'Industrial lamacoid engraving services' },
      { src: Custom_Acrylic_Cutting, name: 'Custom_Acrylic_Cutting', alt: 'Custom laser cutting for acrylic parts' },
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
  },
  'laser-engraving-london-ontario': {
    title: 'Laser Engraving London Ontario | Same Week Turnaround | Forest City Laser',
    description: 'Premier laser engraving in London, Ontario. Custom wood, leather, glass & metal etching. Fast turnaround on custom logos & gifts. Local London ON service.'
  },
  'laser-cutting-london-ontario': {
    title: 'Laser Cutting London Ontario | Precision Custom Parts | Forest City Laser',
    description: 'Expert laser cutting services in London, Ontario. Precision cutting for acrylic, wood, and industrial materials. Custom logos, signage, and fast turnaround.'
  },
  'engraving-london-ontario': {
    title: 'Engraving London Ontario | Custom Gifts & Signs | Forest City Laser',
    description: 'Looking for engraving in London, Ontario? We offer custom laser etching on wood, acrylic, leather, and more. Local service with same week turnaround.'
  },
  'leather-engraving-london-on': {
    title: 'Leather Engraving London ON | Custom Patches & Gifts | Forest City Laser',
    description: 'Professional leather engraving in London, Ontario. Personalize wallets, journals, and patches with custom logos. Fast turnaround on all leather etching.'
  },
  'wood-laser-engraving-london-on': {
    title: 'Wood Laser Engraving London ON | Custom Wood Gifts | Forest City Laser',
    description: 'High-quality wood laser engraving in London, Ontario. Custom cutting boards, signs, and personalized wood gifts. Local service, fast turnaround.'
  },
  'acrylic-cutting-london-on': {
    title: 'Acrylic Cutting London ON | Custom Signs & Parts | Forest City Laser',
    description: 'Precision acrylic laser cutting in London, Ontario. Custom desk signs, business signage, and industrial parts. High-quality finish and fast delivery.'
  },
  'custom-signage': {
    title: 'Custom Signage & Business Signs London Ontario | Forest City Laser',
    description: 'High-quality custom signage for businesses and homes in London, Ontario. Wood, acrylic, and metal signs. Fast turnaround on custom logos.'
  },
  'wedding-events': {
    title: 'Wedding Decor & Event Signage London Ontario | Forest City Laser',
    description: 'Exquisite custom wedding decor and event signage in London, Ontario. Personalized place cards, welcome signs, and more. Fast local service.'
  },
  'custom-gifts-london-ontario': {
    title: 'Custom Gifts London Ontario | Personalized Laser Engraved Gifts',
    description: 'High-quality custom gifts in London, Ontario. Personalized laser engraved wood, acrylic, and leather gifts for any occasion. Local London ON service.'
  },
  'blog': {
    title: 'Blog | Forest City Laser',
    description: 'Insights and trends in custom laser cutting and engraving. Discover inspiration for your next project, from weddings to corporate branding.'
  },
  'custom-laser-cut-wedding-decor-trends-2025-2026': {
    title: 'Custom Laser Cut Wedding Decor Trends 2025-2026 | Forest City Laser',
    description: 'Explore trending laser-cut wedding table numbers, place cards, and personalized details for 2025-2026 weddings in London, Ontario.'
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'custom-laser-cut-wedding-decor-trends-2025-2026',
    title: 'Custom Laser Cut Wedding Decor Trends for 2025-2026: Table Numbers, Place Cards & Personalized Details',
    publishDate: 'January 2026',
    category: 'Weddings',
    image: Valentine_Signs, // Using a wedding related image as placeholder/main image
    excerpt: 'Planning a wedding involves countless decisions, but it\'s often the small, personalized details that guests remember most. Here\'s what we\'re seeing trending for 2025-2026 weddings.',
    content: `
Planning a wedding involves countless decisions, but it's often the small, personalized details that guests remember most. For 2025-2026, we're seeing a major shift toward custom laser-cut elements that create a cohesive, professional look throughout the reception.

## Popular Laser-Cut Wedding Items

### Wedding Table Numbers
Essential for guiding guests, modern trends include:
- **Frosted Acrylic**: Sleek, minimalist, and elegant.
- **Natural Wood**: Perfect for rustic or garden venues.
- **Layered Designs**: Combining wood and acrylic for a 3D effect.

### Personalized Place Cards
Help guests find their seats with a personal touch:
- **Individual Wood Names**: A beautiful keepsake guests can take home.
- **Geometric Acrylic**: Hexagons and circles with clean typography.
- **Dual-Purpose**: Coasters or ornaments that double as place cards.

## Material Choices: Acrylic vs. Wood

- **Acrylic (Modern & Sleek)**: Best for contemporary venues and clean, minimalist themes. It’s weather-resistant and photographs beautifully.
- **Wood (Timeless & Versatile)**: Brings warmth and texture. It works with virtually any theme, from rustic barns to classic ballrooms.

## The Laser Cutting Advantage

When ordering for volume (50-200+ pieces), laser cutting offers:
- **Consistency**: Every single piece is identical in quality.
- **Precision**: Intricate designs impossible to achieve by hand.
- **Efficiency**: Fast turnaround even for large personalized orders.

---

*Planning your wedding decor in London, Ontario? [Browse our portfolio](/#gallery) to see examples of our recent custom work.*
`
  }
];

// --- Google Reviews (Homepage) ---
// Tip: For each review, open it on Google and use "Share" → copy link.
// Those "share review" links are the cleanest way to link to the exact review.
export const GOOGLE_REVIEWS_PROFILE_URL =
  'https://www.google.com/search?q=Forest+City+Laser+reviews';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: 'Maria Calleja',
    rating: 5,
    dateLabel: '3 days ago',
    text:
      '“Jamie is so easy to work with... patient, kind and generous. He made my project possible and I am so pleased. I highly recommend Forest City Laser.”',
    url: 'https://maps.app.goo.gl/MNYBM86rtfMM9nqD7',
  },
  {
    author: 'Karen Stephens',
    rating: 5,
    dateLabel: 'a month ago',
    text:
      '“Absolutely thrilled with the result. The craftsmanship and overall quality exceeded our expectations… Highly recommend Forest City Laser for beautiful signage.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/PojmRf7F1YKnQqep6',
  },
  {
    author: 'Scott Boyd',
    rating: 5,
    dateLabel: '2 weeks ago',
    text:
      '“Custom acrylic piece was ready within two days. The cut edge had a good finish... Overall, I am happy with my piece.”',
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
      '“Very efficient and responds right away with updates. They did exactly what I needed, so happy with their service! I will certainly be calling them again.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://maps.app.goo.gl/6MDqZy44mSUB1czK7',
  },
  {
    author: 'David Miller',
    rating: 5,
    dateLabel: 'a week ago',
    text:
      '“I received great service and a perfect product at a reasonable price. Thank you Forest City Laser.”',
    // Share link (Google → review → Share → copy link)
    url: 'https://share.google/zKgxq2vH0JkrzpZnm',
  },
];
