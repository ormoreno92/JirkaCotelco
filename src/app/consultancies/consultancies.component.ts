import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultancies',
  templateUrl: './consultancies.component.html',
  styleUrls: ['./consultancies.component.less']
})
export class ConsultanciesComponent implements OnInit {
  consultancies;
  current;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getConsultancies()
      .subscribe(dataH => this.drawConsultors(dataH), error => console.log(error));
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public changeSelector(val: any): void {
    this.current = this.getCurrentAllie(val).linesList;
  }

  private drawConsultors(dataH: any): void {
    this.consultancies = dataH
    this.current = this.getCurrentAllie(this.consultancies[0].id).linesList;
  }

  private getCurrentAllie(val: any): any {
    for (let i = 0; i < this.consultancies.length; i++) {
      if (this.consultancies[i].id === val) {
        return this.consultancies[i];
      }
    }
  }
}
