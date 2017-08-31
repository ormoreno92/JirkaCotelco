import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliates-mod',
  templateUrl: './affiliates-mod.component.html',
  styleUrls: ['./affiliates-mod.component.less']
})
export class AffiliatesModComponent implements OnInit {
  hotel;
  images;
  services = [];
  lat;
  lng;
  brandings;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const hotelId = localStorage.getItem('currentHotel');
    this.dataService.getHotelDetails(hotelId)
      .subscribe(dataH => this.drawHotel(dataH), error => console.log(error));
  }
  private drawHotel(dataH) {
    console.log(dataH);
    this.hotel = dataH;
    this.images = this.hotel.photoList;
    console.log(this.hotel.servicesList);
    this.hotel.servicesList.forEach(service => {
      if (service.image != null && service.image !== 'null' && service.image !== '') {
        this.services.push(service)
      }
    });
    this.brandings = this.hotel.certificationsList;
    this.lat = this.hotel.latitude;
    this.lng = this.hotel.longitude;
  }
  public htmlToPlaintext(text) {
    const nText = text ? String(text).replace(/<[^>]+>/gm, '') : '';
    const limit = 50;
    const trail = '...';
    return nText.length > limit ? nText.substring(0, limit) + trail : nText;
  }

  public goToExternalHotel(url: string): void {
    if (url && !url.match(/^http([s]?):\/\/.*/)) {
      url = 'http://' + url;
    }
    window.open(url, '_blank');
  }
}
