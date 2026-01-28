
import React from 'react';
import { BLOG_POSTS } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface BlogProps {
  onSelectPost: (slug: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onSelectPost }) => {
  const headerRef = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section className="py-20 bg-white/90 backdrop-blur-sm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the latest trends, tips, and stories from the world of custom laser cutting and engraving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => onSelectPost(post.slug)}
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs">{post.publishDate}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
