import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent,
         NavComponent } from './components';
         

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingComponent,
    NavComponent
  ],
  providers: [],
  exports: [
    LoadingComponent,
    NavComponent
  ]
})

export class SharedModule { }
