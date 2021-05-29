import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideogamesComponent } from './videogames.component';

const routes: Routes = [{ path: '', component: VideogamesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
