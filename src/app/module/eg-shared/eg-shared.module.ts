import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';3




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule,
    InputTextModule
  ],
  exports: [
    InputMaskModule,
    InputTextModule
    
  ]
})
export class EgSharedModule { }
