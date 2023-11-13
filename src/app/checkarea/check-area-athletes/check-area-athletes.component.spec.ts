import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAreaAthletesComponent } from './check-area-athletes.component';

describe('CheckAreaAthletesComponent', () => {
  let component: CheckAreaAthletesComponent;
  let fixture: ComponentFixture<CheckAreaAthletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAreaAthletesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAreaAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
