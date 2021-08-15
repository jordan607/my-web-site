import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeSectionComponent } from './components/me-section/me-section.component';
import { MeIntroComponent } from './components/me-intro/me-intro.component';
import { MeContactComponent } from './components/me-contact/me-contact.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MeSectionComponent,
    MeIntroComponent,
    MeContactComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
