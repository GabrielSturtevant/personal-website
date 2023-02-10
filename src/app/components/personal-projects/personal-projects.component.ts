import {Component} from '@angular/core';
import {Project} from "../../services/info";
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
  projects: Array<Project> = [];

  constructor(private infoService: InfoService) {
    this.projects = this.infoService.projects.sort((a, b) => (a.order > b.order) ? 1 : -1);
    this.projects.map(item => item.descriptions.sort((a, b) => (a.order > b.order) ? 1 : -1));
  }
}
