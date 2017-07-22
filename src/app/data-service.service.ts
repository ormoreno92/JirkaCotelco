import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataServiceService {

  private services = {
    ListaProyectos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    ListaNoticias: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNews',
    ListaStreaming: 'http://apps.jirka.co/JSih/webresources/StreamingREST/getStreamings',
    ListaImagenesPortal: 'http://apps.jirka.co/JSih/webresources/ImagesPortalREST/getImagesPortal',
    ListaAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliates',
    ListaEventos: 'http://apps.jirka.co/JSih/webresources/EventsREST/getEvents',
    ListaDocumentos: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/getDocuments',
    ListaAliados: 'http://apps.jirka.co/JSih/webresources/PartnersREST/getPartnersCategories',
    AfiliadoHotel: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliate',
    ListaPublik: 'http://apps.jirka.co/JSih/webresources/PublikREST/getMessagues',
    ListaPublicaciones: 'http://apps.jirka.co/JSih/webresources/PublicationsREST/getPublications'
  };
  private headers = new Headers({ 'Accept': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getHomeBannerImages(): Observable<HomeBannerImages[]> {
    return this.http.get(this.services.ListaImagenesPortal, this.options)
      .map(res => res.json());
  }

  public getPublicaciones(): Observable<PublicacionesMagazines[]> {
    return this.http.get(this.services.ListaPublicaciones, this.options)
      .map(res => res.json());
  }

  public getCapacitaciones(): Observable<any[]> {
    return this.http.get(this.services.ListaEventos, this.options)
      .map(res => res.json());
  }

  private getServicesUrl(): Observable<ServiceUrl> {
    return this.http.get('this.heroesUrl', this.options)
      .map(res => res.json());
  }

}

export class HomeBannerImages {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  link: string;
  order: number;
  state: number;
}

export class PublicacionesMagazines {
  id: number;
  name: string;
  email: string;
  fax: string;
  url: string;
  webSite: string;
  phone: string;
  cellPhone: string;
  address: string;
  state: number;
  departament: string;
  executiveDirector: string;
  requestsAffiliates: string;
  pendingAffiliations: string;
  requestsChangeDaily: string;
  requestsChangeMonthly: string;
}

export class Capacitaciones {
  id: number;
  name: string;
  summary: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
  place: string;
  addres: string;
  advertisingPiece: string;
  url: string;
  videoLink: string;
  color: string;
  introductionFile: string;
  scheduleFile: string;
  speakersFile: string;
  programFile: string;
  inversionFile: string;
  hotelRatesFile: string;
  reportsFile: string;
  registrationFile: string;
  registrationAltFile: string;
  registratioLink: string;
  registrationAltLink: string;
  state: number;
}

export class ServiceUrl {
  ListaProyectos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaNoticias: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNews';
  ListaStreaming: 'http://apps.jirka.co/JSih/webresources/StreamingREST/getStreamings';
  ListaImagenesPortal: 'http://apps.jirka.co/JSih/webresources/ImagesPortalREST/getImagesPortal';
  ListaAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliates';
  ListaEventos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaDocumentos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaAliados: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  AfiliadoHotel: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaPublik: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaPublicaciones: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
}
