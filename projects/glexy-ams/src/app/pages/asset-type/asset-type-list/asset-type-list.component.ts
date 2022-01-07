import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { ConfirmationService } from 'primeng/api';
import { AssetType } from 'projects/core/src/app/model/asset-type';
import { AssetTypeService } from 'projects/core/src/app/services/asset-type/asset-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-type-list',
  templateUrl: './asset-type-list.component.html',
  styleUrls: ['./asset-type-list.component.css']
})
export class AssetTypeListComponent implements OnInit, OnDestroy {

  constructor(private assetTypeService : AssetTypeService, private router : Router, private confirmDialogService: ConfirmationService) { }
  dataList : AssetType[] = []
  selectedData : AssetType[] = []
  resDelete: DeleteResDto = new DeleteResDto()
  obs? : Subscription
  delSubs? : Subscription

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.obs = this.assetTypeService.getAll()?.subscribe(result => {
      this.dataList = result
    })
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
    this.delSubs?.unsubscribe()
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/asset-type/${id}`)
  }

  onDelete(id: string): void {
    this.obs = this.assetTypeService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.names + ' ?',
        accept: () => {
          this.delSubs = this.assetTypeService.delete(id)?.subscribe(result => {
            this.resDelete = result
            this.initData()
          })
        }
      })
    })
  }

}
