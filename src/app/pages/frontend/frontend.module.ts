import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import {PageCardTemplateModule} from '@shared/page-card-template/page-card-template.module';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    PageCardTemplateModule
  ]
})
export class FrontendModule { }
