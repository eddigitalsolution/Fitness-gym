import { TrainingProgram, TransformationStory, CoachBio } from '../types';

export const HERO_METRICS_STAGES = [
  { scrollPct: 0.1, strength: 82, endurance: 76, speed: 91, label: "HERO PHASE 01: APEX SPEED INITIALIZATION" },
  { scrollPct: 0.25, strength: 95, endurance: 84, speed: 78, label: "HERO PHASE 02: MAXIMUM HYPERTROPHY LOAD" },
  { scrollPct: 0.5, strength: 88, endurance: 98, speed: 85, label: "HERO PHASE 03: ULTRA ENDURANCE CONDITIONING" },
  { scrollPct: 0.75, strength: 99, endurance: 92, speed: 96, label: "HERO PHASE 04: TOTAL ATHLETE SUPREMACY" },
];

export const PROGRAMS: TrainingProgram[] = [
  {
    id: "hypertrophy-alpha",
    title: "HYPERTROPHY ALPHA",
    tagline: "MAXIMUM MUSCULAR DENSITY & STRUCTURAL POWER",
    category: "STRENGTH & POWER",
    duration: "12 WEEKS",
    priceRM: "RM 2,400",
    intensity: "EXTREME (9.8/10)",
    focus: ["Compound Overload", "Periodized Tension", "Metabolic Stress"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description: "Architectural body re-engineering for athletes demanding absolute physical presence and explosive mass gain.",
    metrics: { strength: 98, endurance: 68, speed: 72 }
  },
  {
    id: "kinetic-vo2-max",
    title: "KINETIC VO2 IGNITION",
    tagline: "UNBREAKABLE CARDIOVASCULAR ENGINE",
    category: "ENDURANCE & STAMINA",
    duration: "8 WEEKS",
    priceRM: "RM 1,850",
    intensity: "HIGH INTENSITY",
    focus: ["Lactate Threshold", "Zone 5 Intervals", "Aerobic Capacity"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    description: "Forge an industrial-grade cardiovascular engine capable of sustaining peak output long past failure limits.",
    metrics: { strength: 74, endurance: 99, speed: 88 }
  },
  {
    id: "sprint-mechanics",
    title: "SPRINT MECHANICS & VELOCITY",
    tagline: "EXPLOSIVE ACCELERATION & BIOMECHANICS",
    category: "SPEED & AGILITY",
    duration: "6 WEEKS",
    priceRM: "RM 1,500",
    intensity: "PEAK VELOCITY",
    focus: ["Force Production", "Ground Contact Time", "Elastic Power"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    description: "Re-wire neural drive and stride geometry for unmatched zero-to-sixty sprint speed and rapid direction change.",
    metrics: { strength: 84, endurance: 76, speed: 100 }
  },
  {
    id: "functional-longevity",
    title: "MOBILITY & JOINT FORTRESS",
    tagline: "BULLETPROOF JOINTS & RECOVERY INFRASTRUCTURE",
    category: "LONGEVITY",
    duration: "10 WEEKS",
    priceRM: "RM 2,100",
    intensity: "ADAPTIVE STRENGTH",
    focus: ["Connective Tissue", "End-Range Torque", "Movement Craft"],
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=1200&q=80",
    description: "Rebuild tendon resilient force and hip-shoulder rotational sovereignty to eliminate pain and ensure long-term elite output.",
    metrics: { strength: 80, endurance: 85, speed: 81 }
  }
];


export const COACH_DATA: CoachBio = {
  name: "VICTOR STRIKER",
  title: "HEAD SPORTS SCIENTIST & MASTER COACH",
  tagline: "THERE IS NO CEILING. ONLY UNCLAIMED TERRITORY.",
  bio: "Former Olympic strength specialist & biomechanics researcher with 14+ years engineering world-class human physiques. Victor combines raw sports editorial intensity with bio-hacking precision to dismantle physical limitations.",
  credentials: [
    "M.S. Applied Sports Biomechanics & Human Performance",
    "CSCS (Certified Strength & Conditioning Specialist)",
    "Head Physical Architect to 12 Olympic & UFC Athletes",
    "Founder of Kinetic Athletic Performance System"
  ],
  stats: [
    { label: "PRO ATHLETES TRAINED", value: "140+" },
    { label: "AVG STRENGTH GAIN", value: "+38%" },
    { label: "SUCCESS GUARANTEE", value: "100%" },
    { label: "YEARS DOMINATING", value: "14 YRS" }
  ],
  image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=80"
};

export const TRANSFORMATIONS: TransformationStory[] = [
  {
    name: "MARCUS VANCE",
    role: "COMPETITIVE CROSSFIT ATHLETE",
    duration: "16 WEEKS",
    beforeWeight: "84 KG (14% BF)",
    afterWeight: "92 KG (7% BF)",
    quote: "Victor transformed my mid-range endurance and doubled my clean jerk velocity. The metrics tracking eliminated all guesswork.",
    imageBefore: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    statGain: "+42% OVERALL POWER"
  },
  {
    name: "ELENA ROSTOVA",
    role: "PRO SPRINT TRIATHLETE",
    duration: "12 WEEKS",
    beforeWeight: "58 KG",
    afterWeight: "61 KG (LEAN MASS)",
    quote: "My VO2 max skyrocketed from 58 to 69 in three months. The kinetic program structure is mathematically superior.",
    imageBefore: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    statGain: "+31% VO2 MAX CAP"
  }
];

export const GYM_EQUIPMENT = [
  { name: "ELEIKO OLYMPIC PLATFORMS", desc: "Precision calibrated rubber plates & chrome bars" },
  { name: "VALD FORCE DECKS", desc: "Real-time ground force vector kinetic telemetry" },
  { name: "HYPERBARIC OXYGEN CHAMBERS", desc: "Accelerated cellular recovery & inflammation drop" },
  { name: "INFRARED THERMAL RECOVERY", desc: "Targeted deep-tissue circulatory stimulation" }
];
