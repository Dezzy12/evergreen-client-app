import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/home'},
  {path: 'home', component:LandingPageComponent},
  { path: 'auth', loadChildren: () => import('./module/eg-auth/eg-auth.module').then(m => m.EgAuthModule) }, 
  { path: 'user', loadChildren: () => import('./module/eg-user/eg-user.module').then(m => m.EgUserModule) },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
