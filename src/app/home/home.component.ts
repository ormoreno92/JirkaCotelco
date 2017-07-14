declare var jQuery: any;
import { DataServiceService } from '../data-service.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  images;
  constructor(private dataService: DataServiceService, private router: Router) { }
  ngOnInit() {
    this.dataService.getHomeBannerImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
  }
  private drawBannerImages(data: any): void {
    console.log(data);
  }
  public RedirectTo(url: string): void {
    this.router.navigate(['./' + url]);
  }
}
