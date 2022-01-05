import { Component, OnInit } from '@angular/core';
import { AssetService } from '@services/asset/asset.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private assetService :AssetService) { }

  totalAsset :number = 0;
  deployableAsset :number = 0;
  undeployableAsset :number = 0;

  ngOnInit(): void {

    this.assetService.getAll()?.subscribe(result => this.totalAsset = result.length)
    this.assetService.getAllDeployAsset()?.subscribe(result => this.deployableAsset = result.length)
    this.assetService.getAllUndeployAsset()?.subscribe(result => this.undeployableAsset = result.length)
  }

}
