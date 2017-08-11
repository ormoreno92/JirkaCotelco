import { CustomAppPipesPipe } from '../custom-app-pipes.pipe';
import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.less']
})
export class PressComponent implements OnInit {
  alliesN;
  alliesI;
  lastNew;
  lastNews;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPressAllies()
      .subscribe(dataH => this.drawAllies(dataH), error => console.log(error));
    this.dataService.getLastNew()
      .subscribe(dataH => this.lastNew = dataH, error => console.log(error));
    this.dataService.getlastNews()
      .subscribe(dataH => this.drawNews(dataH), error => console.log(error));
  }

  public htmlToPlaintext(text, limit) {
    if (text != null && text !== '') {
      const nText = text ? String(text).replace(/<[^>]+>/gm, '') : '';
      const trail = '...';
      return nText.length > limit ? nText.substring(0, limit) + trail : nText;
    }
    return text;
  }

  private drawAllies(dataH: any): any {
    const alliesN = [];
    const alliesI = [];
    for (let i = 0; i < dataH.length; i++) {
      if (dataH[i].allieNewsType === 'NATIONAL') {
        alliesN.push(dataH[i]);
      } else {
        alliesI.push(dataH[i]);
      }
    }
    this.alliesI = alliesI;
    this.alliesN = alliesN;
  }

  private drawNews(dataH: any): any {
    console.log(dataH);
    const news = [];
    for (let i = 0; i < 3; i++) {
      news.push(dataH[i]);
    }
    this.lastNews = news;
  }
}
