import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, AlertTriangle, Lock, CheckCircle2 } from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'waiver';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0a0a0c] border border-zinc-800 shadow-[0_0_50px_rgba(255,59,0,0.15)] z-10 flex flex-col max-h-[85vh] my-auto overflow-hidden rounded-none"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-[#050505]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#ff3b00] transform skew-x-12" />
              <div>
                <h3 className="font-sports font-bold text-lg text-white tracking-wider uppercase">
                  LEGAL & COMPLIANCE PROTOCOLS
                </h3>
                <p className="text-[11px] font-mono text-zinc-400">
                  KINETIC ATHLETICS PERFORMANCE LAB • REVISION 2026.04
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-[#ff3b00] hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-zinc-800 bg-[#070709] px-6 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-3.5 px-4 font-mono text-xs tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-[#ff3b00] text-white bg-zinc-900/60 font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Lock className={`w-3.5 h-3.5 ${activeTab === 'privacy' ? 'text-[#ff3b00]' : ''}`} />
              PRIVACY PROTOCOL
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`py-3.5 px-4 font-mono text-xs tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-[#ff3b00] text-white bg-zinc-900/60 font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${activeTab === 'terms' ? 'text-[#ff3b00]' : ''}`} />
              TERMS OF SERVICE
            </button>

            <button
              onClick={() => setActiveTab('waiver')}
              className={`py-3.5 px-4 font-mono text-xs tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'waiver'
                  ? 'border-[#ff3b00] text-white bg-zinc-900/60 font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${activeTab === 'waiver' ? 'text-[#ff3b00]' : ''}`} />
              SECURITY WAIVER
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 text-sm font-sans leading-relaxed">
            {activeTab === 'privacy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 border-l-4 border-l-[#ff3b00]">
                  <h4 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-1">
                    PROTOCOL DOCUMENT // APEX-PRIVACY-01
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    LAST UPDATED: JANUARY 15, 2026 • APPLIES TO ALL MEMBERS, ATHLETES & EVALUATION CLIENTS
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    1. BIOMETRIC DATA & TELEMETRY COLLECTION
                  </h4>
                  <p className="text-zinc-400">
                    Kinetic Athletics Performance Lab collects physiological and biometric data including heart rate variability (HRV), VO2 Max estimations, velocity-based training (VBT) metrics, muscle mass distribution, and digital movement capture logs. This data is exclusively utilized to engineer personalized strength, conditioning, and recovery protocols.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    2. DATA SECURITY & ENCRYPTION PROTOCOLS
                  </h4>
                  <p className="text-zinc-400">
                    All athlete metrics are protected using AES-256 encryption at rest and TLS 1.3 in transit. Health telemetries are isolated in dedicated database instances and never sold, rented, or shared with third-party advertising networks. Access is strictly limited to authorized coaching staff and assigned sports physiologists.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    3. WEARABLE INTEGRATIONS & SENSOR SYNC
                  </h4>
                  <p className="text-zinc-400">
                    When connecting third-party sensors (e.g., Apple Health, Garmin, WHOOP, Polar), data feeds are governed under explicit user permissions. Athletes retain full right to disconnect sensor syncing or request total deletion of historical telemetry records at any time.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    4. ATHLETE RIGHTS & DATA PORTABILITY
                  </h4>
                  <p className="text-zinc-400">
                    You have the right to request a full export of your biometric trajectory logs or mandate permanent scrub of personal records upon membership conclusion by contacting <span className="text-[#ccff00] font-mono">LAB@KINETICATHLETICS.COM</span>.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 border-l-4 border-l-[#ff3b00]">
                  <h4 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-1">
                    PROTOCOL DOCUMENT // APEX-TERMS-02
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    GOVERNING RULES FOR LAB USAGE, COACHING SESSIONS & ATHLETE LAB MEMBERSHIP
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    1. LAB RESERVATIONS & CANCELLATION PROTOCOL
                  </h4>
                  <p className="text-zinc-400">
                    1-on-1 coaching sessions and biomechanical assessments must be scheduled in advance. A strict <strong className="text-white">24-hour cancellation policy</strong> applies. Late cancellations or unannounced non-attendance will result in forfeit of session credits to preserve schedule integrity for all lab athletes.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    2. FACILITY ETIQUETTE & DISCIPLINE
                  </h4>
                  <p className="text-zinc-400">
                    Athletes are required to adhere to high-performance facility etiquette: footwear suitable for Olympic platforms and sprint turf is mandatory, equipment must be returned to designated racks after set completion, and respectful conduct towards coaches and fellow athletes is strictly enforced.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    3. MEMBERSHIP BILLING & RENEWALS
                  </h4>
                  <p className="text-zinc-400">
                    Athlete Lab monthly memberships automatically process on your recurring billing date unless canceled 7 business days prior. Session packages expire 90 days from purchase unless explicitly extended by head coaching staff.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    4. INTELLECTUAL PROPERTY & TRAINING METHODOLOGY
                  </h4>
                  <p className="text-zinc-400">
                    All Kinetic Athletics programming, periodization spreadsheets, custom exercise movement libraries, and digital kinetic telemetry UI components are proprietary intellectual property. Redistribution without prior written authorization is prohibited.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'waiver' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 border-l-4 border-l-[#ff3b00]">
                  <h4 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-1">
                    PROTOCOL DOCUMENT // APEX-WAIVER-03
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    PHYSICAL RISK ACKNOWLEDGEMENT & COMPREHENSIVE LIABILITY WAIVER
                  </p>
                </div>

                <div className="p-4 bg-amber-950/20 border border-amber-800/40 text-amber-200/90 text-xs flex gap-3 items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p>
                    <strong className="font-bold text-amber-400">IMPORTANT NOTICE:</strong> Kinetic Athletics Performance Lab conducts high-intensity, maximum-velocity, and heavy resistance conditioning protocols. Please read carefully before engaging in lab assessments.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    1. ASSUMPTION OF PHYSICAL INJURY RISKS
                  </h4>
                  <p className="text-zinc-400">
                    I acknowledge that participating in physical fitness testing, Olympic weightlifting, high-speed treadmills, plyometrics, and metabolic conditioning carries inherent risks of injury, including muscle strain, joint stress, cardiovascular distress, or rare severe health incidents. I voluntarily choose to assume all risks associated with participation.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    2. MEDICAL CLEARANCE & HEALTH REPRESENTATION
                  </h4>
                  <p className="text-zinc-400">
                    I warrant that I am in good physical condition and have no medical impairments, undisclosed cardiovascular conditions, or injuries that would prevent safe participation in maximal output physical exercise. I agree to notify my coach immediately if I experience discomfort, chest pain, or dizziness.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    3. EMERGENCY MEDICAL AUTHORIZATION
                  </h4>
                  <p className="text-zinc-400">
                    In the event of an emergency requiring immediate medical intervention, I authorize Kinetic Athletics staff to secure medical treatment and transportation from licensed healthcare professionals.
                  </p>
                </div>

                <div>
                  <h4 className="font-sports font-bold text-white text-base tracking-wider uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    4. RELEASE OF LIABILITY & INDEMNIFICATION
                  </h4>
                  <p className="text-zinc-400">
                    I hereby release, waive, and forever discharge Kinetic Athletics Performance Lab, its owners, coaches, employees, and facility partners from any claims, demands, or liabilities arising out of standard training participation.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-zinc-800 bg-[#050505] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping" />
              STATUS: COMPLIANCE ACTIVE • DIGITAL SIGNATURE VERIFIED
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 bg-[#ff3b00] hover:bg-[#ccff00] text-black font-sports font-bold text-sm tracking-wider transition-colors transform -skew-x-6 hover:skew-x-0"
            >
              ACKNOWLEDGE & ACCEPT PROTOCOL
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
