import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent,
         NavComponent } from './components';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
         

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    LoadingComponent,
    NavComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    LoadingComponent,
    NavComponent,
    FooterComponent
  ]
})

export class SharedModule { }
