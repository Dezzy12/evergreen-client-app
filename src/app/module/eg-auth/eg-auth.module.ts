import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgAuthRoutingModule } from './eg-auth-routing.module';
import { EgAuthComponent } from './eg-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EgAuthComponent,
    SigninComponent,
    SignupComponent,

  ],
  imports: [
    CommonModule,
    EgAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EgAuthModule { }
