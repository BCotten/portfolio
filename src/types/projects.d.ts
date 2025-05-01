export interface ProjectOverview {
  title: string;
  duration: string;
  collaboration: string;
  rolesTitle: string;
  overviewPoints: string[];
}

export interface ProjectRequirements {
  title: string;
  requirementsPoints: string[];
}

export interface ProjectReflections {
  title: string;
  sectionTitle1: string;
  sectionContent: string;
  sectionTitle2: string;
  sectionContent2: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string;
  overview: ProjectOverview;
  requirements: ProjectRequirements;
  reflections: ProjectReflections;
  button1Link?: string;
  button2Link?: string;
  image1: string;
  image2: string;
}

const data: {
  projects: Project[];
};

declare module '@/data/projects.json' {
  const data: { projects: Project[] };
  export default data;
}
