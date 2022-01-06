import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResDto } from '@dto/all-respons/res-dto';
import { TrackAsset } from '@models/track-asset';
import { TrackAssetService } from '@services/track-asset/track-asset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-track-asset',
  templateUrl: './history-track-asset.component.html',
  styleUrls: ['./history-track-asset.component.css']
})
export class HistoryTrackAssetComponent implements OnInit, OnDestroy {

  listTrackAsset: TrackAsset[] = []

  private unSubs?: Subscription

  private resDto!: ResDto

  constructor(private router: Router,
    private trackAssetService: TrackAssetService) { }

  ngOnInit(): void {
    this.unSubs = this.trackAssetService.getAll()?.subscribe(res => {
      this.listTrackAsset = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  downloadPdf(): void {
    this.trackAssetService.downloadPdf()?.subscribe(res => {
      this.resDto.msg = "Downloaded"
    })
  }

  sendEmail(): void {
    this.trackAssetService.sendEmail()?.subscribe(res => {
      this.resDto = res
    })
  }
}

