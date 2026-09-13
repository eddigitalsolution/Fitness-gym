import React from 'react';
import { Zap, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#ff3b00] text-black relative overflow-hidden">
      
      {/* Editorial Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 text-xs font-mono tracking-widest uppercase mb-6">
          <Flame className="w-4 h-4 text-[#ff3b00]" />
          LIMITED CAPACITY // ONLY 5 ATHLETE SLOTS AVAILABLE
        </div>

        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none uppercase mb-6">
          STOP WAITING. <br />
          <span className="underline decoration-black underline-offset-8">BUILD SOMETHING STRONGER.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-black font-sans text-lg sm:text-xl font-medium mb-10 leading-relaxed">
          Step into our high-performance facility for a complete 90-minute biometric diagnostic, force-plate velocity scan, and customized training road mapping.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-zinc-900 text-white font-sports font-bold text-xl tracking-wider flex items-center justify-center gap-3 transition-transform hover:scale-105 transform -skew-x-6 hover:skew-x-0 shadow-2xl"
          >
            <span>CLAIM ATHLETE EVALUATION (RM 0 COST)</span>

            <ArrowUpRight className="w-6 h-6 text-[#ff3b00]" />
          </button>
        </div>

        <div className="mt-8 flex justify-center items-center gap-8 text-xs font-mono text-black/80">
          <span>✓ NO OBLIGATION</span>
          <span>✓ FULL BIOMETRIC TELEMETRY</span>
          <span>✓ 1-ON-1 WITH HEAD COACH</span>
        </div>

      </div>
    </section>
  );
};
