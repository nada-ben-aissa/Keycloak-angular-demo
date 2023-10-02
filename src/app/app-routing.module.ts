import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecuredComponent } from './secured/secured.component';
import { GuardService } from './service/guard.service';

const isAuthenticated: CanActivateFn = (route, state) => {
  return inject(GuardService).isAccessAllowed(route, state);
}

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'secured',
    canActivate: [isAuthenticated],
    component: SecuredComponent
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
