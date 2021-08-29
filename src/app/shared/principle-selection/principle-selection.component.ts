import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CharacterBackground } from '../background.model';
import { Principle } from '../principle.model';
import * as principles from '../../../assets/tables/principles.json';
import backgrounds from '../../../assets/tables/backgrounds.json';

@Component({
    selector: 'app-principle-selection',
    templateUrl: './principle-selection.component.html',
    styleUrls: ['./principle-selection.component.css'],
})
export class PrincipleSelectionComponent implements OnInit {
    @Input() principleCategoryName: string;

    principleOptions: Principle[] = [];
    selectedPrinciple: Principle = null;
    principleSelected = new EventEmitter<Principle>();

    constructor() {}

    ngOnInit(): void {
        const principlesDataFromCategory = principles[this.principleCategoryName];

        this.principleOptions = principlesDataFromCategory.map((principleData) => new Principle(principleData));
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
