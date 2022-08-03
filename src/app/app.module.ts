import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { IntroComponent } from './components/intro/intro.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HardAndSoftComponent } from './components/hard-and-soft/hard-and-soft.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/estudios/neweducacion.component';
import { EditeducacionComponent } from './components/estudios/editeducacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    IntroComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HardAndSoftComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
