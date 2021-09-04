import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterBackground } from '../background.model';
import { Principle } from '../principle.model';
import * as principles from '../../../assets/tables/principles.json';
import backgrounds from '../../../assets/tables/backgrounds.json';
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
        // const principlesDataFromCategory = principles[this.principleCategoryName];

        // this.principleOptions = principlesDataFromCategory.map((principleData) => new Principle(principleData));
        this.principleOptions = this.principlesService.principles;
    }

    onPrincipleSelection(selectedElement: any) {
        console.log('selectedElement');
        console.log(selectedElement);
        this.selectedPrinciple = selectedElement;

        this.principleSelected.emit(this.selectedPrinciple);
    }

    // getPrinciplesFromCategory(principleCategoryName: string): Principle[] {
    //     const prinCatData = principles[principleCategoryName];

    //     console.log(prinCatData);
    //     let principlesList = [];
    //     // const principlesList = prinCatData.map((principleData: Principle) => new Principle(principleData));
    //     for (let principleName in prinCatData) {
    //         principlesList.push(new Principle(prinCatData[principleName]));
    //     }
    //     return principlesList;
    // }
}
