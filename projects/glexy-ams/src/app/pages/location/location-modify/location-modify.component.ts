import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { Company } from '@models/company';
import { Location } from '@models/location';
import { LocationService } from '@services/location/location.service';
import { Select2OptionData } from 'ng-select2';
import { Subscription } from 'rxjs';
import { Options } from 'select2';

@Component({
  selector: 'app-location-modify',
  templateUrl: './location-modify.component.html',
  styleUrls: ['./location-modify.component.css']
})
export class LocationModifyComponent implements OnInit, OnDestroy {

  locationInsert! : Location
  dataLocation? : InsertResDto
  optionsCompany! : Options;
  obs? : Subscription

  constructor(private locationService : LocationService, private router: Router) { }

  ngOnInit(): void {
    this.locationInsert = new Location()
    this.dataLocation = new InsertResDto()

    this.optionsCompany = {
      width:'100%',
      ajax: {
        url: 'http://localhost:1234/companies/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Company[] = data;
          const select2Data : Select2OptionData[] = []
          for (const company of result) {
            select2Data.push(
              {
                id: company.id ?? "",
                text: company.names ?? ""
              }
            )
          }
          return {
            results: select2Data
          };
        }
        
      }
    }
  }

  addDb(): void {
    this.locationService.insert(this.locationInsert)?.subscribe(result => {
      if(result.data) {
        this.dataLocation = result
        if(this.dataLocation){
          this.router.navigateByUrl("/glexy/location/list")

        }
      }
    })
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
  }

}
