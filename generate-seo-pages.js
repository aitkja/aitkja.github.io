import fs from 'fs';
import path from 'path';

// Define the metadata directly here to ensure static generation has unique content
// This should be kept in sync with constants.tsx for consistent SEO
const SEO_METADATA = {
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
  'leather-engraving-service': {
    title: 'Leather Engraving Service | Custom Patches & Gifts | Forest City Laser',
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
  'custom-acrylic-cutting': {
    title: 'Custom Acrylic Cutting | Precision Laser Cut Parts | Forest City Laser',
    description: 'Precision acrylic laser cutting in London, Ontario. Custom desk signs, business signage, and industrial parts. High-quality finish and fast delivery.'
  },
  'custom-signage-london-ontario': {
    title: 'Custom Signage & Business Signs London Ontario | Forest City Laser',
    description: 'High-quality custom signage for businesses and homes in London, Ontario. Wood, acrylic, and metal signs. Fast turnaround on custom logos.'
  },
  'wedding-decor-event-signage-london-ontario': {
    title: 'Wedding Decor & Event Signage London Ontario | Forest City Laser',
    description: 'Exquisite custom wedding decor and event signage in London, Ontario. Personalized place cards, welcome signs, and more. Fast local service.'
  },
  'custom-gifts-london-ontario': {
    title: 'Custom Gifts London Ontario | Personalized Laser Engraved Gifts',
    description: 'High-quality custom gifts in London, Ontario. Personalized laser engraved wood, acrylic, and leather gifts for any occasion. Local London ON service.'
  },
  'flyer': {
    title: 'Special Offers | Forest City Laser',
    description: 'Check out our latest special offers and custom laser engraving deals in London, Ontario.'
  },
  'blog': {
    title: 'Blog | Forest City Laser',
    description: 'Insights and trends in custom laser cutting and engraving. Discover inspiration for your next project.'
  },
  'blog/custom-laser-cut-wedding-decor-trends-2025-2026': {
    title: 'Custom Laser Cut Wedding Decor Trends 2025-2026 | Forest City Laser',
    description: 'Explore trending laser-cut wedding table numbers, place cards, and personalized details for 2025-2026 weddings in London, Ontario.'
  }
};

const PAGES = Object.keys(SEO_METADATA);

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found. Run build first.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

PAGES.forEach(page => {
  const pageDir = path.join(distPath, page);
  
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  const meta = SEO_METADATA[page];
  let pageContent = indexContent;
  
  // 1. Update Title
  pageContent = pageContent.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );

  // 2. Update Description
  pageContent = pageContent.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // 3. Update OG and Twitter tags
  pageContent = pageContent.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  pageContent = pageContent.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  pageContent = pageContent.replace(
    /<meta property="twitter:title" content=".*?" \/>/,
    `<meta property="twitter:title" content="${meta.title}" />`
  );
  pageContent = pageContent.replace(
    /<meta property="twitter:description" content=".*?" \/>/,
    `<meta property="twitter:description" content="${meta.description}" />`
  );

  // 4. Update the canonical tag for this specific page
  const pageUrl = `https://forestcitylaser.com/${page}/`;
  pageContent = pageContent.replace(
    /<link rel="canonical" href="https:\/\/forestcitylaser\.com\/" \/>/,
    `<link rel="canonical" href="${pageUrl}" />`
  );

  // 5. Update Static SEO Fallback content in body (CRITICAL for fixing "Duplicate" issues)
  // Replace the H1 in the fallback section
  pageContent = pageContent.replace(
    /<h1>.*?<\/h1>/,
    `<h1>${meta.title.split('|')[0].trim()}</h1>`
  );

  fs.writeFileSync(path.join(pageDir, 'index.html'), pageContent);
  console.log(`Generated: ${page}/index.html with unique metadata and canonical: ${pageUrl}`);
});

console.log('Successfully generated physical paths with unique SEO content.');
