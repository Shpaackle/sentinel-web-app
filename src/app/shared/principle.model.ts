export interface IPrinciple {
    name: string;
    duringRoleplayingText: string;
    minorTwist: string;
    majorTwist: string;
    principleAbility: { icon: string; name: string; actionType: string; gameText: string };
}

export class Principle implements IPrinciple {
    public name: string;
    public duringRoleplayingText: string;
    public minorTwist: string;
    public majorTwist: string;
    public principleAbility: { icon: string; name: string; actionType: string; gameText: string };

    constructor(principleData: IPrinciple) {
        Object.assign(this, principleData);
    }
}
