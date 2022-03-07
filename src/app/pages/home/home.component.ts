import { Component } from '@angular/core';
import { videogames } from '../../videogames.data';
import { IProject } from 'src/app/project.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'h-100' },
})
export class HomeComponent {
  public readonly videogames: IProject[] = videogames;
}
