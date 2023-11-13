import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyAddComponent } from './penalty-add.component';

describe('PenaltyAddComponent', () => {
  let component: PenaltyAddComponent;
  let fixture: ComponentFixture<PenaltyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
