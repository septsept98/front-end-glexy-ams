import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@models/location';
import { LocationService } from '@services/location/location.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  providers: [ConfirmationService]
})
export class LocationListComponent implements OnInit, OnDestroy {

  constructor(private locationService : LocationService, private router : Router, private confirmDialogService: ConfirmationService) { }
  
  selectedLocation: Location[] = []
  deleteResDto: DeleteResDto = new DeleteResDto()
  dataList: Location[] = []
  obs? : Subscription
  delSubs? : Subscription

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.obs = this.locationService.getAll()?.subscribe(result => {
      this.dataList = result
    })
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/location/${id}`)
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
    this.delSubs?.unsubscribe()
  }

  onDelete(id: string): void {
    this.obs = this.locationService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.namePlace + ' ?',
        accept: () => {
          this.delSubs = this.locationService.delete(id)?.subscribe(result => {
            this.deleteResDto = result
            this.initData()
          })
        }
      })
    })
  }

}
