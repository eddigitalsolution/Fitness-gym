import React from 'react';
import { Share2, Globe, Mail } from 'lucide-react';
import { Logo } from './Logo';


import { LegalTab } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5">
            <a href="#home" className="mb-4 inline-block hover:opacity-90 transition-opacity">
              <Logo size="lg" />
            </a>

            <p className="text-zinc-400 text-xs font-sans max-w-sm leading-relaxed mb-6">
              High-contrast sports editorial performance training. We fuse elite biomechanics, real-time kinetic telemetry, and uncompromising discipline to engineer apex human conditioning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:text-[#ff3b00] hover:bg-zinc-800 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:text-[#ff3b00] hover:bg-zinc-800 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:text-[#ff3b00] hover:bg-zinc-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-4">// NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><a href="#philosophy" className="hover:text-white transition-colors">01. PHILOSOPHY</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">02. TRAINING PROGRAMS</a></li>
              <li><a href="#coach" className="hover:text-white transition-colors">03. HEAD COACH BIO</a></li>
              <li><a href="#method" className="hover:text-white transition-colors">04. KINETIC METHOD</a></li>
              <li><a href="#transformation" className="hover:text-white transition-colors">05. ATHLETE CASE STUDIES</a></li>
              <li><a href="#gym" className="hover:text-white transition-colors">06. FACILITY & TECH</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-4">// GLOBAL FACILITY LOCATION</h4>
            <p className="text-xs font-mono text-zinc-300 leading-relaxed">
              KINETIC ATHLETICS LAB H.Q.<br />
              LEVEL 18, TOWER 2, PERSIARAN KLCC<br />
              50088 KUALA LUMPUR, MALAYSIA<br /><br />
              <span className="text-[#ccff00] font-bold">DIRECT: +60 11-3071 9502</span><br />
              <span className="text-zinc-500">EMAIL: LAB@KINETICATHLETICS.COM</span>
            </p>
          </div>


        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500">
          <div>© 2026 KINETIC ATHLETICS PERFORMANCE LAB. ALL RIGHTS RESERVED.</div>
          <div className="mt-2 sm:mt-0 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-[#ff3b00] transition-colors uppercase cursor-pointer"
            >
              PRIVACY PROTOCOL
            </button>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-[#ff3b00] transition-colors uppercase cursor-pointer"
            >
              TERMS OF SERVICE
            </button>
            <button
              onClick={() => onOpenLegal?.('waiver')}
              className="hover:text-[#ff3b00] transition-colors uppercase cursor-pointer"
            >
              SECURITY WAIVER
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
