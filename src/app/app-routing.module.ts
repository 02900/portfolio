import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'academic',
    loadChildren: () =>
      import('./pages/academic/academic.module').then(m => m.AcademicModule)
  },
  {
    path: 'videogames',
    loadChildren: () =>
      import('./pages/videogames/videogames.module').then(
        m => m.VideogamesModule
      )
  },
  {
    path: 'frontend',
    loadChildren: () =>
      import('./pages/frontend/frontend.module').then(m => m.FrontendModule)
  },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
