import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieImageComponent } from './die-image.component';

describe('DieImageComponent', () => {
    let component: DieImageComponent;
    let fixture: ComponentFixture<DieImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DieImageComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DieImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
