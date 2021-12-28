import { Component, OnInit } from '@angular/core';
import { Location } from '@models/location';
import { LocationService } from '@services/location/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private locationService : LocationService) { }
  selectedLocation: Location[] = []
  dataList: Location[] = []
  obs? : Subscription

  ngOnInit(): void {
    this.locationService.getAll()?.subscribe(result => this.dataList = result)
  }

}
