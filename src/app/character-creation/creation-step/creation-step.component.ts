import { Component, OnInit } from '@angular/core';
import { Die } from 'src/app/shared/die.model';
import { CreationStep } from './creation-step.model';

@Component({
  selector: 'app-creation-step',
  templateUrl: './creation-step.component.html',
  styleUrls: ['./creation-step.component.css']
})
export class CreationStepComponent implements OnInit {
  creationSteps: CreationStep[] = [];

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

}
