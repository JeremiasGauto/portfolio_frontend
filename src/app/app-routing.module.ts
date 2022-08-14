import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



const routes: Routes = [
  {path:'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent}
  
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ]
  
})
export class AppRoutingModule { }
