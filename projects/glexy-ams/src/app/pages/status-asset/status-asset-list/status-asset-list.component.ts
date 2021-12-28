import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { StatusAsset } from '@models/status-asset'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';

@Component({
  selector: 'app-status-asset-list',
  templateUrl: './status-asset-list.component.html',
  styleUrls: ['./status-asset-list.component.css']
})
export class StatusAssetListComponent implements OnInit, OnDestroy {

  listStatusAssets: StatusAsset[] = []
  // statusAsset: StatusAsset = new StatusAsset()

  private unSubs?: Subscription;
  private delUnSubs?: Subscription;

  resDelete: DeleteResDto = new DeleteResDto()

  constructor(private statusAssetService: StatusAssetService, private router: Router) { }

  ngOnInit(): void {
     this.unSubs = this.statusAssetService.getAll()?.subscribe(data => {
       this.listStatusAssets = data
     })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
    this.delUnSubs?.unsubscribe()
  }

  onUpdate(id: string) :void {
    this.router.navigateByUrl(`/glexy/status-asset/${id}`)
  }

  onDelete(id: string) :void {
    this.unSubs = this.statusAssetService.getById(id)?.subscribe(result => {
      if (confirm("Are you sure to delete " + result.nameStatusAsset)) {
        this.delUnSubs = this.statusAssetService.delete(id)?.subscribe(result => {
          this.resDelete = result
          window.location.reload();
        })
      }
    })
  }
}
