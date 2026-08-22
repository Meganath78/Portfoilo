export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  availability?: string;
}

export interface About {
  description: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Skills {
  languages: string[];
  backend: string[];
  frontend: string[];
  database: string[];
  tools: string[];
  concepts: string[];
  softSkills: string[];
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  links?: ProjectLinks;
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  description?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa?: string;
  percentage?: string;
}

export interface Settings {
  showAvailability: boolean;
  showEducation: boolean;
  showCertifications: boolean;
  showSocialLinks: boolean;
}

export interface ResumeData {
  profile: Profile;
  about: About;
  social: SocialLinks;
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  settings: Settings;
}
