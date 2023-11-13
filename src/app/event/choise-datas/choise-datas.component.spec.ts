import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseDatasComponent } from './choise-datas.component';

describe('ChoiseDatasComponent', () => {
  let component: ChoiseDatasComponent;
  let fixture: ComponentFixture<ChoiseDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiseDatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiseDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
