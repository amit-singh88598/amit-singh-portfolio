import React from 'react';

interface AIImageProps {
  type: 'developer' | 'coding' | 'tech-workspace' | 'accessibility';
  alt: string;
  className?: string;
}

const AIImage: React.FC<AIImageProps> = ({ type, alt, className = '' }) => {
  // AI-generated image URLs (using placeholder service that generates tech-themed images)
  const imageUrls = {
    developer: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    coding: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    'tech-workspace': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    accessibility: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop'
  };

  // Fallback SVG illustrations for each type
  const fallbackSVGs = {
    developer: (
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="url(#gradient1)"/>
        <circle cx="200" cy="160" r="60" fill="#E5E7EB"/>
        <path d="M120 320 C120 280, 160 240, 200 240 C240 240, 280 280, 280 320 L120 320 Z" fill="#D1D5DB"/>
        <rect x="80" y="80" width="240" height="160" rx="20" fill="#1F2937" opacity="0.1"/>
        <rect x="100" y="100" width="200" height="4" rx="2" fill="#3B82F6"/>
        <rect x="100" y="120" width="160" height="4" rx="2" fill="#10B981"/>
        <rect x="100" y="140" width="180" height="4" rx="2" fill="#F59E0B"/>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFF6FF"/>
            <stop offset="100%" stopColor="#DBEAFE"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    coding: (
      <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="url(#gradient2)"/>
        <rect x="50" y="50" width="500" height="300" rx="20" fill="#1F2937"/>
        <rect x="70" y="70" width="460" height="20" rx="10" fill="#374151"/>
        <circle cx="90" cy="80" r="6" fill="#EF4444"/>
        <circle cx="110" cy="80" r="6" fill="#F59E0B"/>
        <circle cx="130" cy="80" r="6" fill="#10B981"/>
        <rect x="70" y="110" width="120" height="8" rx="4" fill="#3B82F6"/>
        <rect x="70" y="130" width="200" height="8" rx="4" fill="#10B981"/>
        <rect x="90" y="150" width="180" height="8" rx="4" fill="#8B5CF6"/>
        <rect x="70" y="170" width="160" height="8" rx="4" fill="#F59E0B"/>
        <rect x="90" y="190" width="220" height="8" rx="4" fill="#06B6D4"/>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B"/>
            <stop offset="100%" stopColor="#334155"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    'tech-workspace': (
      <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="url(#gradient3)"/>
        <rect x="100" y="200" width="600" height="300" rx="20" fill="#1F2937"/>
        <rect x="120" y="220" width="560" height="260" rx="10" fill="#111827"/>
        <rect x="140" y="240" width="200" height="8" rx="4" fill="#3B82F6"/>
        <rect x="140" y="260" width="300" height="8" rx="4" fill="#10B981"/>
        <rect x="140" y="280" width="250" height="8" rx="4" fill="#F59E0B"/>
        <rect x="50" y="100" width="120" height="80" rx="10" fill="#6B7280"/>
        <rect x="200" y="120" width="80" height="60" rx="8" fill="#9CA3AF"/>
        <circle cx="650" cy="150" r="40" fill="#D1D5DB"/>
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC"/>
            <stop offset="100%" stopColor="#E2E8F0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    accessibility: (
      <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="url(#gradient4)"/>
        <circle cx="300" cy="200" r="150" stroke="#10B981" strokeWidth="8" fill="none"/>
        <circle cx="300" cy="120" r="30" fill="#3B82F6"/>
        <path d="M250 180 L350 180 M300 180 L300 280 M250 250 L300 280 L350 250" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round"/>
        <rect x="200" y="320" width="200" height="40" rx="20" fill="#10B981"/>
        <text x="300" y="345" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">ACCESSIBLE</text>
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECFDF5"/>
            <stop offset="100%" stopColor="#D1FAE5"/>
          </linearGradient>
        </defs>
      </svg>
    )
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={imageUrls[type]} 
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to SVG illustration if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const svgContainer = target.nextElementSibling as HTMLElement;
          if (svgContainer) {
            svgContainer.style.display = 'block';
          }
        }}
      />
      <div className="absolute inset-0 hidden">
        {fallbackSVGs[type]}
      </div>
    </div>
  );
};

export default AIImage;
