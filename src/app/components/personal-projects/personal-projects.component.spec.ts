import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalProjectsComponent} from './personal-projects.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Description, Project} from "../../services/info";

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

  it('should render 3 projects', () => {
    const testValues: Array<Project> = [
      {
        title: 'title',
        order: 0,
        descriptions: [
          {
            description: 'testing1',
            order: 0
          }
        ]
      },
      {
        title: 'unique name',
        order: 1,
        descriptions: [
          {
            description: 'testing1',
            order: 0
          }
        ]
      },
      {
        title: 'foobar',
        order: 2,
        descriptions: [
          {
            description: 'testing1',
            order: 0
          }
        ]
      }
    ]
    const testIndex = Math.floor(Math.random() * testValues.length)
    component.projects = testValues;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content')?.children[testIndex].querySelector('.title')?.textContent)
      .toContain(testValues[testIndex].title);
    expect(compiled.querySelector('.content')?.children).toHaveSize(testValues.length);
  });

  it('should render 1 project with all fields', () => {
    const testValues: Array<Project> = [
      {
        title: 'It\'s a me, a Title',
        summary: 'This is the summary that always ends...',
        picture_path: 'picture path',
        picture_link: 'picture link',
        project_link: 'project link',
        order: 0,
        descriptions: [
          {
            description: 'this is the description that never ends...',
            order: 0
          }
        ]
      }
    ]
    component.projects = testValues;
    const testObject = testValues[0];

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const item = compiled.querySelector('.item')?.children
    console.log(item)
    console.log(compiled.querySelector('.img-responsive')?.closest('a')?.outerHTML)
    expect(compiled.querySelector('.title')?.textContent).toContain(testObject.title);
    expect(compiled.querySelector('.summary')?.textContent).toContain(testObject.summary)
    expect(compiled.querySelector('.img-responsive')?.outerHTML).toContain(testObject.picture_path)
    expect(compiled.querySelector('.img-responsive')?.closest('a')?.outerHTML).toContain(testObject.picture_link)
    expect(compiled.querySelector('.title')?.children).toHaveSize(1)
    expect(compiled.querySelector('.content')?.children).toHaveSize(testValues.length);
  });
});
