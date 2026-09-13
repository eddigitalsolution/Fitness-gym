import React, { useState } from 'react';
import { X, CheckCircle2, Flame, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TrainingProgram } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: TrainingProgram | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedProgram
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Hypertrophy Mass & Strength',
    experience: 'Intermediate (1-3 Yrs)',
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-[#0c0c0e] border-2 border-[#ff3b00] max-w-xl w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(255,59,0,0.3)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff3b00] uppercase mb-1">
              <Flame className="w-4 h-4" />
              ATHLETE EVALUATION APPLICATION
            </div>
            
            <h3 className="font-display text-4xl font-bold text-white mb-2">
              APPLY FOR <span className="text-[#ff3b00]">{selectedProgram ? selectedProgram.title : 'KINETIC LAB'}</span>
            </h3>

            <p className="text-zinc-400 text-xs font-sans mb-6">
              Complete your initial athletic profile to reserve your 90-minute biometric assessment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="athlete-name" className="block text-xs font-mono text-zinc-300 mb-1">FULL ATHLETE NAME *</label>
                <input
                  id="athlete-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border border-zinc-800 p-3 text-sm text-white focus:border-[#ff3b00] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="athlete-email" className="block text-xs font-mono text-zinc-300 mb-1">EMAIL ADDRESS *</label>
                  <input
                    id="athlete-email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@performance.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border border-zinc-800 p-3 text-sm text-white focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="athlete-phone" className="block text-xs font-mono text-zinc-300 mb-1">PHONE NUMBER *</label>
                  <input
                    id="athlete-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+60 11-3071 9502"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border border-zinc-800 p-3 text-sm text-white focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="athlete-goal" className="block text-xs font-mono text-zinc-300 mb-1">PRIMARY GOAL</label>
                  <select
                    id="athlete-goal"
                    name="goal"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-black border border-zinc-800 p-3 text-sm text-white focus:border-[#ff3b00] focus:outline-none"
                  >
                    <option>Hypertrophy Mass & Power</option>
                    <option>VO2 Max & Aerobic Engine</option>
                    <option>Sprint Mechanics & Velocity</option>
                    <option>Rehabilitation & Longevity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="athlete-experience" className="block text-xs font-mono text-zinc-300 mb-1">EXPERIENCE LEVEL</label>
                  <select
                    id="athlete-experience"
                    name="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-black border border-zinc-800 p-3 text-sm text-white focus:border-[#ff3b00] focus:outline-none"
                  >
                    <option>Beginner (&lt; 1 Year)</option>
                    <option>Intermediate (1-3 Yrs)</option>
                    <option>Advanced Athlete (4+ Yrs)</option>
                    <option>Competitive Pro</option>
                  </select>
                </div>
              </div>

              <button
                id="submit-athlete-application"
                name="submit-application"
                type="submit"
                className="w-full py-4 bg-[#ff3b00] hover:bg-[#ccff00] text-black font-sports font-bold text-lg tracking-wider transition-colors transform -skew-x-6 hover:skew-x-0 mt-4"
              >
                SUBMIT ATHLETE APPLICATION
              </button>
            </form>

          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#ccff00] mx-auto mb-4 animate-bounce" />
            <h3 className="font-display text-4xl font-bold text-white mb-2">APPLICATION ACCEPTED</h3>
            <p className="text-zinc-300 text-sm font-sans mb-6">
              Coach Victor Striker's team will review your biometric profile and contact you within 4 hours to confirm your 90-minute evaluation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-white text-black font-sports font-bold text-sm tracking-wider hover:bg-[#ff3b00]"
            >
              RETURN TO LAB MAIN
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
