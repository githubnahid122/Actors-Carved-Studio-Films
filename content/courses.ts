import type { Course } from "@/types/academy";

export const COURSES: Course[] = [
  {
    id: "weekend",
    name: "3 Months Weekend",
    duration: "3 months",
    schedule: "Weekends — Sat & Sun, 4 hrs/day",
    format: "In-studio, small batch (max 16)",
    outcomes: [
      "Camera-confidence and audition-readiness",
      "A polished self-tape showreel",
      "Access to casting desk for junior briefs",
    ],
    curriculumHighlights: [
      "Scene study & script breakdown",
      "On-camera technique",
      "Voice, diction & breath control",
      "Self-tape workshop",
    ],
  },
  {
    id: "advanced",
    name: "6 Months Advanced",
    duration: "6 months",
    schedule: "3 evenings/week + monthly intensives",
    format: "In-studio + mentorship, small batch (max 12)",
    outcomes: [
      "Advanced scene and character work across genres",
      "A director-reviewed professional showreel",
      "Priority casting desk access for lead/support roles",
    ],
    curriculumHighlights: [
      "Method & Meisner technique foundations",
      "On-set etiquette and continuity",
      "Improvisation and cold-reading",
      "Personal brand & portfolio building",
    ],
  },
  {
    id: "flagship",
    name: "1 Year Flagship Diploma",
    duration: "12 months",
    schedule: "5 days/week, full-time conservatory schedule",
    format: "Full-time conservatory + live production placements",
    outcomes: [
      "Diploma in Screen Acting, industry-recognised",
      "Guaranteed casting-desk audition for a live production",
      "Personal mentor + agent introduction on graduation",
      "Alumni network access for life",
    ],
    curriculumHighlights: [
      "Full-year conservatory training across theatre & screen craft",
      "Movement, voice, and on-camera mastery",
      "Two live production placements with Carved Originals",
      "Showcase reel + industry showcase night",
    ],
    featured: true,
  },
];
