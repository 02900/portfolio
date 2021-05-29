import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@shared/card/card.module';

import { PageCardTemplateComponent} from './page-card-template.component';

@NgModule({
  declarations: [PageCardTemplateComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [PageCardTemplateComponent]
})
export class PageCardTemplateModule { }
