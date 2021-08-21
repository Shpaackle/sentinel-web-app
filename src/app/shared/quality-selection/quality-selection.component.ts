import { Component, Input, OnInit } from '@angular/core';
import { CharacterBackground } from '../background.model';

@Component({
    selector: 'app-quality-selection',
    templateUrl: './quality-selection.component.html',
    styleUrls: ['./quality-selection.component.css'],
})
export class QualitySelectionComponent implements OnInit {
    @Input() selectedBackground: CharacterBackground;

    constructor() {}

    ngOnInit(): void {}
}
