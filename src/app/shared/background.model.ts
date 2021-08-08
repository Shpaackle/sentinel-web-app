import { Die } from './die.model';

export class Background {
  constructor(
    public number: number,
    public name: string,
    public qualities: string[],
    public principleCategory: string,
    public powerSourceDice: Die[],
    public pageNumber: number
  ) {}
}
