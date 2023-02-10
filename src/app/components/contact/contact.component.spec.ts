import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactComponent} from './contact.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Description} from "../../services/info";

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact', () => {
    const city: string = 'random';
    const phone: string = 'words';
    const email: string = 'go';
    const website: string = 'here';
    component.city = city;
    component.phone = phone;
    component.email = email;
    component.website = website;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content')?.textContent).toContain(city);
    expect(compiled.querySelector('.content')?.textContent).toContain(phone);
    expect(compiled.querySelector('.content')?.textContent).toContain(email);
    expect(compiled.querySelector('.content')?.textContent).toContain(website);
    expect(compiled.querySelector('.list-unstyled')?.children).toHaveSize(4);
  });
});
