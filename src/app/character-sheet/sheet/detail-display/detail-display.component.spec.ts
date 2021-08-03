import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDisplayComponent } from './detail-display.component';

describe('DetailDisplayComponent', () => {
  let component: DetailDisplayComponent;
  let fixture: ComponentFixture<DetailDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
