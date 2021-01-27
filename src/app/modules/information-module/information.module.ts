import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InformationRoutingModule } from './information-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationPageComponent } from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InformationRoutingModule,
    SharedModule
  ],
  declarations: [
    InformationPageComponent
  ],
  providers: [],
})

export class InformationModule { }
