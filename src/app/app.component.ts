import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { CharacterBackground } from './shared/background.model';
import { CharacterSheet } from './shared/character-sheet.model';
import { CreationStep } from './shared/creation-step.model';
import { Die } from './shared/die.model';
import backgrounds from '../assets/tables/backgrounds.json';
import principles from '../assets/tables/principles.json';
import { Principle } from './shared/principle.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    private emptyBackground = new CharacterBackground(backgrounds['empty']);

    title = 'sentinel-web-app';
    loadedFeature = 'creation';
    firstStep: CreationStep;
    secondStep: CreationStep;
    thirdStep: CreationStep;
    fourthStep: CreationStep;
    fifthStep: CreationStep;
    sixthStep: CreationStep;
    seventhStep: CreationStep;
    eighthStep: CreationStep;

    firstBackground: CharacterBackground;
    secondBackground: CharacterBackground;
    thirdBackground: CharacterBackground;

    rolledBackgrounds: CharacterBackground[] = [];

    currentBackground: CharacterBackground;
    selectedBackground: CharacterBackground;

    characterSheet: CharacterSheet;

    backgroundSelectedName: string = '5';
    backgroundSelected: any;
    backgroundSelectionControl: FormControl = new FormControl('');

    selectedPrinciple: Principle;

    stepOneForm: FormGroup;

    constructor() {
        this.firstStep = new CreationStep(
            1,
            'Background',
            `To begin: roll 2D10. Using one of the two D10 you just rolled, or by adding 
      them together, select a background, recording it in the Characteristics 
      section of your hero sheet. That provides you with some of your qualities 
      (details on page 44), a principle (details on page 45), and a new set of 
      dice to roll for power source for the next step.`,
            [new Die(10), new Die(10)],
        );
        this.secondStep = new CreationStep(
            2,
            'Power Source',
            `Roll the dice you gained from your background to select a Power Source, 
      recording it in the characteristics section of your hero sheet. The size
       of dice you just rolled provides you with some of your powers (Details 
        on Page 44). You also receive some yellow abilities, other abilities, 
        or qualities, and dice to roll for your archetype for the next step`,
            [new Die()],
        );
        this.thirdStep = new CreationStep(
            3,
            'Archetype',
            `Roll the dice you gained from your power source to select an Archetype, 
      recording it in the characteristics section of your hero sheet. The size of 
      dice you just rolled provides you with more powers and/or qualities. It also 
      provides green abilities, sometimes other abilities, a second principle, 
      and a new set of dice to roll for your personality for the next step.`,
            [new Die(6)],
        );
        this.fourthStep = new CreationStep(
            4,
            'Personality',
            `Roll the dice you gained from your archetype to select a personality. Record 
      your personality in your hero sheet’s Characteristics section. It provides 
      you with your status dice and an Out ability. You also take a core character 
      quality of your choice, as explained on page 121.`,
            [new Die(8)],
        );
        this.fifthStep = new CreationStep(
            5,
            'Red Abilities',
            `Choose two red abilities. Pick
      from the list that corresponds
      with the category of the power
      or quality that you will use for
      this ability.`,
            [new Die(12)],
        );
        this.sixthStep = new CreationStep(
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
            [],
        );
        this.seventhStep = new CreationStep(
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
            [new Die(8)],
        );
        this.eighthStep = new CreationStep(
            8,
            'Finishing Touches',
            `Fill in the final details of your hero:
      name, alias, description, and new
      names for your abilities.`,
            [],
        );

        this.emptyBackground = new CharacterBackground(backgrounds['empty']);

        // this.firstBackground = new CharacterBackground(backgrounds['1']);
        this.firstBackground = this.emptyBackground;
        this.secondBackground = new CharacterBackground(backgrounds['2']);
        this.thirdBackground = new CharacterBackground(backgrounds['3']);

        this.characterSheet = new CharacterSheet();

        this.backgroundSelected = backgrounds[this.backgroundSelectedName];

        this.selectedBackground = this.firstBackground;
    }

    ngOnInit() {
        this.stepOneForm = new FormGroup({
            backgroundSelectionControl: new FormControl(''),
            // qualitiesSelection: new FormArray(null),
            // principleSelection: new FormControl(null),
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

    rollDie(die: Die | null) {
        if (die) {
            const roll: number = Math.floor(Math.random() * die.sides) + 1;
            die.faceShowing = roll;
            return roll;
        }
    }

    rollAllDice(diceToRoll: Die[]) {
        for (let die of diceToRoll) {
            this.rollDie(die);
        }
    }

    rollBackgroundDice() {
        this.rolledBackgrounds = [];

        let dice_sum: number = 0;
        for (let die of this.firstStep.diceToRoll) {
            let roll = this.rollDie(die);
            let rolled_background = this.getBackgroundFromRoll(roll);
            this.rolledBackgrounds.push(rolled_background);
            dice_sum += die.faceShowing;
        }
        let summed_background = this.getBackgroundFromRoll(dice_sum);
        this.rolledBackgrounds.push(summed_background);

        this.firstBackground = this.rolledBackgrounds[0];
        this.secondBackground = this.rolledBackgrounds[1];
        this.thirdBackground = this.rolledBackgrounds[2];

        this.backgroundSelected = backgrounds[dice_sum.toString()];
        this.selectedBackground = this.emptyBackground;
    }

    getPrinciplesFromCategory(principleCategoryName: string): Principle[] {
        const prinCatData = principles[principleCategoryName];

        console.log(prinCatData);
        let principlesList = [];

        for (let principleName in prinCatData) {
            principlesList.push(new Principle(prinCatData[principleName]));
        }
        return principlesList;
    }

    getBackgroundFromRoll(roll: number) {
        let rolledBackgroundData = backgrounds[roll.toString()];

        let background = new CharacterBackground(rolledBackgroundData);

        return background;
    }

    onBackgroundOptionSelect(selectedBackground: CharacterBackground) {
        this.selectedBackground = selectedBackground;
        this.selectedPrinciple = null;

        console.log(JSON.stringify(this.stepOneForm.getRawValue()));
        // using setValue to set the forms value
        this.stepOneForm.setValue({ backgroundSelectionControl: selectedBackground });
        // set means completely override
        // name, background, charisma ... setValue background = green
        // patch means only override what I gave you
        // this.stepOneForm.patchValue({ backgroundSelectionControl: selectedBackground });
        // this.stepOneForm.get('backgroundSelectionControl').setValue(selectedBackground);
        // this.stepOneForm.updateValueAndValidity();
        console.log(this.stepOneForm.getRawValue());
    }

    onPrincipleOptionSelect(selectedPrinciple) {
        console.log('selectedPrinciple');
        console.log(selectedPrinciple);
        this.selectedPrinciple = selectedPrinciple;
    }
}
