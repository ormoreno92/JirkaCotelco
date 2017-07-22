import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.less']
})
export class TrainingsComponent implements OnInit {
  capacitaciones;
  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    this.dataService.getHomeBannerImages()
      .subscribe(dataH => console.log(this.capacitaciones = dataH), error => console.log(error));
  }
  public RedirectTo(url: string): void {
    console.log(url);
    this.router.navigate([url]);
  }
}
