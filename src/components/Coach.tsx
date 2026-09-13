import React from 'react';
import { COACH_DATA } from '../data/mockData';
import { Award, Check, Dumbbell, Shield, Zap } from 'lucide-react';

interface CoachProps {
  onOpenBooking: () => void;
}

export const Coach: React.FC<CoachProps> = ({ onOpenBooking }) => {
  return (
    <section id="coach" className="py-24 bg-[#08080a] text-white border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* High Contrast Coach Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-white/10 p-2 bg-black">
              <img
                src={COACH_DATA.image}
                alt={COACH_DATA.name}
                className="w-full h-[520px] object-cover filter grayscale contrast-150 brightness-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

              
              {/* Overlay Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 border border-zinc-700">
                <div className="text-xs font-mono text-[#ff3b00]">HEAD ATHLETE ARCHITECT</div>
                <div className="font-sports font-bold text-3xl text-white">{COACH_DATA.name}</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">CSCS • MS BIOMECHANICS</div>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#ff3b00] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#ccff00] pointer-events-none" />
          </div>

          {/* Coach Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff3b00] tracking-widest uppercase mb-2">
              <Shield className="w-4 h-4" />
              LEAD PERFORMANCE SCIENTIST
            </div>

            <h2 className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-white mb-4">
              MEET COACH <span className="text-[#ff3b00]">STRIKER</span>
            </h2>

            <p className="font-sports text-xl text-[#ccff00] mb-6 tracking-wide">
              "{COACH_DATA.tagline}"
            </p>

            <p className="text-zinc-300 text-base leading-relaxed mb-8 font-sans">
              {COACH_DATA.bio}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-black/70 p-4 border border-zinc-800">
              {COACH_DATA.stats.map((st) => (
                <div key={st.label} className="text-center p-2 border-r last:border-r-0 border-zinc-800">
                  <div className="font-display text-4xl font-bold text-[#ff3b00]">{st.value}</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Credentials Checklist */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">PROVEN CREDENTIALS:</span>
              {COACH_DATA.credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3">
                  <div className="p-1 bg-[#ff3b00]/20 text-[#ff3b00] mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-sans text-zinc-200">{cred}</span>
                </div>
              ))}
            </div>

            {/* Direct Consult Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-[#ff3b00] text-black hover:text-black font-sports font-bold text-lg tracking-wider transition-colors transform -skew-x-6 hover:skew-x-0"
            >
              BOOK 1-ON-1 DIAGNOSTIC WITH VICTOR
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
