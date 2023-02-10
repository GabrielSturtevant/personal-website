import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainColumnComponent} from './main-column.component';
import {AboutMeComponent} from "../about-me/about-me.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WorkExperienceComponent} from "../work-experience/work-experience.component";
import {PersonalProjectsComponent} from "../personal-projects/personal-projects.component";

describe('MainColumnComponent', () => {
  let component: MainColumnComponent;
  let fixture: ComponentFixture<MainColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainColumnComponent,
        AboutMeComponent,
        WorkExperienceComponent,
        PersonalProjectsComponent,
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render render contact', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.primary')?.children).toHaveSize(3);
    expect(compiled.querySelector('.primary')?.innerHTML).toContain('app-about-me');
    expect(compiled.querySelector('.primary')?.innerHTML).toContain('app-work-experience');
    expect(compiled.querySelector('.primary')?.innerHTML).toContain('app-personal-projects');
  });
});
