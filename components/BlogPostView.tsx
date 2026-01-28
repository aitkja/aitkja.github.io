
import React, { useEffect } from 'react';
import type { BlogPost } from '../types';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple formatting helper
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];

    const flushList = (key: number) => {
      if (currentList.length > 0) {
        elements.push(<ul key={`list-${key}`} className="list-disc ml-6 mb-6 space-y-2">{currentList}</ul>);
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList(index);
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList(index);
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-slate-900 mt-10 mb-4 leading-tight border-b border-slate-100 pb-2">
            {trimmed.replace('## ', '')}
          </h2>
        );
        return;
      }
      
      if (trimmed.startsWith('### ')) {
        flushList(index);
        elements.push(
          <h3 key={index} className="text-xl font-bold text-slate-900 mt-8 mb-3 leading-tight">
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith('- ')) {
        const parts = trimmed.replace('- ', '').split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        const formattedItem = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-slate-900">{part.replace(/\*\*/g, '')}</strong>;
          }
          if (part.startsWith('[') && part.includes('](')) {
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
              const [_, linkText, linkUrl] = linkMatch;
              return (
                <a key={i} href={linkUrl} className="text-indigo-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {linkText}
                </a>
              );
            }
          }
          return part;
        });
        currentList.push(<li key={index} className="text-slate-700 pl-1">{formattedItem}</li>);
        return;
      }

      if (trimmed === '---') {
        flushList(index);
        elements.push(<hr key={index} className="my-10 border-slate-100" />);
        return;
      }

      // Default paragraph handling
      flushList(index);
      const parts = trimmed.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      const formattedLine = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-slate-900">{part.replace(/\*\*/g, '')}</strong>;
        }
        if (part.startsWith('[') && part.includes('](')) {
          const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
          if (linkMatch) {
            const [_, linkText, linkUrl] = linkMatch;
            return (
              <a 
                key={i} 
                href={linkUrl} 
                className="text-indigo-600 font-semibold hover:text-indigo-800 underline decoration-indigo-200 hover:decoration-indigo-500 transition-all"
                target={linkUrl.startsWith('http') ? '_blank' : undefined}
                rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {linkText}
              </a>
            );
          }
        }
        return part;
      });

      elements.push(
        <p key={index} className="text-slate-700 leading-relaxed mb-4 text-lg">
          {formattedLine}
        </p>
      );
    });

    flushList(lines.length);
    return elements;
  };

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <header className="relative py-24 bg-slate-900 overflow-hidden">
        {post.image && (
          <div className="absolute inset-0 opacity-30">
            <img src={post.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-indigo-300 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </button>
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-300 text-xs font-medium self-center">{post.publishDate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-100 max-w-none">
          {renderContent(post.content)}
        </div>
        
        {/* Footer info */}
        <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Interested in custom wedding decor?</h4>
          <p className="text-slate-600 mb-6">
            Let's create something unique for your special day.
          </p>
          <a 
            href="/#quote" 
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostView;
