import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterBackground } from './shared/background.model';
import { CharacterSheet } from './shared/character-sheet.model';
import { CreationStep } from './shared/creation-step.model';
import { Die } from './shared/die.model';
import backgrounds from '../assets/tables/backgrounds.json';
import principles from '../assets/tables/principles.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    // @Output() backgroundOptionSelected = new EventEmitter<CharacterBackground>();

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
        //this.rollAllDice(this.firstStep.diceToRoll);
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

    getPrinciplesFromCategory(principleCategoryName: string): string[] {
        let principleNames: string[] = [];
        const principleCategory = principles[principleCategoryName];
        for (let name in principleCategory) {
            principleNames.push(name);
        }

        return principleNames;

        // switch (principle.toLowerCase()) {
        // case 'esoteric':
        //     return [
        //         'Destiny',
        //         'Energy/Element',
        //         'Exorcism',
        //         'Fauna',
        //         'Flora',
        //         'Future',
        //         'Immortality',
        //         'Inner Demon',
        //         'Magic',
        //         'Sea',
        //         'Space',
        //         'Time Traveller',
        //         'Undead',
        //     ];
        // case 'expertise':
        //     return [
        //         'Clockwork',
        //         'Gearhead',
        //         'History',
        //         'Indestructible',
        //         'Lab',
        //         'Mastery',
        //         'Mentor',
        //         'Powerless',
        //         'Science',
        //         'Speed',
        //         'Stealth',
        //         'Strength',
        //         'Tactician',
        //         'Whispers',
        //     ];
        // case 'ideals':
        //     return [
        //         'Chaos',
        //         'Compassion',
        //         'Defender',
        //         'Dependence',
        //         'Equality',
        //         'Great Power',
        //         'Hero',
        //         'Honor',
        //         'Justice',
        //         'Liberty',
        //         'Order',
        //         'Self Preservation',
        //         'Zealot',
        //     ];
        // case 'identity':
        //     return [
        //         'Ambition',
        //         'Amnesia',
        //         'Detachment',
        //         'Discovery',
        //         'Loner',
        //         'Nomad',
        //         'Peace',
        //         'Rage',
        //         'Split',
        //         'Savagery',
        //         'Levity',
        //         'Spotless Mind',
        //     ];

        // case 'responsibility':
        //     return [
        //         'Business',
        //         'Debtor',
        //         'Detective',
        //         'Double Agent',
        //         'Everyman',
        //         'Family',
        //         'Mask',
        //         'Sidekick',
        //         'Team',
        //         'Underworld',
        //         'Veteran',
        //         'Youth',
        //     ];

        // default:
        //     return [];
        // }
    }

    getBackgroundFromRoll(roll: number) {
        let rolledBackgroundData = backgrounds[roll.toString()];

        let background = new CharacterBackground(rolledBackgroundData);

        return background;

        // return backgroundsTable[roll];
    }

    onBackgroundOptionSelect(selectedBackground: CharacterBackground) {
        // console.log(selectedBackground);
        // this.backgroundOptionSelected.emit(selectedBackground);

        this.selectedBackground = selectedBackground;
    }
}
