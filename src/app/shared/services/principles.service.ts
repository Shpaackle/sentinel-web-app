import { Injectable } from '@angular/core';

import { Principle } from '../principle.model';

import principlesData from '../../../assets/tables/principles-data.json';
// import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PrinciplesService {
    private principlesByCategory: { [categoryName: string]: Principle[] } = {};

    constructor() {
        // in the constructor
        // build out the principles array from your json data
        // and any component that needs this data, grabs it from this service

        for (let principleCategoryName in principlesData) {
            console.log(principleCategoryName);
            let categoryPrinciplesData = principlesData[principleCategoryName];
            this.principlesByCategory[principleCategoryName] = [];
            for (let principleName in categoryPrinciplesData) {
                let principle = new Principle(categoryPrinciplesData[principleName]);
                this.principlesByCategory[principleCategoryName].push(principle);
            }
        }
    }

    // getPrinciplesByCategoryName(categoryName: string): Observable<IPrinciple[]> {
    //     return of(this.principlesByCategory[categoryName]);
    // }

    getPrinciplesByCategoryName(categoryName: string): Principle[] {
        let principles = this.principlesByCategory[categoryName];
        return principles;
    }
}
