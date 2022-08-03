import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exper: Experiencia[] = [];

  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService, router: Router) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
    this.isLogged = false;
    }
  }
  
  cargarExperiencia(): void {
    this.servExperiencia.lista().subscribe(
      data => { this.exper = data; } )
 }

}

