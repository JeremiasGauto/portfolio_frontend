import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/model/proyecto';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  usuario: AuthService
  
  faEdit = faEdit
  faTrashCan = faTrashCan
  isLogged = false;

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService,private  router: Router, authService: AuthService) { }

 ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
    this.isLogged = false;
    }
  }
  
  cargarExperiencia(): void {
    this.proyectoService.lista().subscribe(
      data => { this.proyectos = data; } )
 }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(data => { 
        this.cargarExperiencia();
      }, err => {
        alert("No se puede eliminar experiencia")
      })
    }
  }

  
  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')

  

}
