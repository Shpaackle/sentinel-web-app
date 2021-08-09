import { Component } from '@angular/core';
import { CharacterBackground } from './shared/background.model';
import { CharacterSheet } from './shared/character-sheet.model';
import { CreationStep } from './shared/creation-step.model';
import { Die } from './shared/die.model';

const backgroundsTable = {
  1: new CharacterBackground(
    1,
    'Upper Class',
    'Assign a D10 and D8 to any of these qualities:',
    ['Fitness', 'Persuasion', 'any Mental'],
    'Responsibility',
    [new Die(10), new Die(8), new Die(8)],
    'D10 and D8 D8',
    49,
    [new Die(10), new Die(8)]
  ),
  2: new CharacterBackground(
    2,
    'Blank Slate',
    'Assign a D10 and D8 to any of these qualities:',
    ['any Mental', 'any Physical'],
    'Identity',
    [new Die(10), new Die(8), new Die(8)],
    'D10 and D8 D8',
    49,
    [new Die(10), new Die(8)]
  ),
  3: new CharacterBackground(
    3,
    'Struggling',
    '',
    ['Banter', 'Criminal Underworld Info', 'any Physical'],
    'Responsibility',
    [new Die(8), new Die(8), new Die(6)],
    'D8 D8 and D6',
    50,
    [new Die(8), new Die(6), new Die(6)]
  ),
  4: { name: 'Adventurer' },
  5: { name: 'Unremarkable' },
  6: { name: 'Law Enforcement' },
  7: { name: 'Academic' },
  8: { name: 'Tragic' },
  9: { name: 'Performer' },
  10: { name: 'Military' },
  11: { name: 'Retired' },
  12: { name: 'Criminal' },
  13: { name: 'Medical' },
  14: { name: 'Anachronistic' },
  15: { name: 'Exile' },
  16: { name: 'Former Villain' },
  17: { name: 'Interstellar' },
  18: { name: 'Dynasty' },
  19: { name: 'Otherworldly' },
  20: { name: 'Created' },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  constructor() {
    this.firstStep = new CreationStep(
      1,
      'Background',
      `To begin: roll 2D10. Using one of the two D10 you just rolled, or by adding 
      them together, select a background, recording it in the Characteristics 
      section of your hero sheet. That provides you with some of your qualities 
      (details on page 44), a principle (details on page 45), and a new set of 
      dice to roll for power source for the next step.`,
      [new Die(10), new Die(10)]
    );
    this.secondStep = new CreationStep(
      2,
      'Power Source',
      `Roll the dice you gained from your background to select a Power Source, 
      recording it in the characteristics section of your hero sheet. The size
       of dice you just rolled provides you with some of your powers (Details 
        on Page 44). You also receive some yellow abilities, other abilities, 
        or qualities, and dice to roll for your archetype for the next step`,
      [new Die()]
    );
    this.thirdStep = new CreationStep(
      3,
      'Archetype',
      `Roll the dice you gained from your power source to select an Archetype, 
      recording it in the characteristics section of your hero sheet. The size of 
      dice you just rolled provides you with more powers and/or qualities. It also 
      provides green abilities, sometimes other abilities, a second principle, 
      and a new set of dice to roll for your personality for the next step.`,
      [new Die(6)]
    );
    this.fourthStep = new CreationStep(
      4,
      'Personality',
      `Roll the dice you gained from your archetype to select a personality. Record 
      your personality in your hero sheet’s Characteristics section. It provides 
      you with your status dice and an Out ability. You also take a core character 
      quality of your choice, as explained on page 121.`,
      [new Die(8)]
    );
    this.fifthStep = new CreationStep(
      5,
      'Red Abilities',
      `Choose two red abilities. Pick
      from the list that corresponds
      with the category of the power
      or quality that you will use for
      this ability.`,
      [new Die(12)]
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
      []
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
      [new Die(8)]
    );
    this.eighthStep = new CreationStep(
      8,
      'Finishing Touches',
      `Fill in the final details of your hero:
      name, alias, description, and new
      names for your abilities.`,
      []
    );

    this.firstBackground = new CharacterBackground(
      1,
      'Upper Class',
      'Assign a D10 and D8 to any of these qualities:',
      ['Fitness', 'Persuasion', 'any Mental'],
      'Responsibility',
      [new Die(10), new Die(8), new Die(8)],
      'D10 and D8 D8',
      49,
      [new Die(10), new Die(8)]
    );
    this.secondBackground = new CharacterBackground(
      2,
      'Blank Slate',
      'Assign a D10 and D8 to any of these qualities:',
      ['any Mental', 'any Physical'],
      'Identity',
      [new Die(10), new Die(8), new Die(8)],
      'D10 and D8 D8',
      49,
      [new Die(10), new Die(8)]
    );
    this.thirdBackground = new CharacterBackground(
      3,
      'Struggling',
      '',
      ['Banter', 'Criminal Underworld Info', 'any Physical'],
      'Responsibility',
      [new Die(8), new Die(8), new Die(6)],
      'D8 D8 and D6',
      50,
      [new Die(8), new Die(6), new Die(6)]
    );

    this.characterSheet = new CharacterSheet();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  rollDie(die: Die | null) {
    if (die) {
      const roll: number = Math.floor(Math.random() * die.sides) + 1;
      die.faceShowing = roll;
    }
  }

  rollAllDice(diceToRoll: Die[]) {
    for (let die of diceToRoll) {
      this.rollDie(die);
    }
  }

  rollBackgroundDice() {
    this.rollAllDice(this.firstStep.diceToRoll);

    const roll1 = this.firstStep.diceToRoll[0].faceShowing;
    const roll2 = this.firstStep.diceToRoll[1].faceShowing;
    this.rolledBackgrounds.push(this.getBackgroundFromRoll(roll1));
    this.rolledBackgrounds.push(this.getBackgroundFromRoll(roll2));
    this.rolledBackgrounds.push(this.getBackgroundFromRoll(roll1 + roll2));
    this.firstBackground = this.getBackgroundFromRoll(roll1);
    this.secondBackground = this.getBackgroundFromRoll(roll2);
    this.thirdBackground = this.getBackgroundFromRoll(roll1 + roll2);
  }

  getPrinciplesFromCategory(principle: string): string[] {
    switch (principle.toLowerCase()) {
      case 'esoteric':
        return [
          'Destiny',
          'Energy/Element',
          'Exorcism',
          'Fauna',
          'Flora',
          'Future',
          'Immortality',
          'Inner Demon',
          'Magic',
          'Sea',
          'Space',
          'Time Traveller',
          'Undead',
        ];
      case 'expertise':
        return [
          'Clockwork',
          'Gearhead',
          'History',
          'Indestructible',
          'Lab',
          'Mastery',
          'Mentor',
          'Powerless',
          'Science',
          'Speed',
          'Stealth',
          'Strength',
          'Tactician',
          'Whispers',
        ];
      case 'ideals':
        return [
          'Chaos',
          'Compassion',
          'Defender',
          'Dependence',
          'Equality',
          'Great Power',
          'Hero',
          'Honor',
          'Justice',
          'Liberty',
          'Order',
          'Self Preservation',
          'Zealot',
        ];
      case 'identitity':
        return [
          'Ambition',
          'Amnesia',
          'Detachment',
          'Discovery',
          'Loner',
          'Nomad',
          'Peace',
          'Rage',
          'Split',
          'Savagery',
          'Levity',
          'Spotless Mind',
        ];

      case 'responsibility':
        return [
          'Business',
          'Debtor',
          'Detective',
          'Double Agent',
          'Everyman',
          'Family',
          'Mask',
          'Sidekick',
          'Team',
          'Underworld',
          'Veteran',
          'Youth',
        ];

      default:
        return [];
    }
  }

  getBackgroundFromRoll(roll: number) {
    return backgroundsTable[roll];
  }
}
