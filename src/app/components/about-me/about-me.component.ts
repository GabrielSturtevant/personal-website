import {Component} from '@angular/core';
import {InfoService} from "../../services/info.service";
import {Description} from "../../services/info";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutMe: Array<Description> = [];

  constructor(private infoService: InfoService) {
    this.aboutMe = infoService.aboutMe.sort((a, b) => (a.order > b.order) ? 1 : -1);
  }
}
