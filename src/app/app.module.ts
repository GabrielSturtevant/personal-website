import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainColumnComponent } from './components/main-column/main-column.component';
import { SideColumnComponent } from './components/side-column/side-column.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { EducationComponent } from './components/education/education.component';
import { SpokenLanguagesComponent } from './components/spoken-languages/spoken-languages.component';
import { CodingMusicComponent } from './components/coding-music/coding-music.component';
import { ConferencesComponent } from './components/conferences/conferences.component';

@NgModule({
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
