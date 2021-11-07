import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
