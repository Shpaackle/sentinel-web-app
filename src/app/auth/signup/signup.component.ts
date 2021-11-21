import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    isLoading = false;

    constructor(public userService: UserService) {}

    onSignup(form: NgForm) {
        console.log(form);

        if (form.invalid) {
            return;
        }
    }
}
