import React from 'react';
import { motion } from 'framer-motion';

interface HeroMetricsHUDProps {
  strength: number;
  endurance: number;
  speed: number;
  stageLabel?: string;
  isSticky?: boolean;
}

export const HeroMetricsHUD: React.FC<HeroMetricsHUDProps> = ({
  strength,
  endurance,
  speed,
  stageLabel,
  isSticky = false,
}) => {
  const metrics = [
    { key: "STRENGTH", value: strength, color: "#ff3b00" },
    { key: "ENDURANCE", value: endurance, color: "#00f0ff" },
    { key: "SPEED", value: speed, color: "#ccff00" },
  ];

  return (
    <div className={`transition-all duration-300 ${isSticky ? 'w-full' : ''}`}>
      {/* Editorial Tech Telemetry Box */}
      <div className="bg-black/85 backdrop-blur-md border border-white/20 p-3 sm:p-4 relative shadow-[0_0_30px_rgba(255,59,0,0.12)] overflow-hidden">
        {/* Dynamic Metric Gauges */}

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 text-center">
          {metrics.map((metric) => (
            <div key={metric.key} className="flex flex-col items-center group">
              <span className="text-[9px] sm:text-xs font-mono tracking-widest text-zinc-400 mb-0.5 sm:mb-1">
                {metric.key}
              </span>
              
              {/* Animated Big Number Counter */}
              <div className="relative font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white flex items-baseline leading-none">
                <motion.span
                  key={metric.value}
                  initial={{ opacity: 0.4, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.round(metric.value)}
                </motion.span>
                <span className="text-xs sm:text-sm font-mono text-zinc-500 font-normal ml-0.5">%</span>
              </div>

              {/* Progress Bar with Glow */}
              <div className="w-full bg-zinc-900 h-1.5 mt-1.5 relative overflow-hidden rounded-none border border-zinc-800">
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: metric.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
