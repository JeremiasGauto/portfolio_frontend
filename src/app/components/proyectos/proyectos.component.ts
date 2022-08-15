import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  proye: Proyecto= new Proyecto('',0,'','');
  faEdit = faEdit
  faTrashCan = faTrashCan
  isLogged = false;

  form: FormGroup;

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService, private router: Router, authService: AuthService, private fb: FormBuilder) { 
    this.form = this.fb.group({      
      nombreProyecto: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcionProyecto: ['', Validators.required],
      imgProyecto:['', Validators.required],
    })

  }

 ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
    this.isLogged = false;
    }
  }
  
  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => { this.proyectos = data; } )
 }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(data => { 
        this.cargarProyecto();
      }, err => {
        alert("No se puede eliminar experiencia")
      })
    }
  }

  
  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')

  agregarProyecto() {
    
     
    const proye: Proyecto = {
      nombreProyecto: this.form.value.nombreProyecto,
      fecha: this.form.value.fecha,
      descripcionProyecto: this.form.value.descripcionProyecto,
      imgProyecto:this.form.value.imgProyecto
    }
    
    this.proyectoService.save(proye).subscribe(data => {
      this.proyectos.push(proye)
      this.form.reset()
      this.cargarProyecto()
      

    });
  
    
  }

  traeEditaProyecto(proyecto: any) {
    this.proye.id=proyecto.id
    this.form.controls['nombreProyecto'].setValue(proyecto.nombreProyecto);
    this.form.controls['fecha'].setValue(proyecto.fecha);
    this.form.controls['descripcionProyecto'].setValue(proyecto.descripcionProyecto);
    this.form.controls['imgProyecto'].setValue(proyecto.imgProyecto);
    

  }

  edita() {
    this.proye.nombreProyecto = this.form.value.nombreProyecto;
    this.proye.fecha = this.form.value.fecha;
    this.proye.descripcionProyecto = this.form.value.descripcionProyecto;
    this.proye.imgProyecto = this.form.value.imgProyecto;
    this.proyectoService.update( this.proye).subscribe(res => {
      alert("proyecto editada con exito");
      this.form.reset();
      this.cargarProyecto();
    })

  }


}
