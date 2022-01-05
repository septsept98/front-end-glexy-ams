import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Company } from '@models/company';
import { Location } from '@models/location';
import { AuthService } from '@services/auth/auth.service';
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

  locationInsert : Location = new Location()
  dataLocation : InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  optionsCompany! : Options
  save: boolean = true
  tab: boolean = false
  locationId? : string | null
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription

  constructor(private activedRoute:ActivatedRoute, private locationService : LocationService, private router: Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.locationInsert.companyId = new Company()

    this.locationId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.locationId) {
      this.dataSubs = this.locationService.getById(this.locationId)?.subscribe(result => {
        this.save = false
        this.tab = true
        this.locationInsert = result
      })
    }

    this.optionsCompany = {
      width:'100%',
      ajax: {
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
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
    if(this.locationId) { 
      this.updateSubs = this.locationService.update(this.locationInsert)?.subscribe( result => {
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/location/list')
      })
    } else {
      this.insertSubs = this.locationService.insert(this.locationInsert)?.subscribe(result => {
        if(result.data) {
          this.dataLocation = result
          if(this.dataLocation){
            this.router.navigateByUrl("/glexy/location/list")
  
          }
        }
      })

    }

  }

  onCancel() :void{
    this.router.navigateByUrl('/glexy/location/list')

  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
  }

}
