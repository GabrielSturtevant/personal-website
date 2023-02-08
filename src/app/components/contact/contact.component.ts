import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
location: string = "Los Angeles, CA";
phoneNumber: string = "661-532-8176";
emailAddress: string = "Sturtevant.Gabriel@gmail.com";
websiteUrl: string = "Sturtevant.tech";
}
