import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { UserEntryComponent } from './user-entry/user-entry.component';

const routes: Routes = [
    { path: '', component: UserEntryComponent },
    { path: 'signup', component: UserEntryComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
