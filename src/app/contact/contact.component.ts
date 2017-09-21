import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

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
      .subscribe(dataH => this.modifyTypes(dataH), error => console.log(error));
  }

  public SendContact(data): void {
    if (!$('#chkAccept').is(':checked')) {
      alert('Por favor, acepte la Política de Tratamiento de Datos');
      return;
    }
    let valid = true;
    $('.form-control').each(function () {
      if ($(this).prop('required')) {
        if ($(this).val() === '') {
          $(this).css('border-color', 'red');
          valid = false;
        } else {
          $(this).css('border-color', 'green');
        }
      }
    });
    if (this.isNullOrEmpty($('#sbct').val())) {
      valid = false;
      $('#sbct').css('border-color', 'red');
    }
    valid = this.validateEmail(data.value.email);
    valid = this.validatePhone(data.value.cellphone);
    if (!valid) { return; }
    /*const obj = `{
      "title":"` + data.value.subject + `",
      "message":"` + data.value.msg + `",
      "file":null,
      "state":2,
      "externalUser":
      {
          "firstName":"` + data.value.uname + `",
          "lastName":"` + data.value.lastnames + `",
          "emailAddress":"` + data.value.email + `",
          "cellPhone":"` + data.value.cellphone + `",
          "phone":"` + data.value.phone + `",
          "chargeName":"` + data.value.charge + `",
          "company":"` + data.value.company + `",
          "acceptInforPolicy":1,
          "state":2
      },
      "suggestionType":
      {
          "id":` + $('#sbct').val() + `
      }
  }`;*/

    const obj = `{
    "title":"solicitud de información",
    "message":"Solicito información sobre estadísticas del mes de julio",
    "file":"suggestions/6beb8e84-4c6f-4c3c-8fee-2c451c971775.jpg",
    "state":1,
    "externalUser":
    {
     "firstName":"Angel Miguel",
     "lastName":"Sanchez",
     "emailAddress":"miguel@jirka.co",
     "cellPhone":"3152485826",
     "phone":"0314852457",
     "chargeName":"Gerente",
     "company":"Jirka",
     "acceptInforPolicy":1,
     "state":2
    },
    "suggestionType":
    {
     "id":1
    }
   }`
    console.log(obj);
    this.dataService.sendContactForm(obj)
      .subscribe(dataH => console.log(dataH), error => console.log(error));
  }

  private modifyTypes(dataH: any): void {
    const arr = [];
    for (let index = 0; index < dataH.length; index++) {
      if (dataH[index] != null) {
        if (!this.isNullOrEmpty(dataH[index].id)) {
          arr.push(dataH[index]);
        }
      }
    }
    this.types = arr;
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  private validateEmail(email: string): boolean {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(email)) { $('#email').css('border-color', 'red'); return false; }
    return true;
  }

  private validatePhone(phone: string): boolean {
    const phone_regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (!phone_regex.test(phone)) { $('#cellphone').css('border-color', 'red'); return false; }
    return true;
  }
}
