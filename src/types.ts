export type SectionId = 'hero' | 'journey' | 'ailab' | 'projects' | 'interests' | 'resume';

export interface AiLearningStage {
  id: string;
  num: string; // '01', '02', etc.
  title: string;
  timeframe: string;
  overview: string;
  whatILearned: string[];
  whyILearnedIt: string;
  whatIBuilt: {
    name: string;
    description: string;
    tags: string[];
    linkText?: string;
  }[];
  whatChallengedMe: string;
  whatIWantToLearnNext: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  category: 'Numbers → Systems' | 'Systems → AI' | 'Numbers → AI';
  tagline: string;
  description: string;
  problem: string;
  accountingFoundation: string;
  systemArchitecture: string;
  aiImplementation: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyTakeaways: string[];
  metricsOrHighlights: { label: string; value: string }[];
  interactiveDemoId?: 'accuquery' | 'audit_recon' | 'schema_graph' | 'xbrl_parser';
}

export interface InterestItem {
  id: string;
  title: string;
  category: 'Essay' | 'Book' | 'System Concept';
  authorOrRef?: string;
  summary: string;
  thoughts: string;
  tags: string[];
  date?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  education: {
    degree: string;
    school: string;
    period: string;
    focus: string;
    honors?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    role: string;
    organization: string;
    period: string;
    description: string[];
    skillsApplied: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}
