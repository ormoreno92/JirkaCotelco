import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { DataServiceService } from './data-service.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { PublishingsComponent } from './publishings/publishings.component';
import { Carousel2Component } from './home/carousel2/carousel2.component';
import { MarcasCotelcoComponent } from './home/marcas-cotelco/marcas-cotelco.component';
import { PressComponent } from './press/press.component';
import { EventsComponent } from './events/events.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ConsultanciesComponent } from './consultancies/consultancies.component';
import { AlliesComponent } from './allies/allies.component';
import { AffiliatesModComponent } from './affiliates-mod/affiliates-mod.component';
import { AffiliateResultComponent } from './affiliates-mod/affiliate-result/affiliate-result.component';
import { CustomAppPipesPipe } from './custom-app-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OurServicesComponent,
    ChaptersComponent,
    AffiliateComponent,
    PublishingsComponent,
    Carousel2Component,
    MarcasCotelcoComponent,
    PressComponent,
    EventsComponent,
    TrainingsComponent,
    ConsultanciesComponent,
    AlliesComponent,
    AffiliatesModComponent,
    AffiliateResultComponent,
    CustomAppPipesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full'
      },
      {
        path: 'Inicio',
        component: HomeComponent
      },
      {
        path: '\Nosotros',
        component: AboutComponent
      },
      {
        path: '\Servicios',
        component: OurServicesComponent
      },
      {
        path: '\Capitulos',
        component: ChaptersComponent
      },
      {
        path: '\Afiliese',
        component: AffiliateComponent
      },
      {
        path: '\Publicaciones',
        component: PublishingsComponent
      },
      {
        path: '\SalaPrensa',
        component: PressComponent
      },
      {
        path: '\Eventos',
        component: EventsComponent
      },
      {
        path: '\Capacitaciones',
        component: TrainingsComponent
      },
      {
        path: '\Consultorias',
        component: ConsultanciesComponent
      },
      {
        path: '\Aliados',
        component: AlliesComponent
      },
      {
        path: '\Afiliados',
        component: AffiliatesModComponent
      },
      {
        path: '\BusquedaAfiliados',
        component: AffiliateResultComponent
      }
    ]),
    AlertModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
