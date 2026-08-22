import resumeData from '@/data/resume.json';
import { ResumeData } from '@/types/resume';

export const getResumeData = (): ResumeData => {
  // We cast it to ensure type safety based on our schema
  return resumeData as ResumeData;
};
