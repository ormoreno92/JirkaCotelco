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
    ListaEventos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    ListaDocumentos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    ListaAliados: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    AfiliadoHotel: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    ListaPublik: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters',
    ListaPublicaciones: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters'
  };
  private headers = new Headers({ 'Accept': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getHomeBannerImages(): Observable<HomeBannerImages[]> {
    return this.http.get(this.services.ListaImagenesPortal, this.options)
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
