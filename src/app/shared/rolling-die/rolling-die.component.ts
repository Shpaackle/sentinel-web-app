import { Component, Input } from '@angular/core';
import { Die } from '../die.model';

@Component({
    selector: 'app-rolling-die',
    templateUrl: 'rolling-die.component.html',
})
export class RollingDieComponent {
    @Input() die: Die;
}
