import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    isLoading = false;

    constructor(public userService: UserService) {}

    onLogin(form: NgForm) {
        console.log(form);

        if (form.invalid) {
            return;
        }
    }
}
