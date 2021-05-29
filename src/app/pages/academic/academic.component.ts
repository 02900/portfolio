import { Component } from '@angular/core';
import { IProjectData } from '@shared/card/card.project-data';
import { academic } from './data';

@Component({
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss'],
  host: {class: 'h-100'},
})
export class AcademicComponent {
  public readonly academic: IProjectData[] = academic;
}
