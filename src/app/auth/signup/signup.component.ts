import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    isLoading = false;
    signupError = false;

    constructor(public userService: UserService) {}

    onSignup(form: NgForm) {
        console.log(form);

        console.log('form.value= ' + JSON.stringify(form.value));

        if (form.invalid) {
            return;
        }

        const username = form.value.username;
        const email = form.value.email;
        const password = form.value.password;

        const responseMessage = this.userService.createUser(username, email, password);

        if (responseMessage === 'User already exists') {
            this.signupError = true;
        }
    }
}
