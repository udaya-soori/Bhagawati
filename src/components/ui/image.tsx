import { forwardRef, type ImgHTMLAttributes, useState, CSSProperties } from 'react';

const FALLBACK_IMAGE_URL = "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
  aspectRatio?: string;
  skeleton?: boolean;
  placeholder?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({
  src,
  alt = '',
  className,
  lazy = true,
  aspectRatio,
  skeleton = false,
  placeholder,
  onError,
  onLoad,
  style,
  ...props
}, ref) => {
  const [isLoading, setIsLoading] = useState(skeleton);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    setIsLoading(false);
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    setIsLoading(false);
    if (onLoad) {
      onLoad(e);
    }
  };

  const imageSrc = hasError ? FALLBACK_IMAGE_URL : src;
  const shouldLazyLoad = lazy && !isLoaded;

  // Container styles
  const containerStyles: CSSProperties = {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    ...(aspectRatio && { aspectRatio }),
    ...style,
  };

  // Image styles
  const imageStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0,
  };

  return (
    <div style={containerStyles}>
      {/* Skeleton loading */}
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200px 100%',
            animation: 'skeleton-loading 1.5s infinite',
          }}
        />
      )}

      {/* Placeholder */}
      {placeholder && !isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 0 : 1,
          }}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        ref={ref}
        src={imageSrc}
        alt={alt}
        className={className}
        style={imageStyles}
        loading={shouldLazyLoad ? 'lazy' : 'eager'}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />

      {/* Fallback */}
      {hasError && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          color: '#666',
          padding: '1rem',
          textAlign: 'center',
        }}>
          <svg
            style={{ width: '48px', height: '48px', marginBottom: '0.5rem', color: '#999' }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>
            Image not available
          </span>
        </div>
      )}

      {/* Inline styles */}
      <style>{`
        @keyframes skeleton-loading {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
      `}</style>
    </div>
  );
});

Image.displayName = 'Image';