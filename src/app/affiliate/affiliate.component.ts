import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.less']
})
export class AffiliateComponent implements OnInit {
  subCategories;
  chapters;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getSubcategories()
      .subscribe(dataH => this.subCategories = dataH, error => console.log(error));
    this.dataService.getChapters()
      .subscribe(dataH => this.chapters = dataH, error => console.log(error));
    function Ctrl($scope) {
      $scope.text = 'me@example.com';
    }
  }

  public validateRnt(event: any): void {
    if (event.target.value != null && event.target.value !== '') {
      this.dataService.validateRnt(event.target.value)
        .subscribe(dataH => this.paintRnt(dataH), error => console.log(error));
    }
  }

  public validateEmail(event: any): void {
    if (event.target.value != null && event.target.value !== '') {
      if (this.isValidEmailAddress(event.target.value)) {
        this.dataService.validateEmail(event.target.value)
          .subscribe(dataH => this.paintEmail(dataH), error => console.log(error));
      } else {
        $('#email').css('border-color', 'red');
        $('#email').data('validField', 'false');
      }
    }
  }

  private paintRnt(val: any): void {
    if (val.success) {
      $('#rnt').css('border-color', 'green');
      $('#rnt').data('validField', 'true');
    } else {
      $('#rnt').css('border-color', 'red');
      $('#rnt').data('validField', 'false');
    }
  }

  private paintEmail(val: any): void {
    if (val.success) {
      $('#email').css('border-color', 'green');
      $('#email').data('validField', 'true');
    } else {
      $('#email').css('border-color', 'red');
      $('#email').data('validField', 'false');
    }
  }

  private isValidEmailAddress(emailAddress: string): boolean {
    const pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
  }
}
