import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideColumnComponent} from './side-column.component';
import {ContactComponent} from "../contact/contact.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {EducationComponent} from "../education/education.component";
import {TestimonialsComponent} from "../testimonials/testimonials.component";
import {SpokenLanguagesComponent} from "../spoken-languages/spoken-languages.component";
import {CodingMusicComponent} from "../coding-music/coding-music.component";
import {ConferencesComponent} from "../conferences/conferences.component";

describe('SideColumnComponent', () => {
  let component: SideColumnComponent;
  let fixture: ComponentFixture<SideColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SideColumnComponent,
        ContactComponent,
        EducationComponent,
        TestimonialsComponent,
        SpokenLanguagesComponent,
        CodingMusicComponent,
        ConferencesComponent,
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
