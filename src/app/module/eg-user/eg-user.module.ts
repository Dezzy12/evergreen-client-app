import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgUserRoutingModule } from './eg-user-routing.module';
import { EgUserComponent } from './eg-user.component';
import { EgSharedModule } from '../eg-shared/eg-shared.module';
import { SavedComponent } from './components/saved/saved.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ReadingComponent } from './components/reading/reading.component';
import { HistoryComponent } from './components/history/history.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { ReadComponent } from './components/read/read.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    EgUserComponent,
    SavedComponent,
    DiscoverComponent,
    ReadingComponent,
    HistoryComponent,
    BookPreviewComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    EgUserRoutingModule,
    EgSharedModule,
    PdfViewerModule,

  ]
})
export class EgUserModule { }
