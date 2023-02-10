import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {PersonalProjectsComponent} from "./components/personal-projects/personal-projects.component";
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MainColumnComponent} from "./components/main-column/main-column.component";
import {SideColumnComponent} from "./components/side-column/side-column.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {TestimonialsComponent} from "./components/testimonials/testimonials.component";
import {EducationComponent} from "./components/education/education.component";
import {SpokenLanguagesComponent} from "./components/spoken-languages/spoken-languages.component";
import {CodingMusicComponent} from "./components/coding-music/coding-music.component";
import {ConferencesComponent} from "./components/conferences/conferences.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        AboutMeComponent,
        PersonalProjectsComponent,
        WorkExperienceComponent,
        FooterComponent,
        MainColumnComponent,
        SideColumnComponent,
        ContactComponent,
        SkillsComponent,
        TestimonialsComponent,
        EducationComponent,
        SpokenLanguagesComponent,
        CodingMusicComponent,
        ConferencesComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PersonalWebsiteAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PersonalWebsiteAngular');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('PersonalWebsiteAngular app is running!');
  // });
});
