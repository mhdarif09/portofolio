export type ProjectCategory =
  | "Public Services"
  | "Education"
  | "System Integration"
  | "IoT"
  | "Product"
  | "AI"
  | "Web"
  | "Infrastructure";

export type ProjectType =
  | "Client system"
  | "Workplace system"
  | "Startup prototype"
  | "Final project"
  | "Academic project"
  | "Workplace project";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  acronym?: string;
  category: ProjectCategory;
  type: ProjectType;
  year: string;
  client?: string;
  role: string;
  summary: string;
  context: string;
  problem: string;
  problemPoints: string[];
  solution: string;
  solutionPoints: string[];
  features: string[];
  impact: string;
  scope: string[];
  technologies: string[];
  featured: boolean;
  cover: string;
  coverAlt: string;
  referenceUrl?: string;
  pendingNote?: string;
}

export interface Experience {
  slug: string;
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  location?: string;
  type: string;
  summary: string;
  bullets: string[];
  achievements?: string[];
  relatedProjects?: string[];
  current?: boolean;
  note?: string;
}

export type SkillIcon =
  | "frontend"
  | "backend"
  | "database"
  | "integration"
  | "security";

export interface SkillGroup {
  title: string;
  label: string;
  description: string;
  icon: SkillIcon;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  graduation: string;
  location: string;
  exchange?: string;
  finalProject: string;
  highlights: string[];
}

export interface Publication {
  title: string;
  topic: string;
}

export interface Achievement {
  title: string;
  detail: string;
  year?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface NavItem {
  label: string;
  href: string;
}
