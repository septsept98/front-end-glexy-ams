import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { StatusAsset } from '@models/status-asset'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-status-asset-list',
  templateUrl: './status-asset-list.component.html',
  styleUrls: ['./status-asset-list.component.css'],
  providers: [ConfirmationService]
})
export class StatusAssetListComponent implements OnInit, OnDestroy {

  listStatusAssets: StatusAsset[] = []

  private unSubs?: Subscription;
  private delUnSubs?: Subscription;

  resDelete: DeleteResDto = new DeleteResDto()

  constructor(private statusAssetService: StatusAssetService,
    private router: Router,
    private confirmDialogService: ConfirmationService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.unSubs = this.statusAssetService.getAll()?.subscribe(data => {
      this.listStatusAssets = data
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
    this.delUnSubs?.unsubscribe()
  }

  onUpdate(id: string): void {
    this.router.navigateByUrl(`/glexy/status-asset/${id}`)
  }

  onDelete(id: string): void {
    this.unSubs = this.statusAssetService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.nameStatusAsset + ' ?',
        accept: () => {
          this.delUnSubs = this.statusAssetService.delete(id)?.subscribe(result => {
            this.resDelete = result
            this.initData()
          })
        }
      })
    })
  }
}
