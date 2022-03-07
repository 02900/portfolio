import { IProject } from 'src/app/project.interface';

export const frontend: IProject[] = [
  {
    cover: '/assets/frontend/screenshot-ce',
    title: 'Screenshot Chrome Extension',
    subtitle: 'Angular 13, RxJS, TypeScript',
    description:
      'Utility to automate the process of take screenshot in multiple resolutions',
    links: [
      {
        name: 'Repository',
        zelda: 'https://github.com/jotaate/screenshot-chrome-extension',
      },
    ],
    endDate: 2022,
  },
  {
    cover: '/assets/frontend/deck-builder',
    title: 'Yu-Gi-Oh! Deck Builder',
    subtitle: 'Angular 13, RxJS, TypeScript',
    description:
      'Simple application to show concepts about reactive programming and good practices in Angular',
    links: [
      { name: 'Repository', zelda: 'https://github.com/jotaate/deck-builder' },
      { name: 'Demo', zelda: 'https://jotaate.github.io/ygo-deck-builder/' },
    ],
    endDate: 2022,
  },
  {
    cover: '/assets/frontend/kavak',
    title: 'KAVAK',
    subtitle: 'Typescript, Angular 11, Stencil, RxJs, Storybook',
    description: 'Platform dedicated to the trade of used cars',
    links: [{ name: 'Navigate to Kavak.com', zelda: 'https://www.kavak.com/' }],
    startDate: 2018,
    endDate: -1,
  },
];