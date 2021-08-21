import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSelectionComponent } from './principle-selection.component';

describe('PrincipleSelectionComponent', () => {
    let component: PrincipleSelectionComponent;
    let fixture: ComponentFixture<PrincipleSelectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PrincipleSelectionComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrincipleSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
