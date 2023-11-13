import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionChoiceComponent } from './division-choice.component';

describe('DivisionChoiceComponent', () => {
  let component: DivisionChoiceComponent;
  let fixture: ComponentFixture<DivisionChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
