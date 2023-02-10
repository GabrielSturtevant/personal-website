import {Component} from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  city: string = '';
  phone: string = '';
  email: string = '';
  website: string = '';

  constructor(private infoService: InfoService) {
    this.city = this.infoService.city;
    this.phone = this.infoService.phone;
    this.email = this.infoService.email;
    this.website = this.infoService.website;
  }
}
