import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestimonialsComponent} from './testimonials.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
