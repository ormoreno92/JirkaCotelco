declare var jQuery: any;
import { DataServiceService } from '../data-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  images;
  constructor(private dataService: DataServiceService) { }
  ngOnInit() {
    this.dataService.getHomeBannerImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
  }
  private drawBannerImages(data: any): void {
    console.log(data);
  }
}
