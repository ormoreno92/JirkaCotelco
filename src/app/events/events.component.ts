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
    const eventId = window.location.href.split('/');
    this.dataService.getEventDetails(eventId.pop())
      .subscribe(dataH => this.drawEvent(dataH), error => console.log(error));
  }
  private drawEvent(dataH) {
    this.event = dataH;
    const j = this.event;
    let menu = `<li class="active">
                  <a data-toggle="pill" href="#sec1">Inicio</a>
                </li>`;
    let body = `<div id="sec1" class="tab-pane active inner-pane-props" style="background: white;" onclick="window.open('` + j.url + `', '_blank');">
                  <img src="` + j.advertisingPiece + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    if (!this.isNullOrEmpty(j.introductionFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec2">Introducción</a>
              </li>`;
      body += `<div id="sec2" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.introductionFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.scheduleFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec3">Horarios</a>
              </li>`;
      body += `<div id="sec3" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.scheduleFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.speakersFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec4">Conferencistas</a>
              </li>`;
      body += `<div id="sec4" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.speakersFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.programFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec5">Programa</a>
              </li>`;
      body += `<div id="sec5" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.programFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }

    if (!this.isNullOrEmpty(j.inversionFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec6">Inversión</a>
              </li>`;
      body += `<div id="sec6" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.inversionFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }

    if (!this.isNullOrEmpty(j.hotelRatesFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec7">Tarifas Hoteleras</a>
              </li>`;
      body += `<div id="sec7" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.hotelRatesFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }

    if (!this.isNullOrEmpty(j.reportsFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec8">Informe</a>
              </li>`;
      body += `<div id="sec8" class="tab-pane inner-pane-props" style="background: white;">
                  <img src="` + j.reportsFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    if (!this.isNullOrEmpty(j.registrationFile)) {
      menu += `<li>
                <a data-toggle="pill" href="#sec8">Registrese</a>
              </li>`;
      body += `<div id="sec8" class="tab-pane inner-pane-props" style="background: white;" onclick="window.open('` + j.registratioLink + `', '_blank');">
                  <img src="` + j.registrationFile + `"
                  style="background: white;height:auto;width:100%;display:block;margin:0 auto;"/>
                </div>`;
    }
    this.menu = menu;
    $('#bodyCont').html(body);
    $('.menusitoMen').html(menu);
    $('.nav-pills').tab();
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '' || data === 'null') { return true };
    return false;
  }
}
