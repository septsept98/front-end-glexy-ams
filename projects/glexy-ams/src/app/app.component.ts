import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@services/loading-service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loadingService : LoadingService) {}

  title = 'glexy-ams';
  loading : boolean = true

  ngOnInit() : void {

    this.loadingService.load$?.subscribe(result => {
      this.loading = result??true
      console.log(this.loading)
    })
  }

  

}
