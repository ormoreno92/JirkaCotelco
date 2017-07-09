import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { PublishingsComponent } from './publishings/publishings.component';

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
    PublishingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
        path: 'Nosotros',
        component: AboutComponent
      },
      {
        path: 'Servicios',
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
      }
    ]),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }