import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySelectionComponent } from './quality-selection.component';

describe('QualitySelectionComponent', () => {
  let component: QualitySelectionComponent;
  let fixture: ComponentFixture<QualitySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualitySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
