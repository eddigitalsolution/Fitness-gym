import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xl',
    md: 'w-10 h-10 text-2xl',
    lg: 'w-14 h-14 text-4xl',
  };

  return (
    <div className={`relative flex items-center gap-3 group select-none ${className}`}>
      {/* Dynamic Polygon Skewed K Brand Mark */}
      <div className={`${sizeClasses[size]} bg-[#ff3b00] flex items-center justify-center transform -skew-x-12 group-hover:bg-[#ccff00] transition-all duration-300 kinetic-glow-orange shadow-lg`}>
        <span className="font-display font-black text-black transform skew-x-12 leading-none">
          K
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-sports font-bold text-xl tracking-tighter text-white group-hover:text-[#ff3b00] transition-colors leading-none">
          KINETIC<span className="text-[#ff3b00] font-light">.ATHLETICS</span>
        </span>
        <span className="text-[9px] font-mono tracking-widest text-zinc-400 mt-1">
          PERFORMANCE LAB
        </span>
      </div>
    </div>
  );
};
