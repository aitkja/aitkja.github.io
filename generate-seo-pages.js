import fs from 'fs';
import path from 'path';

const PAGES = [
  'laser-engraving-london-ontario',
  'laser-cutting-london-ontario',
  'engraving-london-ontario',
  'leather-engraving-london-on',
  'leather-engraving-service',
  'wood-laser-engraving-london-on',
  'acrylic-cutting-london-on',
  'custom-acrylic-cutting',
  'custom-signage-london-ontario',
  'wedding-decor-event-signage-london-ontario',
  'flyer'
];

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
  
  // Create an index.html in each subdirectory
  // This ensures GitHub Pages serves it with a 200 OK status
  let pageContent = indexContent;
  
  // Update the canonical tag for this specific page
  const pageUrl = `https://forestcitylaser.com/${page}/`;
  pageContent = pageContent.replace(
    /<link rel="canonical" href="https:\/\/forestcitylaser\.com\/" \/>/,
    `<link rel="canonical" href="${pageUrl}" />`
  );

  fs.writeFileSync(path.join(pageDir, 'index.html'), pageContent);
  console.log(`Generated: ${page}/index.html with unique canonical: ${pageUrl}`);
});

console.log('Successfully generated physical paths for SEO.');
