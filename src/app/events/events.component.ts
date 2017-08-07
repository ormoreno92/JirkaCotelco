import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less']
})
export class EventsComponent implements OnInit {
  event;
  innerContent;
  menu;
  body;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const eventId = localStorage.getItem('eventSearchObj');
    this.dataService.getEventDetails(eventId)
      .subscribe(dataH => this.drawEvent(dataH), error => console.log(error));
  }
  private drawEvent(dataH) {
    this.event = dataH;
    const j = this.event;
    console.log(j);
    let menu = `<ul class="nav nav-pills nav-stacked lefty-menu">
                <li class="active">
                  <a data-toggle="pill" href="#sec1">Inicio</a>
                </li>`;
    let body = `<div id="sec1" class="tab-pane active inner-pane-props" style="background: white;" (click)="goToExternal(` + j.url + `)">
                  <img src="` + j.advertisingPiece + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    if (!this.isNullOrEmpty(j.introductionFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec2">Introducción</a>
              </li>`;
      body += `<div id="sec2" class="tab-pane active inner-pane-props" style="background: white;" (click)="goToExternal(` + j.url + `)">
                  <img src="` + j.introductionFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.scheduleFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec3">Horarios</a>
              </li>`;
      body += `<div id="sec3" class="tab-pane active inner-pane-props" style="background: white;" (click)="goToExternal(` + j.url + `)">
                  <img src="` + j.scheduleFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.speakersFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec4">Conferencistas</a>
              </li>`;
      body += `<div id="sec4" class="tab-pane active inner-pane-props" style="background: white;" (click)="goToExternal(` + j.url + `)">
                  <img src="` + j.speakersFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }

    /*if (!this.isNullOrEmpty(j.programFile)) {
      $('.bodyEvent').append('<img src="' + j.programFile + '" class="img-hundred" />');
    }

    if (!this.isNullOrEmpty(j.inversionFile)) {
      $('.bodyEvent').append('<img src="' + j.inversionFile + '" class="img-hundred" />');
    }

    if (!this.isNullOrEmpty(j.hotelRatesFile)) {
      $('.bodyEvent').append('<img src="' + j.hotelRatesFile + '" class="img-hundred" />');
    }

    if (!this.isNullOrEmpty(j.reportsFile)) {
      $('.bodyEvent').append('<img src="' + j.reportsFile + '" class="img-hundred" />');
    }*/
    menu += `</ul>`;
    this.menu = menu;
    $('#bodyCont').html(body);
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public goToExternal(url: string): void {
    if (url != null && url !== '') { window.open(url, '_blank'); }
  }
}
