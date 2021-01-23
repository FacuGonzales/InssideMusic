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
    path: '**', redirectTo: defaultPathApp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
