import {Component} from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = '';
  title: string = '';
  email: string = '';
  github: string = '';
  linkedin: string = '';

  constructor(private infoService: InfoService) {
    this.name = this.infoService.name;
    this.title = this.infoService.title;
    this.email = this.infoService.email;
    this.github = this.infoService.github;
    this.linkedin = this.infoService.linkedin;
  }
}
