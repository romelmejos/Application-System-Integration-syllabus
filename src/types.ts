export interface CourseInfo {
  code: string;
  title: string;
  department: string;
  school: string;
  university: string;
  credits: number;
  lectureHours: number;
  labHours: number;
  prerequisites: string;
  semester: string;
  academicYear: string;
}

export interface CourseOutcome {
  code: string;
  description: string;
  competency: string;
}

export interface SyllabusModule {
  id: number;
  week: string;
  title: string;
  description: string;
  topics: string[];
  laboratoryExercises: string[];
  integrationFocus: string;
}

export interface ScheduleSection {
  id: string;
  name: string;
  lectureSchedule: string;
  labSchedule: string;
  venue: string;
  instructor: string;
  enrolled: number;
  capacity: number;
}

export interface StudentResource {
  id: string;
  title: string;
  category: 'documentation' | 'installation' | 'utility' | 'university';
  description: string;
  url: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'academics' | 'labs' | 'software' | 'policies';
}

export interface GradeItem {
  name: string;
  score: number;
  maxScore: number;
  weight: number; // e.g., 0.20 for 20%
}
