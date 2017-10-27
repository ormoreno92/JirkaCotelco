import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var JQUERY: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('redirectLoginUrl');
  }

  public setGeneralLogin(data): void {
    $('.loginError').hide();
    let rUrl = 'http://apps.jirka.co/JSih/LoginServlet?username=@srnm&password=@passwd';
    if (!this.isNullOrEmpty(localStorage.getItem('redirectLoginUrl'))) {
      rUrl = localStorage.getItem('redirectLoginUrl');
    }
    this.dataService.checkLogin(data.value.uLogin, data.value.uPassword)
      .subscribe(dataH => this.redirectToUrl(dataH, rUrl, data.value.uLogin, data.value.uPassword), error => console.log(error));
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  private redirectToUrl(rsp: any, url: string, usr: string, password: string): void {
    if (!rsp.success) {
      $('.loginError').show();
      return;
    }
    if (url.includes('@srnm')) {
      url = url.replace('@srnm', usr);
      url = url.replace('@passwd', password);
    }
    window.open(url, '_blank');
    $('#closeLogin').click();
  }
}
