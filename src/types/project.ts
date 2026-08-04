export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  image?: string;
}
