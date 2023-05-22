import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgAuthComponent } from './eg-auth.component';

const routes: Routes = [{ path: '', component: EgAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgAuthRoutingModule { }
