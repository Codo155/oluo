import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbiesAndLanguagesPartialComponent } from './hobbies-and-languages-partial/hobbies-and-languages-partial.component';
import { RightSidePartialComponent } from './right-side-partial/right-side-partial.component';
import { SkillsAndDegreePartialComponent } from './skills-and-degree-partial/skills-and-degree-partial.component';
import { WorkAndEducationPartialComponent } from './work-and-education-partial/work-and-education-partial.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbiesAndLanguagesPartialComponent,
    RightSidePartialComponent,
    SkillsAndDegreePartialComponent,
    WorkAndEducationPartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
