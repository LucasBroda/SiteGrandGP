import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyArchiveComponent } from './penalty-archive.component';

describe('PenaltyArchiveComponent', () => {
  let component: PenaltyArchiveComponent;
  let fixture: ComponentFixture<PenaltyArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
