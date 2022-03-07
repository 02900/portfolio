export interface IProject {
  cover?: string;
  title: string;
  subtitle: string;
  description: string;
  link?: ILink;
  link_alt?: ILink;
}

interface ILink {
  name: string,
  zelda: string
}
