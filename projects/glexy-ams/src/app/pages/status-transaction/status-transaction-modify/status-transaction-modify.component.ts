import { Component, OnDestroy, OnInit } from '@angular/core';

import { Options } from 'select2';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusTransactionService } from '@services/status-transaction/status-transaction.service';
import { StatusTransaction } from '@models/status-transaction';
import { StatusAsset } from '@models/status-asset';
import { Subscription } from 'rxjs';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-status-transaction-modify',
  templateUrl: './status-transaction-modify.component.html',
  styleUrls: ['./status-transaction-modify.component.css']
})
export class StatusTransactionModifyComponent implements OnInit, OnDestroy {

  dataStatusTrx: StatusTransaction = new StatusTransaction()
  dataStatus: StatusAsset = new StatusAsset()
  listDataStatus: StatusAsset[] = []

  activeOn: boolean = false

  private getUnSubs?: Subscription
  private saveUnSubs?: Subscription

  resInsert: InsertResDto = new InsertResDto()
  resUpdate: UpdateResDto = new UpdateResDto()

  constructor(private statusTrxService: StatusTransactionService,
    private statusAssetService: StatusAssetService,
    private router: Router,
    private route: ActivatedRoute,
    private title :Title) {
      title.setTitle("Status Transaction Create")
     }

  ngOnInit(): void {
    this.dataStatusTrx.statusAssetId = this.dataStatus
    this.getUnSubs = this.statusAssetService.getAll()?.subscribe(res => {
      this.listDataStatus = res
    })
    const id: any = this.route.snapshot.paramMap.get('id');
    if(id){
      this.title.setTitle("Status Transaction Update")
      this.activeOn = true
      this.getUnSubs = this.statusTrxService.getById(String(id))?.subscribe(result => {
        this.dataStatusTrx = result
      })
    }
  }

  ngOnDestroy(): void {
    this.getUnSubs?.unsubscribe()
    this.saveUnSubs?.unsubscribe()
  }

  onBack(): void {
    this.router.navigateByUrl("/glexy/status-trx")
  }

  onSubmit(): void {
    if(this.dataStatusTrx.id){
      this.saveUnSubs = this.statusTrxService.update(this.dataStatusTrx)?.subscribe(res => {
        this.resUpdate = res
        console.log(this.resUpdate)
      })
    } else {
      this.saveUnSubs = this.statusTrxService.insert(this.dataStatusTrx)?.subscribe(res => {
        this.resInsert = res
        this.router.navigateByUrl("/glexy/status-trx")
      })
    }
  }
}
