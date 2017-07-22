import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-publishings',
  templateUrl: './publishings.component.html',
  styleUrls: ['./publishings.component.less']
})
export class PublishingsComponent implements OnInit {
  images;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPublicaciones()
      .subscribe(dataH => this.DrawPublications(dataH), error => console.log(error));
  }

  private DrawPublications(dataH: any): void {
    this.images = dataH;
    setTimeout(function () {
      $('.carousel[data-type="multi"] .item').each(function () {
        let next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (let i = 0; i < 2; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      });
    }, 1000);
  }
}
