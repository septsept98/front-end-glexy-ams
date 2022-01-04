import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@models/location';
import { LocationService } from '@services/location/location.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit, OnDestroy {

  constructor(private locationService : LocationService, private router : Router) { }
  selectedLocation: Location[] = []
  dataList: Location[] = []
  obs? : Subscription

  ngOnInit(): void {
    this.locationService.getAll()?.subscribe(result => this.dataList = result)
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/location/${id}`)
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

}
