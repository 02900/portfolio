import { IProject } from 'src/app/project.interface';

export const parcelamientoImages = [
  '/assets/parcelamiento/479-KISTAPUR-1B-2.jpg',
  '/assets/parcelamiento/479-KISTAPUR-Color-R0Ci.jpg',
  '/assets/parcelamiento/480-KISTAPUR-R1F-color-4C.png',
  '/assets/parcelamiento/480-KISTAPUR-R1Fiv-color-4E.png',
  '/assets/parcelamiento/481-Ramannaguda-R03-H-color-version.png',
  '/assets/parcelamiento/481-Ramannaguda-R03-H.png',
  '/assets/parcelamiento/483-Varma-120-Acres-R0D-1-Plots-i-Black.png',
  '/assets/parcelamiento/483-Varma-120-Acres-R0D-1-Plots-i-Color.png',
  '/assets/parcelamiento/Kompally-Land-CAD-AJ-3-Black-SE-LEE-Tex0.15 pulg.png',
  '/assets/parcelamiento/Kompally-Land-CAD-AJ-3-Color-SE-LEE-Tex015 pulg.png'
];

export const parcelamiento: IProject[] = [
  {
    cover: '/assets/parcelamiento/479-KISTAPUR-1B-2',
    title: 'Parcelamiento de Terreno',
    stack: 'AutoCad 2023',
    description: '',
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
