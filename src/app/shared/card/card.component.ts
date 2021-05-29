import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProjectData } from './card.project-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() data: IProjectData | undefined;
}
