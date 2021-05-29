import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicRoutingModule } from './academic-routing.module';
import {PageCardTemplateModule} from '@shared/page-card-template/page-card-template.module';
import { AcademicComponent } from './academic.component';

@NgModule({
  declarations: [AcademicComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    PageCardTemplateModule
  ]
})
export class AcademicModule { }
