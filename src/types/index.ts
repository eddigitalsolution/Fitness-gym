export interface AthleteMetric {
  name: string;
  value: number;
  unit: string;
  color: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  priceRM: string;
  intensity: string;
  focus: string[];
  image: string;
  description: string;
  metrics: {
    strength: number;
    endurance: number;
    speed: number;
  };
}


export interface TransformationStory {
  name: string;
  role: string;
  duration: string;
  beforeWeight: string;
  afterWeight: string;
  quote: string;
  imageBefore: string;
  imageAfter: string;
  statGain: string;
}

export interface CoachBio {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  credentials: string[];
  stats: { label: string; value: string }[];
  image: string;
}
