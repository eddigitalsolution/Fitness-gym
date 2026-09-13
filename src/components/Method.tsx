import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Binary, Cpu, Gauge, Microchip, Flame } from 'lucide-react';

export const Method: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "3D KINETIC SCAN & VO2 DIAGNOSTICS",
      desc: "Full biometric ultrasound, joint force vector laser scanning, and graded VO2 max gas analysis. We discover exact biomechanical imbalances before prescribing a single workout.",
      metrics: "VALD ForceDecks • Metabolic Gas Analysis",
      color: "#ff3b00"
    },
    {
      step: "02",
      title: "PERIODIZED NEURAL OVERLOAD",
      desc: "Custom training algorithms calculate load velocity and velocity-based strength training (VBT). Barbell speed telemetry dictates real-time weight adjustments.",
      metrics: "VBT Telemetry • Linear Transducers",
      color: "#00f0ff"
    },
    {
      step: "03",
      title: "BIO-HACKING NUTRITION & PEPTIDES",
      desc: "Macros adjusted daily via glucose monitoring and metabolic rate tracking. Precision nitrogen retention protocols to ensure lean mass accretion without fat gain.",
      metrics: "Continuous Glucose Sync • Micronutrient Timing",
      color: "#ccff00"
    },
    {
      step: "04",
      title: "HYPERBARIC & CELLULAR RECOVERY",
      desc: "Cryotherapy at -110°C, 2.0 ATA oxygen chambers, and infrared thermography to flush inflammation and reset central nervous fatigue within 24 hours.",
      metrics: "HRV Daily Score • Thermographic Diagnostics",
      color: "#ff0055"
    }
  ];

  return (
    <section id="method" className="py-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff3b00] tracking-widest uppercase mb-2">
            <Cpu className="w-4 h-4 animate-spin" />
            METHODOLOGY ARCHITECTURE
          </div>
          <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight">
            THE 4-STAGE <span className="text-[#ff3b00]">KINETIC METHOD</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-3">
            Scientific, measurable, and zero-guesswork performance engineering engineered to elevate human capacity.
          </p>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Buttons Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, idx) => (
              <button
                key={st.step}
                onClick={() => setActiveStep(idx)}
                className={`w-full p-6 text-left border transition-all flex items-center justify-between ${
                  activeStep === idx
                    ? 'bg-zinc-900 border-[#ff3b00] transform translate-x-2'
                    : 'bg-black/60 border-zinc-800 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-bold text-[#ff3b00]">{st.step}</span>
                  <div>
                    <h3 className="font-sports font-bold text-lg text-white">{st.title}</h3>
                    <div className="text-[10px] font-mono text-zinc-400">{st.metrics}</div>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeStep === idx ? 'bg-[#ff3b00]' : 'bg-zinc-700'}`} />
              </button>
            ))}
          </div>

          {/* Right Stage Visualization Display */}
          <div className="lg:col-span-7 bg-[#0d0d0e] border-2 border-zinc-800 p-8 sm:p-12 relative min-h-[420px] flex flex-col justify-between overflow-hidden">
            
            {/* Background Kinetic Graph Grid */}
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
            <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600">
              METHOD // STEP 0{activeStep + 1}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <div className="inline-block px-3 py-1 text-xs font-mono text-black font-bold uppercase mb-4" style={{ backgroundColor: steps[activeStep].color }}>
                STAGE 0{activeStep + 1} PROTOCOL
              </div>

              <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                {steps[activeStep].title}
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed font-sans mb-8">
                {steps[activeStep].desc}
              </p>

              <div className="bg-black/90 p-5 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#ccff00]" />
                  <span className="text-xs font-mono text-zinc-300">SYSTEM TELEMETRY:</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#ccff00]">{steps[activeStep].metrics}</span>
              </div>
            </motion.div>

            {/* Bottom Status bar */}
            <div className="relative z-10 pt-8 mt-8 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>PRECISION FACTOR: 99.8%</span>
              <span className="text-[#ff3b00]">VALIDATED BY SPORTS LAB</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
