import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgAuthRoutingModule } from './eg-auth-routing.module';
import { EgAuthComponent } from './eg-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    EgAuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    EgAuthRoutingModule
  ]
})
export class EgAuthModule { }
