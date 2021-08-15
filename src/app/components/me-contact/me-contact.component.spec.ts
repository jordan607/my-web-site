import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeContactComponent } from './me-contact.component';

describe('MeContactComponent', () => {
  let component: MeContactComponent;
  let fixture: ComponentFixture<MeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
