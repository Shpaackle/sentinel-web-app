import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Principle } from '../principle.model';
import { PrinciplesService } from '../services/principles.service';

@Component({
    selector: 'app-principle-selection',
    templateUrl: './principle-selection.component.html',
    styleUrls: ['./principle-selection.component.css'],
})
export class PrincipleSelectionComponent implements OnInit {
    @Input() principleCategoryName: string;

    principleOptions: Principle[] = [];
    selectedPrinciple: Principle = null;
    @Output() principleSelected = new EventEmitter<Principle>();

    constructor(private principlesService: PrinciplesService) {}

    ngOnInit(): void {
        this.principleOptions = this.principlesService.getPrinciplesByCategoryName(this.principleCategoryName);
    }

    onPrincipleSelection(selectedElement: any) {
        console.log('selectedElement');
        console.log(selectedElement);
        this.selectedPrinciple = selectedElement;

        this.principleSelected.emit(this.selectedPrinciple);
    }
}
