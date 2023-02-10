import {Component} from '@angular/core';
import {InfoService} from "../../services/info.service";
import {Recommendation} from "../../services/info";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  protected recommendations: Array<Recommendation> = [];
  constructor(private infoService: InfoService) {
    this.recommendations = infoService.recommendations.sort((a, b) => (a.order > b.order) ? 1 : -1);
    this.recommendations.map(item => item.descriptions.sort((a, b) => (a.order > b.order) ? 1 : -1))
  }

}
