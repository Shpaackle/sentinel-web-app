import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    createUser(username: string, email: string, password: string) {
        const user: User = { username: username, email: email, password: password, name: '', characters: '' };
    }
}
