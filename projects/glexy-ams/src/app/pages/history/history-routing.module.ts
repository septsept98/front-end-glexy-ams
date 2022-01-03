import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryAssetExpiredComponent } from './history-asset-expired/history-asset-expired.component';
import { HistoryDetailInfoComponent } from './history-detail-info/history-detail-info.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryTrackAssetComponent } from './history-track-asset/history-track-asset.component';
import { HistoryTrxExpiredComponent } from './history-trx-expired/history-trx-expired.component';

const routes: Routes = [
  {
    path : 'histories/transaction',
    component : HistoryListComponent
  },
  {
    path : 'histories/transaction-detail/:id',
    component : HistoryDetailComponent
  },
  {
    path : 'histories/transaction-detail-info/:id',
    component : HistoryDetailInfoComponent
  },
  {
    path : 'histories/track-assets',
    component : HistoryTrackAssetComponent
  },
  {
    path : 'histories/asset-expired',
    component : HistoryAssetExpiredComponent
  },
  {
    path : 'histories/transaction-expired',
    component : HistoryTrxExpiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
