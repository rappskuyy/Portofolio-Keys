import React from 'react';
import { profileData } from '../../data/portfolioData';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  withText = false
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-xs' },
    md: { img: 'w-10 h-10', text: 'text-sm' },
    lg: { img: 'w-14 h-14', text: 'text-base' },
    xl: { img: 'w-24 h-24', text: 'text-lg' }
  };

  const currentSize = sizeMap[size];
  const initials = profileData.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('');

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        role="img"
        aria-label={profileData.name}
        className={`${currentSize.img} relative flex items-center justify-center rounded-xl border border-white/50 bg-gradient-to-br from-[#38bdf8] to-[#0284c7] font-black text-white shadow-md transition-transform group-hover:scale-105 select-none`}
      >
        <span className={size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xl'}>
          {initials}
        </span>
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className={`font-bold text-white tracking-wide leading-tight drop-shadow-sm ${currentSize.text}`}>
            {profileData.name}
          </span>
          <span className="text-[11px] text-[#fff9d4] font-mono font-medium flex items-center gap-1 drop-shadow-xs">
            Student &bull; Innovator
          </span>
        </div>
      )}
    </div>
  );
};
