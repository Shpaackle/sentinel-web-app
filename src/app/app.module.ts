import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CreationStepComponent } from './character-creation/creation-step/creation-step.component';
import { StepSelectionsComponent } from './character-creation/step-selections/step-selections.component';
import { SheetComponent } from './character-sheet/sheet/sheet.component';
import { InfoGroupComponent } from './character-sheet/sheet/info-group/info-group.component';
import { DetailDisplayComponent } from './character-sheet/sheet/detail-display/detail-display.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterCreationComponent,
    CharacterSheetComponent,
    CreationStepComponent,
    StepSelectionsComponent,
    SheetComponent,
    InfoGroupComponent,
    DetailDisplayComponent, 
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
