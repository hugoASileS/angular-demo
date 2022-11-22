import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PymeComponent} from "./pyme/pyme.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pyme',
    component: PymeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
