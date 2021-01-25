import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageComponent } from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchPageComponent
  ],
  providers: [],
})

export class SearchModule { }
