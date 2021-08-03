import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSelectionsComponent } from './step-selections.component';

describe('StepSelectionsComponent', () => {
  let component: StepSelectionsComponent;
  let fixture: ComponentFixture<StepSelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSelectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
