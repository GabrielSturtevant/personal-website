import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutMeComponent} from './about-me.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Description} from "../../services/info";

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render about me', () => {
    const testValues: Array<Description> = [
      {
        description: 'testing1',
        order: 0
      },
      {
        description: 'testing2',
        order: 0
      },
    ]
    component.aboutMe = testValues;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content')?.textContent).toContain(testValues[0].description);
    expect(compiled.querySelector('.content')?.textContent).toContain(testValues[1].description);
    expect(compiled.querySelector('.content')?.children).toHaveSize(2);
  });
});
