import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PdfViewerModule } from 'ng2-pdf-viewer';

3




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule,
    InputTextModule,
    PdfViewerModule,
  ],
  exports: [
    InputMaskModule,
    InputTextModule,
    PdfViewerModule,
    
  ]
})
export class EgSharedModule { }
