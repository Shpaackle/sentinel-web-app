import { Die } from './die.model';

interface ICharacterBackground {
    number: number;
    name: string;
    qualityChoices: string[];
    qualityDiceSides: number[];
    principleCategory: string;
    powerSourceDiceSides: number[];
    pageNumber: number;
    blurb: string;
    backgroundText: string;
    diceText: string;
}

export class CharacterBackground implements ICharacterBackground {
    public number: number;
    public name: string;
    public qualityChoices: string[];
    public qualityDiceSides: number[];
    public principleCategory: string;
    public powerSourceDiceSides: number[];
    public pageNumber: number;
    public blurb: string;
    public backgroundText: string;
    public diceText: string;

    public powerSourceDice: Die[];
    public diceToAssign: Die[];
    public qualityDiceString: string;

    constructor(backgroundData: ICharacterBackground) {
        // this.number = backgroundData.num;
        // this.name = backgroundData.name;
        // this.backgroundText = backgroundData.background_text;
        // this.qualities = backgroundData.qualities;
        // this.principleCategory = backgroundData.principle;
        // this.diceText = backgroundData.dice_text;
        // this.pageNumber = backgroundData.page;
        // this.qualityDiceString = '';

        Object.assign(this, backgroundData);

        // for (let dieSides of backgroundData.power_source_dice) {
        //     let die = new Die(dieSides);
        //     this.powerSourceDice.push(die);
        // }
        this.powerSourceDice = this.powerSourceDiceSides.map((dieSides) => new Die(dieSides));

        // for (let dieSides of backgroundData.quality_dice) {
        //     let die = new Die(dieSides);
        //     this.diceToAssign.push(die);
        //     this.qualityDiceString += die.name + ' ';
        // }
        this.diceToAssign = this.qualityDiceSides.map((dieSides) => new Die(dieSides));
        this.qualityDiceString = this.qualityDiceSides.map((dieSides) => 'D' + dieSides.toString()).join(' ');
    }
}
