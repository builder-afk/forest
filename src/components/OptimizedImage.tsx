import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  targetWidth?: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  targetWidth,
  priority = false,
  className = '',
  onClick,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If it's a googleusercontent URL, append WebP & resize params
  const optimizedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.includes('googleusercontent.com')) {
      const cleanBase = src.split('=')[0];
      const widthParam = targetWidth ? `w${targetWidth}` : 'w800';
      return `${cleanBase}=${widthParam}-rw`;
    }
    return src;
  }, [src, targetWidth]);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-surface-container animate-pulse rounded" />
      )}
      <img
        src={hasError ? src : optimizedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

