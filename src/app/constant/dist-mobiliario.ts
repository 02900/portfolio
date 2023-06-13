import { IProject } from 'src/app/project.interface';

export const mobiliarioImgs = [
  '/assets/mobiliario/484.Plots-Color-Site/Color-Site-Plan-R0-ai-version.png',
  '/assets/mobiliario/484.Plots-Color-Site/Color-Site-Plan-R0-psd-version.png',
  '/assets/mobiliario/490.Office-Cad/Relayout-space-to-make-LAW-FIRM-R0-3.png',
  '/assets/mobiliario/490.Office-Cad/Relayout-space-to-make-LAW-FIRM-R0-4.png',
  '/assets/mobiliario/505.Office-Cad/505-Office-Cad-01-d-4.png',
  '/assets/mobiliario/505.Office-Cad/505-Office-Cad-01-d-5.png',
  '/assets/mobiliario/515.Beauty-Salon-Cad/515.Beauty-Salo-Cad-R0-8.png',
  '/assets/mobiliario/515.Beauty-Salon-Cad/515.Beauty-Salon-Cad-R0-6-dim.png',
  '/assets/mobiliario/515.Beauty-Salon-Cad/515.Beauty-Salon-Cad-R0-6.png',
  '/assets/mobiliario/515.Beauty-Salon-Cad/515.Beauty-Salon-Cad-R0-8-dim.png',
  '/assets/mobiliario/518.Beauty-Salon/518.Beauty-Salon-Cad-R1-1-dim.png',
  '/assets/mobiliario/518.Beauty-Salon/518.Beauty-Salon-Cad-R1-1.png',
  '/assets/mobiliario/520.Private-Resort/520.Private-Resort-R0-A.png',
  '/assets/mobiliario/520.Private-Resort/520.Private-Resort-R0-B.png',
  '/assets/mobiliario/527.Two-Story-House/527.Floor-Plan-2-Story-0-Land-Before.jpg',
  '/assets/mobiliario/527.Two-Story-House/527.Floor-Plan-2-Story-R1-1.Ground-&-First-Black.jpg',
  '/assets/mobiliario/527.Two-Story-House/527.Floor-Plan-2-Story-R1-1.Ground&First-Color.jpg',
];

export const mobiliario: IProject[] = [
  {
    cover: '/assets/frontend/screenshot-ce',
    title: 'Screenshot Chrome Extension',
    stack: 'Angular 13, RxJS, TypeScript',
    description:
      'Utility to automate the process of take screenshot in multiple resolutions',
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
