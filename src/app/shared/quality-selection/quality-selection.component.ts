import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CharacterBackground } from '../background.model';
import { Die } from '../die.model';

@Component({
    selector: 'app-quality-selection',
    templateUrl: './quality-selection.component.html',
    styleUrls: ['./quality-selection.component.css'],
})
export class QualitySelectionComponent implements OnInit {
    @Input() selectedBackground: CharacterBackground;

    selectedQualities: { die: Die; qualityName: string }[];

    constructor() {}

    ngOnInit(): void {
        this.selectedQualities = this.selectedBackground.diceToAssign.map((die) => ({
            die: new Die(die.sides),
            qualityName: 'Please select a quality',
        }));
    }

    onQualityChoiceSelected(selectedQuality: { die: Die; qualityName: string }, index: number) {
        console.log('onQualityChoiceSelected');
        console.log(selectedQuality);
        this.selectedQualities[index] = selectedQuality;
    }
}
