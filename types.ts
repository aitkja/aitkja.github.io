
import type React from 'react';
import type { RefObject } from 'react';

export interface GalleryItem {
  src: string;
  name: string;
  alt: string;
}

// Shared props type used by `components/IconComponents.tsx` for SVG icons.
export type IconProps = React.SVGProps<SVGSVGElement>;

export interface GalleryCategory {
  title: string;
  items: GalleryItem[];
}

export interface GoogleReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  dateLabel: string; // e.g. "2 weeks ago" or "Nov 2025"
  text: string; // keep short-ish (1–3 sentences)
  url: string; // ideally: the "Share review" link for that specific review
}

export interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

export interface SeoMetadata {
  [key: string]: {
    title: string;
    description: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: string;
  content: string; // Markdown or HTML string
  image?: string;
  category: string;
}
