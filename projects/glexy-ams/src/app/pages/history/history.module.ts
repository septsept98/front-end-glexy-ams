import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryDetailInfoComponent } from './history-detail-info/history-detail-info.component';
import { HistoryTrackAssetComponent } from './history-track-asset/history-track-asset.component';
import { HistoryAssetExpiredComponent } from './history-asset-expired/history-asset-expired.component';
import { HistoryTrxExpiredComponent } from './history-trx-expired/history-trx-expired.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryListComponent,
    HistoryDetailComponent,
    HistoryDetailInfoComponent,
    HistoryTrackAssetComponent,
    HistoryAssetExpiredComponent,
    HistoryTrxExpiredComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ]
})
export class HistoryModule { }
