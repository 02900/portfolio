export interface IProject {
  cover?: string;
  title: string;
  stack: string;
  description: string;
  links?: ILink[];
  startDate?: number;
  endDate?: number;
}

interface ILink {
  name: string,
  zelda: string
}
