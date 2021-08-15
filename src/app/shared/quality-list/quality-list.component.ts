import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Die } from '../die.model';

@Component({
    selector: 'app-quality-list',
    templateUrl: './quality-list.component.html',
    styleUrls: ['./quality-list.component.css'],
})
export class QualityListComponent implements OnInit, OnChanges {
    options: string[];
    @Input() jsonData: string[] = [];
    @Input() assignedDie: Die;

    constructor() {}

    ngOnInit(): void {
        this.options = [];
    }

    ngOnChanges(): void {
        this.populateOptionsList();
    }

    populateOptionsList() {
        this.options = [];
        for (let optionName of this.jsonData) {
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

            default:
                break;
            }
        }
    }
}
