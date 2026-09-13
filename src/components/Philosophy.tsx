import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldAlert, Cpu } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "NO DILUTED EFFORT",
      desc: "Every rep, every gram of protein, every second of rest is quantified. We do not exercise; we engineer kinetic evolution.",
      icon: Target
    },
    {
      num: "02",
      title: "BIOMECHANICAL SUPREMACY",
      desc: "Raw force without precise vector alignment causes joint degeneration. We perfect movement geometry before adding heavy load.",
      icon: Cpu
    },
    {
      num: "03",
      title: "NEURAL ADAPTATION",
      desc: "True power is recruited in the central nervous system. Training is neural reprogramming to fire muscle fibers simultaneously.",
      icon: Zap
    },
    {
      num: "04",
      title: "UNBREAKABLE MINDSET",
      desc: "Comfort is the enemy of physical mastery. We place athletes into controlled high-intensity discomfort until resistance breaks.",
      icon: ShieldAlert
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#08080a] relative overflow-hidden border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3b00] mb-2 uppercase">
              <span className="w-2 h-2 bg-[#ff3b00]" />
              FOUNDATIONAL CORE
            </div>
            <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white">
              THE KINETIC <span className="text-[#ff3b00]">PHILOSOPHY</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm font-mono text-zinc-400">
            WE DO NOT BELIEVE IN QUICK FIXES OR FAD DIETS. WE BELIEVE IN SPORTS SCIENCE, SYSTEMATIC OVERLOAD, AND ABSOLUTE DISCIPLINE.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/60 border border-zinc-800 p-8 relative group hover:border-[#ff3b00] transition-colors"
              >
                {/* Top Corner Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-bold text-zinc-600 group-hover:text-[#ff3b00] transition-colors">
                    {pillar.num}
                  </span>
                  <div className="p-3 bg-zinc-900 group-hover:bg-[#ff3b00] text-zinc-400 group-hover:text-black transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-sports text-2xl font-bold text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>STANDARD #0{idx + 1}</span>
                  <span className="group-hover:text-[#ccff00]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Kinetic Quote Marquee Banner */}
        <div className="mt-20 overflow-hidden bg-[#ff3b00] text-black py-4 transform -skew-y-1">
          <div className="animate-marquee whitespace-nowrap flex gap-12 font-display text-3xl font-bold tracking-tight uppercase">
            <span>• PAIN IS INFORMATION • DISCIPLINE IS DOMINANCE • BUILD SOMETHING STRONGER • REPEAT EVERY DAY</span>
            <span>• PAIN IS INFORMATION • DISCIPLINE IS DOMINANCE • BUILD SOMETHING STRONGER • REPEAT EVERY DAY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
