import {Component, OnInit} from '@angular/core';
import {InfoService} from "./services/info.service";
import {Info} from "./services/info";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoaded: boolean = false;
  constructor(private infoService: InfoService) {
    this.getInfo();
    console.log('Is Production: ',environment.production);
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(
      data => {
        this.isLoaded = true;
      },
      error => {
        console.error(error);
      }
    )
  }

  title = 'PersonalWebsiteAngular';
}
