export interface Project {
  name: string;
  emoji: string;
  description: string;
  url: string;
  repo: string;
}

export interface Talk {
  title: string;
  emoji: string;
  conference: string;
  date: string;
  video?: string;
  slides: string;
}
