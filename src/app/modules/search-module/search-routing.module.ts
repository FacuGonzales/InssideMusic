import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './page';

const routes: Routes = [
  {
    path: '', component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }