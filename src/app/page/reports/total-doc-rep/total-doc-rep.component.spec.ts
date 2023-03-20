import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocRepComponent } from './total-doc-rep.component';

describe('TotalDocRepComponent', () => {
  let component: TotalDocRepComponent;
  let fixture: ComponentFixture<TotalDocRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDocRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
