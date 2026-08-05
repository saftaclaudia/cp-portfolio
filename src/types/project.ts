export interface TechGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  tech: TechGroup[];
  liveUrl?: string;
  githubUrl: string;
  image?: string;
}
