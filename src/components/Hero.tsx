import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowDown, Flame, Activity, Zap } from 'lucide-react';
import { HeroMetricsHUD } from './HeroMetricsHUD';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position inside sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic values mapped to scroll distance
  const strength = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [82, 95, 88, 99]);
  const endurance = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [76, 84, 98, 92]);
  const speed = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [91, 78, 85, 96]);

  const [currentStrength, setCurrentStrength] = useState(82);
  const [currentEndurance, setCurrentEndurance] = useState(76);
  const [currentSpeed, setCurrentSpeed] = useState(91);
  const [stageIndex, setStageIndex] = useState(0);

  const stageLabels = [
    "PHASE 01: INITIAL VELOCITY",
    "PHASE 02: MAXIMUM POWER LOAD",
    "PHASE 03: AEROBIC VO2 EXTENSION",
    "PHASE 04: APEX ATHLETE PEAK"
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentStrength(strength.get());
    setCurrentEndurance(endurance.get());
    setCurrentSpeed(speed.get());
    
    if (latest < 0.25) setStageIndex(0);
    else if (latest < 0.55) setStageIndex(1);
    else if (latest < 0.8) setStageIndex(2);
    else setStageIndex(3);
  });

  // Background High-Contrast Athlete Photos corresponding to scroll progress
  const athleteImages = [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=90"
  ];

  return (
    <div id="home" ref={containerRef} className="relative h-[280vh] bg-black">
      {/* Sticky Full-Bleed Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 pt-24 sm:pt-24 md:pt-24">
        
        {/* Dynamic High-Contrast Background Image Layer */}
        {athleteImages.map((imgUrl, idx) => (
          <motion.div
            key={imgUrl}
            className="absolute inset-0 z-0 bg-cover bg-center filter grayscale contrast-150 brightness-75 transition-opacity duration-700"
            style={{
              backgroundImage: `url(${imgUrl})`,
              opacity: stageIndex === idx ? 0.75 : 0,
            }}
          />
        ))}

        {/* Dark Editorial Overlay & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-0" />
        <div className="absolute inset-0 bg-grain z-0 opacity-40 pointer-events-none" />

        {/* HERO MAIN CONTENT & KINETIC TYPOGRAPHY */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start py-2 sm:py-4">
          {/* Issue & Location Tag */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-[10px] sm:text-xs text-zinc-400 tracking-widest">
            <span className="inline-block w-2.5 h-2.5 bg-[#ff3b00] transform skew-x-12 animate-pulse" />
            <span>EDITORIAL SPORTS ISSUE 04 / 2026</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-300 hidden sm:inline">KUALA LUMPUR HQ</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-[#ccff00] hidden sm:inline">TEL: +60 11-3071 9502</span>
          </div>

          {/* MASSIVE HERO STATEMENT */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] text-white uppercase select-none">
            BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ff3b00]">
              SOMETHING
            </span> <br />
            <span className="text-[#ff3b00] underline decoration-4 underline-offset-8">
              STRONGER.
            </span>
          </h1>

          {/* Subtitle / Editorial Tagline */}
          <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base text-zinc-300 font-sans font-light leading-relaxed border-l-2 border-[#ff3b00] pl-3 sm:pl-4">
            Custom engineered strength, conditioning & speed protocols for individuals who refuse average limits. Scroll down to trigger real-time athlete metric simulation.
          </p>

          {/* Action CTA */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 items-center">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[#ff3b00] hover:bg-[#ccff00] text-black font-sports font-bold text-sm sm:text-base tracking-wider transition-colors flex items-center gap-2 sm:gap-3 transform -skew-x-6 hover:skew-x-0 min-h-[44px]"
            >
              <span>CLAIM YOUR EVALUATION</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </button>
            <a
              href="#philosophy"
              className="px-5 py-3 sm:px-6 sm:py-3.5 border border-white/30 hover:border-white text-white font-mono text-xs tracking-widest uppercase transition-colors min-h-[44px] flex items-center"
            >
              EXPLORE PHILOSOPHY
            </a>
          </div>
        </div>

        {/* BOTTOM SIGNATURE INTERACTION HUD: SCROLLING CHANGES METRICS */}
        <div className="relative z-20 w-full max-w-4xl mx-auto pb-1 sm:pb-2">
          <HeroMetricsHUD
            strength={currentStrength}
            endurance={currentEndurance}
            speed={currentSpeed}
            stageLabel={stageLabels[stageIndex]}
          />

          {/* Scroll Prompt Indicator */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-400 mt-1.5 sm:mt-2 px-1">
            <div className="flex items-center gap-2">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] animate-bounce" />
              <span className="hidden sm:inline">SCROLL DOWN TO ENGAGE TRAINING METRICS PROTOCOL</span>
              <span className="sm:hidden">SCROLL TO ENGAGE METRICS</span>
            </div>
            <span className="text-zinc-500">STAGE {stageIndex + 1} OF 4</span>
          </div>
        </div>


      </div>
    </div>
  );
};
