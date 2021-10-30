import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';

const routes: Routes = [
    { path: '', component: UserEntryComponent },
    { path: 'login', component: UserEntryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
