import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then(m => m.AppModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
