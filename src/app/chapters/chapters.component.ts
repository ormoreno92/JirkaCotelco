import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.less']
})
export class ChaptersComponent implements OnInit {
  chapters = [];
  chapter;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getChapters()
      .subscribe(dataH => this.drawInfo(dataH), error => console.log(error));
  }

  private drawInfo(dataH: any): void {
    console.log(dataH);
    this.chapters = dataH;
    this.chapter = dataH[0];
    this.drawMap();
  }
  private drawMap(): void {
    $('#map-colombia').CSSMap({
      'size': 960,
      'mapStyle': 'blue',
      'cities': true,
      'tooltips': false,
      'responsive': 'auto',
      'tapOnce': true,
      'pins': {
        'enable': true,
        'pinsId': '#demo-markers',
        'mapSize': 960,
        'markerPosition': 'middle',
        'tooltipPosition': 'top',
        'tooltipOnClick': false,
        'clickableRegions': true
      }
    });
  }
}
