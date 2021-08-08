import { Die } from 'src/app/shared/die.model';

export class CreationStep {
  public firstDie: Die = null;
  public secondDie: Die = null;
  public thirdDie: Die = null;

  constructor(
    public stepNumber: number,
    public stepName: string,
    public stepDetails: string,
    public diceToRoll: Die[]
  ) {
    if (diceToRoll.length >= 1) {
      this.firstDie = diceToRoll[0];
    }
    if (diceToRoll.length >= 2) {
      this.secondDie = diceToRoll[1];
    }
    if (diceToRoll.length === 3) {
      this.thirdDie = diceToRoll[2];
    }
  }
}
