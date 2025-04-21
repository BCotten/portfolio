// src/types/content.d.ts
declare module '@/data/content.json' {
  interface BaseCard {
    title: string;
  }

  export interface HeroCard extends BaseCard {
    img: string;
    link: string;
  }

  export interface ProjectsCard extends BaseCard {
    description: string;
    image: string;
    link: string;
  }

  export interface AboutCard extends BaseCard {
    year?: string;
    content?: string;
    skills?: Array<{ name: string; icon: string }>;
  }

  export interface Content {
    hero: {
      name: string;
      title: string;
      cards: HeroCard[];
    };
    projects: {
      title: string;
      cards: ProjectsCard[];
    };
    about: {
      title: string;
      cards: AboutCard[];
    };
    contact: {
      title: string;
      email: string;
      linkedinIcon: string;
      linkedin: string;
      githubIcon: string;
      github: string;
    };
  }

  const content: Content;
  export default content;
}
