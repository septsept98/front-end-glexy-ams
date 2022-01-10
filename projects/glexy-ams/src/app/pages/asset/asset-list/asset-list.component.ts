import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { statusAss } from '@constant/status';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Asset } from '@models/asset';
import { AssetService } from '@services/asset/asset.service';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css'],
  providers: [ConfirmationService]
})
export class AssetListComponent implements OnInit, OnDestroy {

  constructor(private activedRoute:ActivatedRoute, private assetService : AssetService, 
    private router : Router, private title :Title, private confirmDialogService: ConfirmationService) {
      title.setTitle("Asset")
     }
  
  deleteResDto : DeleteResDto = new DeleteResDto()
  assetList: Asset[] = []
  selectedAsset: Asset[] = []
  invenId? : string | null
  invoiceId? : string | null
  show : boolean = false
  showInvoice : boolean = false
  showEdit : boolean = true
  delSubs? : Subscription
  dataSubs?: Subscription
  obs? : Subscription

  ngOnInit(): void {
    this.invenId = this.activedRoute.snapshot.paramMap.get('id')
    this.invoiceId = this.activedRoute.snapshot.paramMap.get('invoId')
    this.initData()
    

  }

  initData() : void {
    if(this.invenId) {
      this.dataSubs = this.assetService.getByInvent(this.invenId)?.subscribe(result => {
        this.assetList = result
        this.show = true
      })
    } else if(this.invoiceId) {
      this.dataSubs = this.assetService.getByInvoice(this.invoiceId)?.subscribe(result => {
        this.assetList = result
        this.showInvoice = true
      })
    } else {
      this.obs = this.assetService.getAll()?.subscribe(result => {
        this.assetList = result
      })

    }
  }
  
  isDisplayAvail(file: File) : boolean {
    if(file) {
      return true
    } else {
      return false
    }
  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.obs?.unsubscribe()
  }

  backToInvent(): void {
    this.router.navigateByUrl(`/glexy/inventory`)
  }

  backToInvoice(): void {
    this.router.navigateByUrl(`/glexy/invoice`)
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/asset/${id}`)
  }

  checkStatus(stat : string): string {
    let badgeStatus : string = ""

    if (stat == statusAss.get(1)) {
      badgeStatus = "badge-success"
      this.showEdit = true
    } else if (stat == statusAss.get(2)) {
      badgeStatus = "badge-secondary"
      this.showEdit = true
    } else if (stat == statusAss.get(3)) {
      badgeStatus = "badge-info"
      this.showEdit = true
    } else if (stat == statusAss.get(4)) {
      badgeStatus = "badge-warning"
      this.showEdit = true
    } else if (stat == statusAss.get(5)) {
      badgeStatus = "badge-danger"
      this.showEdit = false
    }

    return badgeStatus
  }

  onDelete(id : string): void {
    this.obs = this.assetService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.names + ' ?',
        accept: () => {
          this.delSubs = this.assetService.delete(id)?.subscribe(result => {
            this.deleteResDto = result
            this.initData()
          })
        }
      })
    })
  }


}

