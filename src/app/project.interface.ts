export interface IProject {
  cover?: string;
  title: string;
  subtitle: string;
  description: string;
  links?: ILink[];
  startDate?: number;
  endDate?: number;
}

interface ILink {
  name: string,
  zelda: string
}
