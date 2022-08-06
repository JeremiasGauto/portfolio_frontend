import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  IsLoggingFailed = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  form:FormGroup;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombreUsuario:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })

   }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.IsLoggingFailed = false;
      this.roles = this.tokenService.getAuthorities();
    
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.IsLoggingFailed = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['home'])
    }, err => {
      this.isLogged = false;
      this.IsLoggingFailed = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
    }
    
  get NombreUsuario() {
    return this.form.get('nombreUsuario');
  }
  
  get Password() {
    return this.form.get('password');
    }

  }





