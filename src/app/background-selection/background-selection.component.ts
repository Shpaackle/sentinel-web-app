import { Component, OnInit } from '@angular/core';
import { Die } from '../shared/die.model';

@Component({
    selector: 'app-background-selection',
    templateUrl: './background-selection.component.html',
    styleUrls: ['./background-selection.component.css'],
})
export class BackgroundSelectionComponent implements OnInit {
    diceToRoll: Die[];

    constructor() {}

    ngOnInit(): void {
        this.diceToRoll = [new Die(10), new Die(10)];
    }

    rollDice() {
        for (let die of this.diceToRoll) {
            die.roll();
        }
    }
}
