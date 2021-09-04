import { Injectable } from '@angular/core';

import { IPrinciple, Principle } from '../principle.model';

@Injectable({
    providedIn: 'root',
})
export class PrinciplesService {
    principles: IPrinciple[];

    constructor() {
        // in the constructor
        // build out the principles array from your json data
        // and any component that needs this data, grabs it from this service
        this.principles = [
            new Principle({
                name: 'test principle',
                duringRoleplayingText: 'test',
                minorTwist: 'minor twist',
                majorTwist: 'major twist',
                principleAbility: { icon: 'string', name: 'string', actionType: 'string', gameText: 'string' },
            }),
        ];
    }

    // getPrinciplesByCategoryName(categoryName: string): Observable<IPrinciple[]> {
    //     return of(this.principles)
    // }
}
