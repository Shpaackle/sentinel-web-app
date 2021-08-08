import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Die } from '../shared/die.model';
import { CreationStep } from '../shared/creation-step.model';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
})
export class CharacterCreationComponent implements OnInit {
  creationSteps: CreationStep[] = [];
  @Output() currentStep = new EventEmitter<number>();
  @Output() dieRolled = new EventEmitter<Die>();

  constructor() {
    // create placeholder text for now
    const firstStep = new CreationStep(
      1,
      'Background',
      `To begin: roll 2D10. Using one of the two D10 you just rolled, or by adding 
      them together, select a background, recording it in the Characteristics 
      section of your hero sheet. That provides you with some of your qualities 
      (details on page 44), a principle (details on page 45), and a new set of 
      dice to roll for power source for the next step.`,
      [new Die(10), new Die(10)]
    );
    const secondStep = new CreationStep(
      2,
      'Power Source',
      `Roll the dice you gained from your background to select a Power Source, 
      recording it in the characteristics section of your hero sheet. The size
       of dice you just rolled provides you with some of your powers (Details 
        on Page 44). You also receive some yellow abilities, other abilities, 
        or qualities, and dice to roll for your archetype for the next step`,
      [new Die()]
    );
    const thirdStep = new CreationStep(
      3,
      'Archetype',
      `Roll the dice you gained from your power source to select an Archetype, 
      recording it in the characteristics section of your hero sheet. The size of 
      dice you just rolled provides you with more powers and/or qualities. It also 
      provides green abilities, sometimes other abilities, a second principle, 
      and a new set of dice to roll for your personality for the next step.`,
      [new Die(6)]
    );
    const fourthStep = new CreationStep(
      4,
      'Personality',
      `Roll the dice you gained from your archetype to select a personality. Record 
      your personality in your hero sheet’s Characteristics section. It provides 
      you with your status dice and an Out ability. You also take a core character 
      quality of your choice, as explained on page 121.`,
      [new Die(8)]
    );
    const fifthStep = new CreationStep(
      5,
      'Red Abilities',
      `Choose two red abilities. Pick
      from the list that corresponds
      with the category of the power
      or quality that you will use for
      this ability.`,
      [new Die(12)]
    );
    const sixthStep = new CreationStep(
      6,
      'Retcon',
      `Take one retcon from the
    following list:
    • An extra Red ability
    • Swap two dice in your
    powers and/or qualities
    • Swap an ability to use
    a different power or
    quality
    • Increase your Red
    status die by one size
    (maximum D12)
    • Add any D6 power or
    quality of your choice
    • Swap one of your
    principles for any other`,
      []
    );
    const seventhStep = new CreationStep(
      7,
      'Health',
      `Add up the following numbers: 8 + the maximum
      of your Red status die + the maximum of your
      choice of any one Athletic power or Mental
      quality (or a D4 if you have none) + the
      result of rolling D8 (if you don’t
      want to roll, just
      use 4). This total is
      your total Health.
      Use the chart on
      page 113 to determine
      your Green, Yellow,
      and Red Health ranges.`,
      [new Die(8)]
    );
    const eigthStep = new CreationStep(
      8,
      'Finishing Touches',
      `Fill in the final details of your hero:
      name, alias, description, and new
      names for your abilities.`,
      []
    );

    // push placeholder text into list of steps
    this.creationSteps.push(firstStep);
    this.creationSteps.push(secondStep);
    this.creationSteps.push(thirdStep);
    this.creationSteps.push(fourthStep);
    this.creationSteps.push(fifthStep);
    this.creationSteps.push(sixthStep);
    this.creationSteps.push(seventhStep);
    this.creationSteps.push(eigthStep);
  }

  ngOnInit(): void {}

  onStepSelect(step: number) {
    this.currentStep.emit(step);
  }

  rollDie(die: Die) {
    const roll: number = Math.floor(Math.random() * die.sides) + 1;
    die.faceShowing = roll;
  }
}
