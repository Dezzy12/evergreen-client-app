import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgAuthRoutingModule } from './eg-auth-routing.module';
import { EgAuthComponent } from './eg-auth.component';


@NgModule({
  declarations: [
    EgAuthComponent
  ],
  imports: [
    CommonModule,
    EgAuthRoutingModule
  ]
})
export class EgAuthModule { }
