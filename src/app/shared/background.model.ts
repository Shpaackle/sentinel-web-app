import { Die } from './die.model';

export class CharacterBackground {
    public number: number;
    public name: string;
    public backgroundText: string;
    public qualities: string[];
    public principleCategory: string;
    public powerSourceDice: Die[] = [];
    public diceText: string;
    public pageNumber: number;
    public diceToAssign: Die[] = [];
    public qualityDiceString: string;

    constructor(backgroundData: {
        num: number;
        name: string;
        qualities: string[];
        quality_dice: number[];
        principle: string;
        power_source_dice: number[];
        page: number;
        blurb: string;
        background_text: string;
        dice_text: string;
    }) {
        this.number = backgroundData.num;
        this.name = backgroundData.name;
        this.backgroundText = backgroundData.background_text;
        this.qualities = backgroundData.qualities;
        this.principleCategory = backgroundData.principle;
        this.diceText = backgroundData.dice_text;
        this.pageNumber = backgroundData.page;
        this.qualityDiceString = '';

        for (let dieSides of backgroundData.power_source_dice) {
            let die = new Die(dieSides);
            this.powerSourceDice.push(die);
        }

        for (let dieSides of backgroundData.quality_dice) {
            let die = new Die(dieSides);
            this.diceToAssign.push(die);
            this.qualityDiceString += die.name + ' ';
        }
    }
}
