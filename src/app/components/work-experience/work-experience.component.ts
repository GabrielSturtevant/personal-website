import {Component} from '@angular/core';
import {Job} from "../../services/info";
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  jobs: Array<Job> = [];

  constructor(private infoService: InfoService) {
    this.jobs = infoService.jobs.sort((a, b) => (a.order > b.order) ? 1 : -1);
    this.jobs.map(item => item.descriptions.sort((a, b) => (a.order > b.order) ? 1 : -1))
  }
}
