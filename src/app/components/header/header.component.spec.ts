import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header with details', () => {
    const name: string = 'random';
    const title: string = 'words';
    const linkedin: string = 'go';
    const github: string = 'here';
    const email: string = 'dude';
    component.name = name;
    component.title = title;
    component.linkedin = linkedin;
    component.github = github;
    component.email = email;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container')?.textContent).toContain(name);
    expect(compiled.querySelector('.container')?.textContent).toContain(title);
    expect(compiled.querySelector('.container')?.innerHTML).toContain(linkedin);
    expect(compiled.querySelector('.container')?.innerHTML).toContain(github);
    expect(compiled.querySelector('.container')?.innerHTML).toContain(email);
    expect(compiled.querySelector('.list-inline')?.children).toHaveSize(2);
  });
});
