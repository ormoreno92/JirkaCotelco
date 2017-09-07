import { DataServiceService } from '../../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trining-detail',
  templateUrl: './trining-detail.component.html',
  styleUrls: ['./trining-detail.component.less']
})
export class TriningDetailComponent implements OnInit {
  training;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const tranningId = localStorage.getItem('currentTrainning');
    this.dataService.getTrainningDetails(tranningId)
      .subscribe(dataH => this.drawTrainning(dataH), error => console.log(error));
  }

  private drawTrainning(dataH) {
    console.log(dataH);
    this.training = dataH;
  }

  public htmlToPlaintext(text) {
    const nText = text ? String(text).replace(/<[^>]+>/gm, '') : '';
    const limit = 50;
    const trail = '...';
    return nText.length > limit ? nText.substring(0, limit) + trail : nText;
  }
}
