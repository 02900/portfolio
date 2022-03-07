import { Component } from '@angular/core';
import { videogames } from 'src/app/constant/videogames.data';
import { frontend } from 'src/app/constant/frontend.data';
import { IProject } from 'src/app/project.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'h-100' },
})
export class HomeComponent {
  public readonly videogames: IProject[] = videogames;
  public readonly frontend: IProject[] = frontend;
}
