import { Die } from "src/app/shared/die.model";

export class CreationStep {
  constructor(
    public stepNumber: number, 
    public stepName: string,
    public stepDetails: string,
    public diceToRoll: Die[]
  ) {}
}