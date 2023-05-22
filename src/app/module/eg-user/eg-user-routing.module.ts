import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgUserComponent } from './eg-user.component';

const routes: Routes = [{ path: '', component: EgUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgUserRoutingModule { }
