import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

import { User } from '../user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    createUser(username: string, email: string, password: string): string {
        var responseMessage: string;
        const user: User = { username: username, email: email, password: password, id: null };
        this.http.post<{ message: string; userID: string }>('http://localhost:9000/api/users/create', user).subscribe((responseData) => {
            const userID = responseData.userID;
            user.id = userID;
            this.currentUser = user;
            responseMessage = responseData.message;
        });
        return responseMessage;
    }
}
