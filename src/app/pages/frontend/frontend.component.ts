import { Component } from '@angular/core';
import { IProjectData } from '@shared/card/card.project-data';
import { frontend } from './data';

@Component({
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
  host: {class: 'h-100'},
})
export class FrontendComponent {
  public readonly frontend: IProjectData[] = frontend;
}

