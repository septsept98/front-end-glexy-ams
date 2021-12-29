import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { StatusAsset } from '@models/status-asset';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-asset-modify',
  templateUrl: './status-asset-modify.component.html',
  styleUrls: ['./status-asset-modify.component.css']
})
export class StatusAssetModifyComponent implements OnInit, OnDestroy {

  dataStatusAsset: StatusAsset = new StatusAsset()

  insertResDto: InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()

  private insUnSubs?: Subscription;
  private unSubs?: Subscription;

  constructor(private statusAssetService: StatusAssetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.insUnSubs?.unsubscribe
    this.unSubs?.unsubscribe
  }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.unSubs = this.statusAssetService.getById(String(id))?.subscribe(result => {
        this.dataStatusAsset = result
      })
    }
  }

  onBack(): void {
    this.router.navigateByUrl("/glexy/status-asset/list")
  }

  onSubmit(): void {
    if (this.dataStatusAsset.id) {
      this.insUnSubs = this.statusAssetService.update(this.dataStatusAsset)?.subscribe(res => {
        this.updateResDto = res
        console.log(res)
      })
    } else {
      this.insUnSubs = this.statusAssetService.insert(this.dataStatusAsset)?.subscribe(res => {
        this.insertResDto = res
        this.router.navigateByUrl("/glexy/status-asset/list")
      })
    }
  }
}
