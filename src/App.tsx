import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Programs } from './components/Programs';
import { Coach } from './components/Coach';
import { Method } from './components/Method';
import { Transformation } from './components/Transformation';
import { Gym } from './components/Gym';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { TrainingProgram } from './types';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');

  const handleOpenBooking = () => {
    setSelectedProgram(null);
    setIsBookingOpen(true);
  };

  const handleSelectProgram = (program: TrainingProgram) => {
    setSelectedProgram(program);
    setIsBookingOpen(true);
  };

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b00] selection:text-black">
      {/* Header Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Full Bleed Sports Editorial Hero + Kinetic Scroll Telemetry */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Philosophy Section */}
        <Philosophy />

        {/* Horizontal Programs Carousel & Details */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* Coach Bio & Credentials */}
        <Coach onOpenBooking={handleOpenBooking} />

        {/* The 4-Stage Kinetic Method */}
        <Method />

        {/* Transformations & Empirical Proof */}
        <Transformation />

        {/* Facility & Hardware */}
        <Gym />

        {/* Final CTA */}
        <CTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Booking Application Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedProgram={selectedProgram}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}

export default App;
