import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';


interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "PHILOSOPHY", href: "#philosophy" },
    { label: "PROGRAMS", href: "#programs" },
    { label: "METHOD", href: "#method" },
    { label: "COACH", href: "#coach" },
    { label: "TRANSFORMATION", href: "#transformation" },
    { label: "GYM", href: "#gym" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Logo size="md" />
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono tracking-widest text-zinc-300 hover:text-[#ff3b00] transition-colors relative py-2 flex items-center min-h-[44px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff3b00] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="relative inline-flex items-center justify-center px-6 py-2.5 font-sports font-bold text-sm text-black transition-all bg-[#ff3b00] hover:bg-[#ccff00] transform -skew-x-12 hover:skew-x-0 group min-h-[44px] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 transform skew-x-12 group-hover:skew-x-0">
              JOIN ATHLETE LAB <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 text-zinc-300 hover:text-[#ff3b00] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#ff3b00]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-sports tracking-wider text-zinc-200 hover:text-[#ff3b00] py-2 border-b border-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-4 bg-[#ff3b00] hover:bg-[#ccff00] text-black font-sports font-bold tracking-wider flex items-center justify-center gap-2 mt-3 text-base min-h-[48px]"
          >
            JOIN ATHLETE LAB <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>

  );
};
