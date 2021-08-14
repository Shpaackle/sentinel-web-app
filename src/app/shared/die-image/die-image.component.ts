import { Component, Input, OnInit } from '@angular/core';
import { Die } from '../die.model';

@Component({
    selector: 'app-die-image',
    templateUrl: './die-image.component.html',
})
export class DieImageComponent {
    @Input() die: Die;
}
