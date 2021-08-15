import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeIntroComponent } from './me-intro.component';

describe('MeIntroComponent', () => {
  let component: MeIntroComponent;
  let fixture: ComponentFixture<MeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
