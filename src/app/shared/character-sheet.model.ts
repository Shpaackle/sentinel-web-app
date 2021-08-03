import { Ability } from "./ability.model";
import { Die } from "./die.model";
import { Principle } from "./principle.model";

export class CharacterSheet {
  public playerName: string = "";

  public heroName: string = "";
  public aliasName: string = "";

  // Physical Attributes
  public gender: string = "";
  public age: string = "";
  public height: string = "";
  public eyes: string = "";
  public hair: string = "";
  public skin: string = "";
  public build: string = "";
  public costumeOrEquipment: string = "";

  // Characteristics
  public chosenBackground: string = "";
  public chosenPowerSource: string = "";
  public chosenArchetype: string = "";
  public chosenPersonality: string = "";

  // Principles
  public chosenFirstPrinciple: Principle = null;
  public chosenSecondPrinciple: Principle = null;

  // Powers
  public chosenPowers: {name: string, numSides: number}[] = [];

  // Qualities
  public chosenQualities: {name: string, numSides: number}[] = [];

  // Abilities
  public greenAbilities: Ability[] = [];
  public yellowAbilities: Ability[] = [];
  public redAbilities: Ability[] = [];
  public outAbility: Ability = null;

  // Status Dice
  public greenStatusDie: Die = null;
  public yelllowStatusDie: Die = null;
  public redStatusDie: Die = null;

  // Health
  public maxHealth: number = 0;
  public currentHealth: number = 0;

  // Hero Points
  public heroPointsThisIssue: number = 0;
  public heroPointRewards: number[] = [0, 0, 0, 0];

  public backIssues: string[] = [];
  public availableCollections: string[] = [];
}