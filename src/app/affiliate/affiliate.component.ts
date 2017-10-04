import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.less']
})
export class AffiliateComponent implements OnInit {
  subCategories;
  chapters;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getSubcategories()
      .subscribe(dataH => this.subCategories = dataH, error => console.log(error));
    this.dataService.getChapters()
      .subscribe(dataH => this.chapters = dataH, error => console.log(error));
    function Ctrl($scope) {
      $scope.text = 'me@example.com';
    }
    this.setToolTip();
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
    if (this.isNullOrEmpty($('#capi').val())) {
      valid = false;
      $('#capi').css('border-color', 'red');
    }
    if (data.value.password !== data.value.confirm) {
      valid = false;
      $('#confirm').css('border-color', 'red');
      alert('El password y su confirmación no son iguales.');
    }
    valid = this.validateEmailN(data.value.email);
    if (!valid) { return; }
    const obj = `{
      "user":
          {"firstName":"` + data.value.uname + `",
          "lastNames":"` + data.value.lastnames + `",
          "username":"` + data.value.email + `",
          "emailAddress":"` + data.value.email + `",
          "password":"` + data.value.password + `"},
      "affiliate":
          {
          "tradename":"` + data.value.rz + `",
          "establishmentName":"` + data.value.nc + `",
          "rnt":` + data.value.rnt + `,
          "rut":"` + data.value.rut + `",
          "legalRepresentative":"` + data.value.rl + `",
          "commercialAddress":"` + data.value.address + `",
          "subcategory":` + $('#sbct').val() + `,
          "chapter":
          {
              "id": ` + $('#capi').val() + `
          },
          "state":2}
      }`;
    console.log(obj);
    this.dataService.sendAfilieseForm(obj)
      .subscribe(dataH => this.reviewPost(dataH), error => console.log(error));
  }

  public validateRnt(event: any): void {
    if (event.target.value != null && event.target.value !== '') {
      this.dataService.validateRnt(event.target.value)
        .subscribe(dataH => this.paintRnt(dataH), error => console.log(error));
    }
  }

  public validateEmail(event: any): void {
    if (event.target.value != null && event.target.value !== '') {
      if (this.isValidEmailAddress(event.target.value)) {
        this.dataService.validateEmail(event.target.value)
          .subscribe(dataH => this.paintEmail(dataH), error => console.log(error));
      } else {
        $('#email').css('border-color', 'red');
        $('#email').data('validField', 'false');
      }
    }
  }

  private paintRnt(val: any): void {
    if (val.success) {
      $('#rnt').css('border-color', 'green');
      $('#rnt').data('validField', 'true');
    } else {
      $('#rnt').css('border-color', 'red');
      $('#rnt').data('validField', 'false');
    }
  }

  private paintEmail(val: any): void {
    if (val.success) {
      $('#email').css('border-color', 'green');
      $('#email').data('validField', 'true');
    } else {
      $('#email').css('border-color', 'red');
      $('#email').data('validField', 'false');
    }
  }

  private isValidEmailAddress(emailAddress: string): boolean {
    const pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  private validateEmailN(email: string): boolean {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(email)) { $('#email').css('border-color', 'red'); return false; }
    return true;
  }

  public downloadDocument(url: string): void {
    window.open(url, '_blank');
  }

  private setToolTip(): void {
    const tooltip = $('.ntooltip');
    tooltip.each(function () {
      const $this = $(this),
        tooltipText = $('<div class="tooltip-text" style="background-color: #F9B42B;color: white;left: 0;' +
          'padding: 5px;position: absolute;top: 0;border-radius: 5px;font-weight: bold;max-width: 15pc;">' +
          $this.data('tooltip-text') + '</div>');
      $this.on('mouseover', function () {
        tooltipText.appendTo('body');
      });

      $this.on('mouseout', function () {
        tooltipText.remove();
      });

      $this.on('mousemove', function (e) {
        tooltipText.css('top', (e.pageY + 20) + 'px');
        tooltipText.css('left', (e.pageX + 20) + 'px');
      });

    });
  }

  private reviewPost(dataH: any): void {
    console.log(dataH)
    if (dataH.success) {
      alert('Su petición ha sido enviada, gracias por contactarnos');
      document.location.href="/";
    }else{
      alert('hubo un error enviando su petición. Por favor, vuelva a intentarlo');
    }
  }
}
