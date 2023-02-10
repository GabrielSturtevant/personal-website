import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalProjectsComponent} from './personal-projects.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PersonalProjectsComponent', () => {
  let component: PersonalProjectsComponent;
  let fixture: ComponentFixture<PersonalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalProjectsComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
