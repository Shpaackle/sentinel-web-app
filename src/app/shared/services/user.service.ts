import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

import { User } from '../user.model';

interface AuthData {
    username: string;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    createUser(username: string, email: string, password: string): string {
        var responseMessage: string;
        const authData: AuthData = { username: username, email: email, password: password };
        this.http.post<{ message: string; userID: string }>('http://localhost:9000/api/users/create', authData).subscribe((responseData) => {
            this.currentUser = { username: username, email: email, password: null, id: responseData.userID };
            responseMessage = responseData.message;
            console.log(responseMessage);
        });
        return responseMessage;
    }
}
