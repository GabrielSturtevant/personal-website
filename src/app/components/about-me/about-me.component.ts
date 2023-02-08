import {Component} from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutMe: Array<string> = [];

  constructor(private infoService: InfoService) {
    this.aboutMe = infoService.aboutMe;
  }
}
