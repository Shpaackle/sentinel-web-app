import { Die, } from './die.model';

export class Ability {
    constructor(
    public abilityName: string,
    public customName: string,
    public category: string,
    public description: string,
    public actionType: string,
    public tiedPower: string,
    public tiedAbility: string,
    public color: string,
    public die: Die,
    public pageNum: number,
    ) {}
}
