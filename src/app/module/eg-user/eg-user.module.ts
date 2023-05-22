import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgUserRoutingModule } from './eg-user-routing.module';
import { EgUserComponent } from './eg-user.component';


@NgModule({
  declarations: [
    EgUserComponent
  ],
  imports: [
    CommonModule,
    EgUserRoutingModule
  ]
})
export class EgUserModule { }
