declare var jQuery: any;
import { DataServiceService } from '../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.less']
})
export class Carousel2Component implements OnInit {
  images;
  model;
  constructor(private dataService: DataServiceService) { }
  ngOnInit() {
    this.dataService.getHomeBannerImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
  }
  private drawBannerImages(data: any): void {
    console.log(data);
  }
}

