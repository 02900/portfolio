import { IProject } from 'src/app/project.interface';

export const videogames: IProject[] = [
  {
    cover: '/assets/vg/crowd-simulation',
    title: 'Crowd Simulation',
    stack: 'Unity',
    description: 'Research about crowd simulation models.',
    links: [
      {
        name: 'Video',
        zelda: 'https://youtu.be/dblzEx7WnDI',
      },
    ],
    startDate: 2018,
    endDate: 2019,
  },
  {
    cover: '/assets/vg/ygo',
    title: 'Yugioh Duelist of the Roses',
    stack: 'Unity',
    description: 'A remake based on the game Yu-Gi-Oh! Duelist of the Roses',
    links: [
      {
        name: 'Video',
        zelda: 'https://youtu.be/uUspAGvrGdE',
      },
    ],
    endDate: 2018,
  },
  {
    cover: '/assets/vg/caza-a-casa',
    title: 'Caza a Casa',
    stack: 'Unity',
    description:
      'A 2D game platformer inspired by petroglyphs, figures engraved in stone thousands of years ago.',
    links: [
      {
        name: 'Video',
        zelda: 'https://www.youtube.com/watch?v=K7vWXWfpdD0',
      },
    ],
    endDate: 2018,
  },
  {
    cover: '/assets/vg/goku-escape-itachi-no-jutsu',
    title: 'Goku escape Itachi no Jutsu',
    stack: 'LÖVE 2D',
    description:
      'A simple game developed in orden to learn about Lua programming language.',
    links: [
      {
        name: 'Video',
        zelda: 'https://youtu.be/Z_l2B_m0t9A',
      },
    ],
    endDate: 2018,
  },
  {
    cover: '/assets/vg/ai4vg-3',
    title: 'States Machines',
    stack: 'Unity',
    description:
      'Implementation of FSM to allow NPC can make decisions according to the game state.',
    links: [
      {
        name: 'Video',
        zelda: 'https://www.youtube.com/watch?v=NBQ8Mfu8y_c',
      },
    ],
    endDate: 2017,
  },
  {
    cover: '/assets/vg/ai4vg-2',
    title: 'Navigation Mesh',
    stack: 'Unity',
    description:
      'Automatic generation of navmesh voxel based from scratch and integration with A* algorithm.',
    links: [
      {
        name: 'Video',
        zelda: 'https://youtu.be/kCVZcDi-71w',
      },
    ],
    endDate: 2017,
  },
  {
    cover: '/assets/vg/ai4vg-1',
    title: 'Steering Behaviors',
    stack: 'Unity',
    description:
      'Interesting movement algorithms based on steering behavior principles.',
    links: [
      {
        name: 'Video',
        zelda: 'https://youtu.be/r7ljr2gJ3eU',
      },
    ],
    endDate: 2017,
  },
  {
    cover: '/assets/vg/tps',
    title: 'TPS Prototype',
    stack: 'Unity',
    description:
      'A template to third person shooter with include player controller, enemies, policies, vehicles and wanted system and more.',
    links: [
      {
        name: 'Video',
        zelda: 'https://www.youtube.com/watch?v=3qoVqg6spMU',
      },
    ],
    endDate: 2015,
  },
  {
    cover: '/assets/vg/first-game-1',
    title: 'TPS Sandbox Prototype',
    stack: 'Unity',
    description:
      'In my introduction to game development, I made a large-scale prototype of a third person open world game over a period of 1 year.',
    links: [
      {
        name: 'Video',
        zelda: 'https://www.youtube.com/watch?v=jy9TMtB9WaE',
      },
    ],
    startDate: 2012,
    endDate: 2013,
  },
];
