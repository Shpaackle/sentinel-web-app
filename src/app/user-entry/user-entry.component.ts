import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from './user.model';

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.css'],
})
export class UserEntryComponent implements OnInit {
    profileForm: FormGroup;
    characters: [];
    users: User[];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.profileForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            characters: new FormControl(''),
        });
        this.characters = [];
        this.users = [];
    }

    onSubmit() {
        // TODO: Send information to backend?
        const user: User = {
            name: this.profileForm.get('name').value,
            email: this.profileForm.get('email').value,
            characters: this.profileForm.get('characters').value,
        };
        this.http.post<{ message: string }>('http://localhost:9000/api/users', user).subscribe((responseData) => {
            console.log(responseData.message);
        });
        console.warn(this.profileForm.value);
    }

    getUsers() {
        this.http.get<{ message: string; users: [User] }>('http://localhost:9000/api/users').subscribe((userData) => {
            this.users = userData.users;
        });
        console.warn(this.users);
    }
}
