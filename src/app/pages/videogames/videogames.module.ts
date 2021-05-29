import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogamesRoutingModule } from './videogames-routing.module';
import { PageCardTemplateModule } from '@shared/page-card-template/page-card-template.module';
import { VideogamesComponent } from './videogames.component';

@NgModule({
  declarations: [VideogamesComponent],
  imports: [
    CommonModule,
    VideogamesRoutingModule,
    PageCardTemplateModule
  ]
})
export class VideogamesModule { }
