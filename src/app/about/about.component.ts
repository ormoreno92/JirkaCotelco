import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  funcs;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getFuncs()
      .subscribe(dataH => this.funcs = dataH, error => console.log(error));
  }

  public SelectTargetTab(identifier: string): void {
    console.log(identifier);
  }

  public htmlToPlaintext(text, limit) {
    if (text != null && text !== '') {
      const nText = text ? String(text).replace(/<[^>]+>/gm, '') : '';
      const trail = '...';
      return nText.length > limit ? nText.substring(0, limit) + trail : nText;
    }
    return text;
  }
}

