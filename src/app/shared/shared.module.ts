import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent,
         NavComponent } from './components';
import { SharedRoutingModule } from './shared-routing.module';
         

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
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
