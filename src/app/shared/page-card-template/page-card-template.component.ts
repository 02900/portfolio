import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProjectData } from '@shared/card/card.project-data';

@Component({
  selector: 'app-page-card-template',
  templateUrl: './page-card-template.component.html',
  styleUrls: ['./page-card-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCardTemplateComponent {
  @Input() title: string | undefined;
  @Input() projects : IProjectData[] | undefined;
}
