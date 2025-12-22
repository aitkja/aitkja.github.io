import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderClassName?: string;
  eagerLoad?: boolean; // Add new prop
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, placeholderClassName, eagerLoad, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className={`absolute inset-0 bg-slate-200 animate-pulse ${placeholderClassName || ''}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={eagerLoad ? 'eager' : 'lazy'} // Use eagerLoad prop
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
