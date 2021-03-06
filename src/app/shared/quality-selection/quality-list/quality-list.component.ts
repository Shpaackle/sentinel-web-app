import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Die } from '../../die.model';

@Component({
    selector: 'app-quality-list',
    templateUrl: './quality-list.component.html',
    styleUrls: ['./quality-list.component.css'],
})
export class QualityListComponent implements OnInit {
    options: string[] = [];
    buttonText: string = 'Please select a quality';
    @Input() qualityChoicesList: string[] = [];
    @Input() assignedDie: Die = new Die();

    @Output() qualitySelected = new EventEmitter<{ die: Die; qualityName: string }>();

    constructor() {}

    ngOnInit() {
        this.populateOptionsList();
    }

    populateOptionsList() {
        for (let optionName of this.qualityChoicesList) {
            this.options.push(optionName);
            switch (optionName) {
            case 'any Mental':
                this.options.push('Alertness');
                this.options.push('Conviction');
                this.options.push('Creativity');
                this.options.push('Investigation');
                this.options.push('Self-Discipline');
                break;
            case 'any Physical':
                this.options.push('Acrobatics');
                this.options.push('Close Combat');
                this.options.push('Finesse');
                this.options.push('Fitness');
                this.options.push('Ranged Combat');
                this.options.push('Stealth');
                break;
            case 'any Social':
                this.options.push('Banter');
                this.options.push('Insight');
                this.options.push('Imposing');
                this.options.push('Leadership');
                this.options.push('Persuasion');
                break;
            case 'any Information':
                this.options.push('Criminal Underworld Info');
                this.options.push('Deep Space Knowledge');
                this.options.push('History');
                this.options.push('Magical Lore');
                this.options.push('Medicine');
                this.options.push('Otherworldly Mythos');
                this.options.push('Science');
                this.options.push('Technology');

            default:
                break;
            }
        }
    }

    onQualityChoiceSelected(selectedQualityChoice: string) {
        console.log(selectedQualityChoice);
        const selectedQuality = { die: this.assignedDie, qualityName: selectedQualityChoice };
        console.log(selectedQuality);
        this.qualitySelected.emit(selectedQuality);
        this.buttonText = selectedQualityChoice;
    }
}
