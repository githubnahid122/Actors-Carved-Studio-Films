import type { TrainingPillar } from "@/types/academy";

export const TRAINING_PILLARS: TrainingPillar[] = [
  {
    id: "craft",
    title: "Craft First",
    description:
      "Scene study, character build, and text analysis rooted in classical technique before a single camera turns on.",
    icon: "BookOpenText",
  },
  {
    id: "camera",
    title: "Camera Fluency",
    description:
      "Every actor leaves knowing how to hit a mark, work continuity, and perform for lens sizes from wide to extreme close-up.",
    icon: "Aperture",
  },
  {
    id: "voice",
    title: "Voice & Body",
    description:
      "Breath control, diction, and movement training so performance reads clean on mic and in frame.",
    icon: "Mic2",
  },
  {
    id: "industry",
    title: "Industry Access",
    description:
      "Direct pipeline into our own casting desk and production house — training that ends in real auditions, not just a certificate.",
    icon: "Users",
  },
];
