import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  experi: Experiencia= new Experiencia('','','');

  faEdit = faEdit
  faTrashCan = faTrashCan
  
  form: FormGroup;

  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService, router: Router, authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreE: ['', Validators.required],
      descripcionE: ['', Validators.required],
      imgExperiencia: ['', Validators.required]

    })

  }
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
      data => { this.exper = data; })
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

  
  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')

  agregarExperiencia() {
    
     
    const exp: Experiencia = {
      nombreE: this.form.value.nombreE,
      descripcionE: this.form.value.descripcionE,
      imgExperiencia:this.form.value.imgExperiencia

    }
    
    this.servExperiencia.save(exp).subscribe(data => {
      this.exper.push(exp)
      this.form.reset()
      this.cargarExperiencia()
      

    });
  
    
  }
 
  traeEditarExperiencia(experiencia: any) {
    this.experi.id=experiencia.id
    this.form.controls['nombreE'].setValue(experiencia.nombreE);
    this.form.controls['descripcionE'].setValue(experiencia.descripcionE);
    this.form.controls['imgExperiencia'].setValue(experiencia.imgExperiencia);
    

  }

  edita() {
    this.experi.nombreE = this.form.value.nombreE;
    this.experi.descripcionE = this.form.value.descripcionE;
    this.experi.imgExperiencia = this.form.value.imgExperiencia;
    this.servExperiencia.update(this.experi.id, this.experi).subscribe(res => {
      alert("usuario editado con exito");
      this.form.reset();
      this.cargarExperiencia();
    })

  }

}
