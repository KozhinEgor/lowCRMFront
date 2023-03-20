import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDoctorComponent } from './spec-doctor.component';

describe('SpecDoctorComponent', () => {
  let component: SpecDoctorComponent;
  let fixture: ComponentFixture<SpecDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
