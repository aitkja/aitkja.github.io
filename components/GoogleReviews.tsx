import React, { useRef, useEffect } from 'react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_PROFILE_URL } from '../constants';

const StarRow: React.FC<{ rating: number; className?: string }> = ({ rating, className }) => (
  <div className={`flex items-center gap-0.5 ${className ?? ''}`}>
    {Array.from({ length: 5 }).map((_, i) => {
      const filled = i < rating;
      return (
        <svg
          key={i}
          className={`h-3 w-3 ${filled ? 'text-amber-500' : 'text-slate-300'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    })}
    <span className="sr-only">{rating} out of 5 stars</span>
  </div>
);

const ReviewCard: React.FC<{
  author: string;
  rating: number;
  text: string;
  url: string;
  'aria-hidden'?: string;
}> = ({ author, rating, text, url, 'aria-hidden': ariaHidden }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block flex-none w-[250px] sm:min-w-0 snap-start rounded-lg border border-slate-200 bg-white/90 p-2.5 shadow-sm transition hover:bg-white hover:shadow-md"
    aria-label={`Open Google review by ${author} (${rating} stars)`}
    aria-hidden={ariaHidden}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">{author}</p>
        <StarRow rating={rating} className="mt-0.5" />
      </div>
      <svg
        className="h-4 w-4 flex-none text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14h14v-5" />
      </svg>
    </div>

    <p
      className="mt-2 text-[13px] text-slate-700 leading-snug"
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
      }}
    >
      {text}
    </p>
  </a>
);

const GoogleReviews: React.FC = () => {
  const reviews = GOOGLE_REVIEWS;
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.setAttribute('data-animated', 'true');
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-3">
          <a
            href={GOOGLE_REVIEWS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 shadow-sm hover:shadow transition"
            aria-label="Open Forest City Laser Google Reviews"
          >
            <StarRow rating={5} />
            <span className="text-[11px] font-bold tracking-wide uppercase text-slate-800">
              5‑Star Rated on Google
            </span>
          </a>

          <a
            href={GOOGLE_REVIEWS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline decoration-slate-300 hover:decoration-slate-500"
          >
            Read all reviews
          </a>
        </div>

        {/* Mobile: Continuous carousel view */}
        <style>{`
          .reviews-scroller {
            -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
            mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          }
          .reviews-scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
          }
          .reviews-scroller[data-animated="true"] .reviews-scroller__inner {
            animation: scrollReviews 18s linear infinite;
          }
          @keyframes scrollReviews {
            to {
              transform: translate(calc(-50%));
            }
          }
        `}</style>

        <div className="sm:hidden overflow-hidden">
          <div className="reviews-scroller overflow-hidden" ref={scrollerRef} data-animated="true">
            <div className="reviews-scroller__inner flex gap-2.5">
              {reviews.map((r) => (
                <ReviewCard
                  key={`${r.author}-${r.text.slice(0, 24)}`}
                  author={r.author}
                  rating={r.rating}
                  text={r.text}
                  url={r.url}
                />
              ))}
              {reviews.map((r) => (
                <ReviewCard
                  key={`${r.author}-${r.text.slice(0, 24)}-dup`}
                  author={r.author}
                  rating={r.rating}
                  text={r.text}
                  url={r.url}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid view */}
        <div className="hidden sm:grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {reviews.map((r) => (
            <ReviewCard
              key={`${r.author}-${r.text.slice(0, 24)}`}
              author={r.author}
              rating={r.rating}
              text={r.text}
              url={r.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;


