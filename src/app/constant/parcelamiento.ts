import { IProject } from 'src/app/project.interface';

export const parcelamiento: IProject[] = [
  {
    cover: '/assets/parcelamiento/479-KISTAPUR-1B-2',
    title: 'Parcelamiento de Terreno',
    stack: 'AutoCad 2023',
    description:
      '',
    links: [
      {
        name: 'Repository',
        zelda: 'https://github.com/02900/screenshot-chrome-extension',
      },
    ],
    endDate: 2022,
  },
  {
    cover: '/assets/frontend/deck-builder',
    title: 'Yu-Gi-Oh! Deck Builder',
    stack: 'Angular 13, RxJS, TypeScript',
    description:
      'Simple application to show concepts about reactive programming and good practices in Angular',
    links: [
      { name: 'Repository', zelda: 'https://github.com/02900/deck-builder' },
      { name: 'Demo', zelda: 'https://02900.github.io/ygo-deck-builder/' },
    ],
    endDate: 2022,
  },
  {
    cover: '/assets/frontend/kavak',
    title: 'KAVAK',
    stack: 'Typescript, Angular 11, Stencil, RxJs, Storybook',
    description: 'Platform dedicated to the trade of used cars',
    links: [{ name: 'Navigate to Kavak.com', zelda: 'https://www.kavak.com/' }],
    startDate: 2018,
    endDate: -1,
  },
];
