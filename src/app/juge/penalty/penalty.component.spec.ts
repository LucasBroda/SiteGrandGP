import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugePenaltyComponent } from './penalty.component';

describe('PeanltyComponent', () => {
  let component: JugePenaltyComponent;
  let fixture: ComponentFixture<JugePenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugePenaltyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugePenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
