import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResDto } from '@dto/all-respons/res-dto';
import { AssetExpired } from '@dto/report/asset-expired';
import { AssetService } from '@services/asset/asset.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-asset-expired',
  templateUrl: './history-asset-expired.component.html',
  styleUrls: ['./history-asset-expired.component.css']
})
export class HistoryAssetExpiredComponent implements OnInit, OnDestroy {

  listDataExpiredAsset: AssetExpired[] = []

  private unSubs?: Subscription
  
  private resDto!: ResDto

  constructor(private router: Router,
    private assetService: AssetService, 
    private title :Title,
    private toastr: ToastrService) { 
      title.setTitle("Asset Expired")
    }

  ngOnInit(): void {
    this.assetService.getExpiredAsset()?.subscribe(res => {
      this.listDataExpiredAsset = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  isDisplayAvail(file: File): boolean {
    if (file) {
      return true
    } else {
      return false
    }
  }
  
  downloadPdf(): void {
    this.assetService.downloadPdf()?.subscribe(res => {
      var a = document.createElement("a")
      a.href = URL.createObjectURL(res)
      a.download = "asset-license-expired.pdf"
      a.click()
      this.toastr.success('Downloaded', 'Success')
    })
  }

  sendEmail(): void {
    this.assetService.sendEmail()?.subscribe(res => {
      this.resDto = res
    })
  }
}