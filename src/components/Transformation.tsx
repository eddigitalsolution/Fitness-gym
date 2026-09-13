import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../data/mockData';
import { ArrowLeftRight, TrendingUp, Sparkles } from 'lucide-react';

export const Transformation: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const story = TRANSFORMATIONS[activeStoryIndex];

  return (
    <section id="transformation" className="py-24 bg-[#08080a] text-white border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-mono text-[#ff3b00] tracking-widest uppercase mb-1">
              // EMPIRICAL PROOF OF EVOLUTION
            </div>
            <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white">
              ATHLETE <span className="text-[#ff3b00]">TRANSFORMATION</span>
            </h2>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            {TRANSFORMATIONS.map((tf, idx) => (
              <button
                key={tf.name}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2 text-xs font-mono border transition-all ${
                  activeStoryIndex === idx
                    ? 'bg-[#ff3b00] text-black border-[#ff3b00] font-bold'
                    : 'bg-black text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                CASE 0{idx + 1}: {tf.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Transformation Comparison Showcase Card */}
        <div className="bg-black border-2 border-zinc-800 p-6 sm:p-10 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Before vs After Dual High-Contrast Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
              
              {/* Before Photo */}
              <div className="relative border border-zinc-800 overflow-hidden group">
                <img
                  src={story.imageBefore}
                  alt={`${story.name} Before`}
                  className="w-full h-[360px] sm:h-[420px] object-cover filter grayscale contrast-125 brightness-75"
                />
                <div className="absolute top-3 left-3 bg-black/90 px-3 py-1 text-[11px] font-mono text-zinc-300 border border-zinc-700">
                  BEFORE // {story.beforeWeight}
                </div>
              </div>

              {/* After Photo */}
              <div className="relative border-2 border-[#ff3b00] overflow-hidden group">
                <img
                  src={story.imageAfter}
                  alt={`${story.name} After`}
                  className="w-full h-[360px] sm:h-[420px] object-cover filter grayscale contrast-150"
                />
                <div className="absolute top-3 left-3 bg-[#ff3b00] text-black font-sports font-bold px-3 py-1 text-xs">
                  AFTER // {story.afterWeight}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/90 px-3 py-1 text-[11px] font-mono text-[#ccff00] border border-[#ccff00]">
                  {story.duration} PROTOCOL
                </div>
              </div>

              {/* Center Divider Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff3b00] text-black p-3 rounded-full shadow-2xl z-10 hidden sm:flex">
                <ArrowLeftRight className="w-6 h-6" />
              </div>

            </div>

            {/* Metric & Testimonial Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#ccff00] mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  VERIFIED STATISTICAL GAIN
                </div>

                <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-1">
                  {story.name}
                </h3>
                
                <p className="text-xs font-mono text-zinc-400 mb-6">
                  {story.role} • {story.duration}
                </p>

                {/* Major Stat Gain Box */}
                <div className="bg-zinc-900 border-l-4 border-[#ff3b00] p-4 mb-6">
                  <span className="text-[10px] font-mono text-zinc-400">MEASURED PERFORMANCE GAIN:</span>
                  <div className="font-display text-3xl font-bold text-[#ff3b00]">{story.statGain}</div>
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-300 text-sm font-sans italic border-l-2 border-zinc-700 pl-4 py-1 mb-8">
                  "{story.quote}"
                </blockquote>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-900 pt-4">
                <span>STRICTLY ZERO ANABOLICS</span>
                <span className="text-[#ccff00]">100% SPORTS SCIENCE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
