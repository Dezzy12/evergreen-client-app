import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgUserComponent } from './eg-user.component';
import { SavedComponent } from './components/saved/saved.component';
import { HistoryComponent } from './components/history/history.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ReadingComponent } from './components/reading/reading.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { ReadComponent } from './components/read/read.component';

const routes: Routes = [{
  path: '', component: EgUserComponent,
  children: [
    {path: 'saved', component: SavedComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'discover', component: DiscoverComponent},
    {path: 'discover/:id', component: BookPreviewComponent},
    {path: 'discover/:id/readnow', component: ReadComponent},
    {path: 'reading', component: ReadingComponent},
    {path: '', component: DiscoverComponent},
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgUserRoutingModule { }
