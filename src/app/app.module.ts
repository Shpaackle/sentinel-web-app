import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { SheetComponent } from './character-sheet/sheet/sheet.component';
import { InfoGroupComponent } from './character-sheet/sheet/info-group/info-group.component';
import { DetailDisplayComponent } from './character-sheet/sheet/detail-display/detail-display.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RollingDieComponent } from './shared/rolling-die/rolling-die.component';
import { DieImageComponent } from './shared/die-image/die-image.component';
import { QualityListComponent } from './shared/quality-selection/quality-list/quality-list.component';
import { PrincipleListComponent } from './shared/principle-list/principle-list.component';
import { PrincipleSelectionComponent } from './shared/principle-selection/principle-selection.component';
import { QualitySelectionComponent } from './shared/quality-selection/quality-selection.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CharacterCreationComponent,
        CharacterSheetComponent,
        SheetComponent,
        InfoGroupComponent,
        DetailDisplayComponent,
        DropdownDirective,
        RollingDieComponent,
        DieImageComponent,
        QualityListComponent,
        PrincipleListComponent,
        PrincipleSelectionComponent,
        QualitySelectionComponent,
        UserEntryComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
