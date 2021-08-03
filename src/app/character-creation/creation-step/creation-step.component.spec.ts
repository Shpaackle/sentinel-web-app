import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStepComponent } from './creation-step.component';

describe('CreationStepComponent', () => {
  let component: CreationStepComponent;
  let fixture: ComponentFixture<CreationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
