import { Component, OnInit } from '@angular/core';
declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public SelectTargetTab(identifier: string): void {
    console.log(identifier);
  }

}

