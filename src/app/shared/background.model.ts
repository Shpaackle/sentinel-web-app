import { Die } from './die.model';

export class CharacterBackground {
  constructor(
    public number: number,
    public name: string,
    public backgroundText: string,
    public qualities: string[],
    public principleCategory: string,
    public powerSourceDice: Die[],
    public pageNumber: number
  ) {}
}
