import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryDetailInfoComponent } from './history-detail-info/history-detail-info.component';


@NgModule({
  declarations: [
    HistoryListComponent,
    HistoryDetailComponent,
    HistoryDetailInfoComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
