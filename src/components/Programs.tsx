import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/mockData';
import { TrainingProgram } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (program: TrainingProgram) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROGRAMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROGRAMS.length) % PROGRAMS.length);
  };

  const currentProgram = PROGRAMS[activeIndex];

  return (
    <section id="programs" className="py-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-[#ff3b00] tracking-widest uppercase">
              // ARCHITECTURAL TRAINING PROTOCOLS
            </span>
            <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white mt-1">
              TRAINING <span className="text-[#ff3b00]">PROGRAMS</span>
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="font-mono text-sm text-zinc-400">
              0{activeIndex + 1} / 0{PROGRAMS.length}
            </span>
            <button
              onClick={handlePrev}
              className="p-3 bg-zinc-900 hover:bg-[#ff3b00] hover:text-black text-white transition-colors border border-zinc-800"
              aria-label="Previous Program"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-zinc-900 hover:bg-[#ff3b00] hover:text-black text-white transition-colors border border-zinc-800"
              aria-label="Next Program"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Featured Program Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#0d0d0e] border border-zinc-800 p-6 sm:p-10 relative">
          
          {/* Image & Overlay Badges */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] overflow-hidden group">
            <motion.img
              key={currentProgram.id}
              src={currentProgram.image}
              alt={currentProgram.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* Top Tag Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ff3b00] text-black font-sports font-bold text-xs">
                {currentProgram.category}
              </span>
              <span className="px-3 py-1 bg-black/80 text-white font-mono text-xs border border-white/20">
                INTENSITY: {currentProgram.intensity}
              </span>
            </div>

            {/* Bottom Duration & Price Badges */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="font-mono text-xs text-zinc-300 bg-black/90 p-2 border-l-2 border-[#ccff00]">
                DURATION: <span className="text-white font-bold">{currentProgram.duration}</span>
              </div>
              <div className="font-mono text-xs text-black font-bold bg-[#ccff00] p-2">
                INVESTMENT: {currentProgram.priceRM}
              </div>
            </div>

          </div>

          {/* Program Details & Metrics Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-2">
                PROGRAM SPECIFICATION #{currentProgram.id.toUpperCase()}
              </div>
              
              <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                {currentProgram.title}
              </h3>
              
              <p className="font-mono text-xs text-[#ff3b00] mb-4">
                {currentProgram.tagline}
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                {currentProgram.description}
              </p>

              {/* Key Focus Points */}
              <div className="space-y-2 mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">CORE FOCUS AREAS:</span>
                {currentProgram.focus.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Program Metric Profile bars */}
              <div className="bg-black/60 p-4 border border-zinc-800 space-y-3 mb-8">
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">EXPECTED ADAPTATION PROFILE</span>
                
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>STRENGTH TARGET</span>
                    <span className="text-[#ff3b00] font-bold">{currentProgram.metrics.strength}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5">
                    <div className="bg-[#ff3b00] h-1.5" style={{ width: `${currentProgram.metrics.strength}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>ENDURANCE TARGET</span>
                    <span className="text-[#00f0ff] font-bold">{currentProgram.metrics.endurance}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5">
                    <div className="bg-[#00f0ff] h-1.5" style={{ width: `${currentProgram.metrics.endurance}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>SPEED / VELOCITY</span>
                    <span className="text-[#ccff00] font-bold">{currentProgram.metrics.speed}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5">
                    <div className="bg-[#ccff00] h-1.5" style={{ width: `${currentProgram.metrics.speed}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Enroll Action */}
            <button
              onClick={() => onSelectProgram(currentProgram)}
              className="w-full py-4 bg-[#ff3b00] hover:bg-[#ccff00] text-black font-sports font-bold text-lg tracking-wider flex items-center justify-center gap-3 transition-colors transform -skew-x-6 hover:skew-x-0"
            >
              <span>APPLY FOR {currentProgram.title}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>

        {/* Thumbnail Selector Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {PROGRAMS.map((prog, idx) => (
            <button
              key={prog.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 border text-left transition-all ${
                activeIndex === idx
                  ? 'border-[#ff3b00] bg-zinc-900'
                  : 'border-zinc-800 bg-black opacity-60 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] font-mono text-zinc-500 mb-1">0{idx + 1} / {prog.category}</div>
              <div className="font-sports font-bold text-sm text-white truncate">{prog.title}</div>
              <div className="flex justify-between items-center text-[11px] font-mono mt-1">
                <span className="text-[#ff3b00]">{prog.duration}</span>
                <span className="text-[#ccff00] font-bold">{prog.priceRM}</span>
              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
