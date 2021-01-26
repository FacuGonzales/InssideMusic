import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoritePageComponent } from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FavoriteRoutingModule,
    SharedModule
  ],
  declarations: [
    FavoritePageComponent
  ],
  providers: [],
})

export class FavoriteModule { }
