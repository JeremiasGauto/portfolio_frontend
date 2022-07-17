import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { IntroComponent } from './components/intro/intro.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    IntroComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
