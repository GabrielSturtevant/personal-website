import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingMusicComponent } from './coding-music.component';

describe('CodingMusicComponent', () => {
  let component: CodingMusicComponent;
  let fixture: ComponentFixture<CodingMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
