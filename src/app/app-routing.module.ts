import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardService } from './services/user-guard.service';
import { NoUserGuardService } from './services/no-user-guard.service';

const defaultPathApp = '/';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./modules/login-module/login.module').then(m => m.LoginModule), 
    canActivate: [NoUserGuardService]
  },
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home-module/home.module').then(m => m.HomeModule), 
    canActivate: [UserGuardService]
  },
  { 
    path: 'search', 
    loadChildren: () => import('./modules/search-module/search.module').then(m => m.SearchModule), 
    canActivate: [UserGuardService]
  },
  { 
    path: 'favorites', 
    loadChildren: () => import('./modules/favorite-module/favorite.module').then(m => m.FavoriteModule), 
    canActivate: [UserGuardService]
  },
  { 
    path: 'information/:id/:type', 
    loadChildren: () => import('./modules/information-module/information.module').then(m => m.InformationModule), 
    canActivate: [UserGuardService]
  },
  {
    path: '**', redirectTo: defaultPathApp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
