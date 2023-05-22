import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'home', component:LandingPageComponent},
  { path: 'auth', loadChildren: () => import('./module/eg-auth/eg-auth.module').then(m => m.EgAuthModule) }, 
  { path: 'user', loadChildren: () => import('./module/eg-user/eg-user.module').then(m => m.EgUserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
