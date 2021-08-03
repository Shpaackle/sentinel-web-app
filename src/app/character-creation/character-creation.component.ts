import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Die } from '../shared/die.model';
import { CreationStep } from './creation-step/creation-step.model';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {
  creationSteps: CreationStep[] = [];
  @Output() currentStep = new EventEmitter<number>();

  constructor() {
    // create die objects
    const d10 = new Die(10);
    const d4 = new Die(4);

    // create placeholder text for now
    const firstStep = new CreationStep(1, "Background Selection", "This is the first step", [d10, d10])
    const secondStep = new CreationStep(2, "Second Step", "This is the second step", [d4, d4])

    // push placeholder text into list of steps
    this.creationSteps.push(firstStep);
    this.creationSteps.push(secondStep);
   }

  ngOnInit(): void {
  }

  onStepSelect(step: number) {
    this.currentStep.emit(step);
  }

}
