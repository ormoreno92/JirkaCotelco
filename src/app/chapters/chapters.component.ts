import { forEach } from '@angular/router/src/utils/collection';
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

  public redirectTo(url: string): void {
    window.open(url, '_blank');
  }

  private drawInfo(dataH: any): void {
    this.chapters = dataH;
    this.chapter = dataH[0];
    this.drawMap();
  }

  private drawMap(): void {
    const _self = this;
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
      },
      activateOnLoad: [
        'co5'
      ],
      onClick: function (e) {
        const rLink = e.children('A').eq(0).attr('href'),
          rText = e.children('A').eq(0).text(),
          rClass = e.attr('class').split(' ')[0];
        const filter = rText.trim().toUpperCase();
        let changed = false;
        _self.chapters.forEach(dept => {
          if (filter === dept.name.trim().toUpperCase()) {
            _self.chapter = dept;
            $('.spn-1').html(dept.name);
            $('.spn-2').html(dept.executiveDirector);
            $('.spn-3').html(dept.executiveDirector);
            $('.imgLlo').attr('src', dept.url);
            $('.addr').html(dept.address);
            $('.clpo').html(dept.cellPhone);
            $('.emil').html(dept.email);
            $('.wst').html(dept.webSite);
            $('.hfgr').attr('href', dept.webSite);
            changed = true;
          }
        });
        if (!changed) {
          _self.chapters.forEach(dept => {
            if (dept.id == 15) {
              _self.chapter = dept;
              $('.spn-1').html(dept.name);
              $('.spn-2').html(dept.executiveDirector);
              $('.spn-3').html(dept.executiveDirector);
              $('.imgLlo').attr('src', dept.url);
              $('.addr').html(dept.address);
              $('.clpo').html(dept.cellPhone);
              $('.emil').html(dept.email);
              $('.wst').html(dept.webSite);
              $('.hfgr').attr('href', dept.webSite);
              changed = true;
            }
          });
        }
      }
    });
  }
}
