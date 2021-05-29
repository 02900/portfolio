import { Component } from '@angular/core';
import { IProjectData } from '@shared/card/card.project-data';
import { videogames } from './data';

@Component({
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss'],
  host: {class: 'h-100'},
})
export class VideogamesComponent {
  public readonly videogames: IProjectData[] = videogames;
}
