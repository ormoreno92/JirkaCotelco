import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  types;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getContactTypes()
      .subscribe(dataH => this.types = dataH, error => console.log(error));
  }

}
