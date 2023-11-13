import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteChoiceComponent } from './athlete-choice.component';

describe('AthleteChoiceComponent', () => {
  let component: AthleteChoiceComponent;
  let fixture: ComponentFixture<AthleteChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
