import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.css'],
})
export class UserEntryComponent implements OnInit {
    profileForm: FormGroup;
    characters: [];

    constructor() {}

    ngOnInit(): void {
        this.profileForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
        });
        this.characters = [];
    }

    onSubmit() {
        // TODO: Send information to backend?
        console.warn(this.profileForm.value);
    }
}
