import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exper: Experiencia[] = [];
  usuario: AuthService
  
  faEdit = faEdit
  faTrashCan=faTrashCan

  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService, router: Router, authService: AuthService) { }
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

  delete(id?: number) {
    if (id != undefined) {
      this.servExperiencia.delete(id).subscribe(data => { 
        this.cargarExperiencia();
      }, err => {
        alert("No se puede eliminar experiencia")
      })
    }
  }

  
  

  
}

