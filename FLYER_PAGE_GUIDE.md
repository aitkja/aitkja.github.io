# Forest City Laser - Flyer Page Guide

## Overview

Your website now has a new **standalone flyer page** at `/flyer` that's optimized for printing as a standard letter-size (8.5" x 11") document.

## Features

✅ **Professional Print Layout**
- Optimized for letter-size printing (8.5" x 11")
- Print-ready styling with correct color settings
- Professional header with your branding
- Proper spacing and typography

✅ **Showcase Your Work**
- Features 4 service categories:
  - Wedding & Event Solutions
  - Corporate Branding Services
  - Personalized Gifts & Decor
  - Industrial & Commercial Solutions
- Each category displays 5 images from your portfolio
- Uses your actual project images from `/images/stock/`

✅ **Easy Navigation**
- Access from: `http://localhost:5173/flyer`
- Works seamlessly alongside your main website
- Home page (`http://localhost:5173/`) remains unchanged

## How to Use

### Viewing the Flyer Online
1. Navigate to `http://localhost:5173/flyer` in your browser
2. The page displays as a perfect letter-size document

### Printing the Flyer
1. Open `http://localhost:5173/flyer` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the print dialog
3. Settings recommended:
   - **Destination:** Save as PDF or your printer
   - **Size:** Letter (8.5" x 11")
   - **Margins:** Minimal/None
   - **Background graphics:** ON (for colors to print correctly)
4. Click Print

### Customizing the Flyer

The flyer is built as a React component at: `components/Flyer.tsx`

To customize, you can:

#### Change the Images
Edit the image arrays in `Flyer.tsx`:
```typescript
const weddingImages = [
  '/images/stock/Weddings/Cake_Toppers.webp',
  // Add or change image paths here
];
```

#### Update Contact Information
Find and edit the footer section:
```typescript
<p className="text-[#333333] text-sm font-medium leading-normal">
  forestcitylaser.com
</p>
<p className="text-[#333333] text-sm font-medium leading-normal">
  contact@forestcitylaser.com
</p>
<p className="text-[#333333] text-sm font-medium leading-normal">
  (555) 123-4567
</p>
```

#### Adjust Colors
Your brand colors are defined in the component:
- Primary text: `#333333`
- Accent green: `#2A4B3A`
- Accent gold: `#C4A484`
- Background: `#f7f7f7`

## Technical Details

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Component Location:** `components/Flyer.tsx`
- **Routing:** Client-side navigation in `App.tsx`

## File Structure

```
components/
├── Flyer.tsx (NEW - Flyer page component)
├── Header.tsx
├── Hero.tsx
└── ... (other components)

App.tsx (Updated - Added routing for /flyer)
vite.config.ts (Updated - Added SPA routing support)
```

## Deployment

When you deploy your website:

1. The flyer page will be available at: `https://forestcitylaser.com/flyer`
2. All print functionality works on production builds
3. Images will be hosted alongside your other assets

## Troubleshooting

**Images not showing?**
- Ensure image files exist in `/images/stock/` directory
- Check that file paths in the component match your file structure

**Print layout looks different?**
- Make sure "Background graphics" is enabled in your browser's print settings
- Try printing to PDF first to preview the output

**Colors not printing correctly?**
- In your browser's print settings, enable "Background graphics" or "Background colors"
- Different printers may render colors slightly differently

## Support

For any questions or customizations needed, refer to the component file at `components/Flyer.tsx` or contact your development team.






