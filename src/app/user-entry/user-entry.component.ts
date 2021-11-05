import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

import { User } from '../shared/user.model';

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.css'],
})
export class UserEntryComponent implements OnInit {
    profileForm: FormGroup;
    characters: [];
    users: User[];

    constructor(private http: HttpClient, public userService: UserService) {}

    ngOnInit(): void {
        this.profileForm = new FormGroup({
            username: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl(''),
        });
        this.characters = [];
        this.users = [];
    }

    onSubmit() {
        // TODO: Send information to backend?
        const username = this.profileForm.get('username').value;
        const email = this.profileForm.get('email').value;
        const password = this.profileForm.get('password').value;
        const responseMessage = this.userService.createUser(username, email, password);
        switch (responseMessage) {
            case 'User added successfully':
                break;
            case 'User already exists':
                break;
        }
    }

    getUsers() {
        this.http.get<{ message: string; users: [User] }>('http://localhost:9000/api/users').subscribe((userData) => {
            this.users = userData.users;
        });
        console.warn(this.users);
    }
}
