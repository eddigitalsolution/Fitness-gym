import React from 'react';
import { GYM_EQUIPMENT } from '../data/mockData';
import { ShieldCheck, MapPin, Clock, Compass } from 'lucide-react';

export const Gym: React.FC = () => {
  const gymImages = [
    { title: "OLYMPIC POWER RACKS", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80" },
    { title: "FORCE PLATE INTEGRATION", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80" },
    { title: "CRYO & RECOVERY PODS", url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=80" }
  ];

  return (
    <section id="gym" className="py-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-mono text-[#ff3b00] tracking-widest uppercase mb-1">
              // PRIVATE PERFORMANCE FACILITY
            </div>
            <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white">
              THE KINETIC <span className="text-[#ff3b00]">SANCTUARY</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-zinc-400 mt-4 md:mt-0">
            <span className="flex items-center gap-1 text-white">
              <MapPin className="w-4 h-4 text-[#ff3b00]" /> KUALA LUMPUR PERFORMANCE LAB
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#ccff00]" /> +60 11-3071 9502
            </span>
          </div>

        </div>

        {/* Facility Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {gymImages.map((img) => (
            <div key={img.title} className="relative h-[320px] overflow-hidden border border-zinc-800 group">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-sports font-bold text-lg text-white">{img.title}</span>
                <span className="text-[10px] font-mono text-[#ff3b00] border border-[#ff3b00] px-2 py-0.5">MIL-SPEC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment & Technology Specs */}
        <div className="bg-[#0d0d0e] border border-zinc-800 p-8 sm:p-12">
          <h3 className="font-sports text-2xl font-bold text-white mb-6 tracking-wide">
            STATE-OF-THE-ART HARDWARE & DIAGNOSTIC TECH
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GYM_EQUIPMENT.map((eq) => (
              <div key={eq.name} className="bg-black p-5 border border-zinc-800">
                <div className="w-2 h-2 bg-[#ff3b00] mb-3" />
                <div className="font-sports font-bold text-base text-white mb-1">{eq.name}</div>
                <p className="text-zinc-400 text-xs font-sans">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
