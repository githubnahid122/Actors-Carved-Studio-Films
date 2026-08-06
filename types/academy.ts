export type ProgramId = "weekend" | "advanced" | "flagship";

export interface Course {
  id: ProgramId;
  name: string;
  duration: string;
  schedule: string;
  format: string;
  outcomes: string[];
  curriculumHighlights: string[];
  featured?: boolean;
}

export interface AlumniProfile {
  id: string;
  name: string;
  photoUrl: string;
  program: string;
  outcome: string;
  year: number;
}

export interface TrainingPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}
