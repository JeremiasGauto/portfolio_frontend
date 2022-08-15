import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacion: Educacion[] = []

  faEdit = faEdit
  faTrashCan = faTrashCan
  edu: Educacion= new Educacion('','','');

  
  form: FormGroup;

  constructor(private educacionS: EducacionService, private tokenService: TokenService, private fb: FormBuilder) { 
    
     this.form = this.fb.group({
      nombreE: ['', Validators.required],
       descripcionE: ['', Validators.required],
      imgEducacion:['', Validators.required]
    })
  }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged= true;
    } else {
      this.isLogged= false;
    }
      

  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(data => {
      this.educacion = data;
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(data => {
        this.cargarEducacion();
      }, err => {
        alert("No se Pudo eliminar");
      })
    }
  }

  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')

  
  agregarEducacion() {   
     
    const est: Educacion= {
      nombreE: this.form.value.nombreE,
      descripcionE: this.form.value.descripcionE,
      imgEducacion:this.form.value.imgEducacion
    }
    
    this.educacionS.save(est).subscribe(data => {
      this.educacion.push(est);
      this.form.reset()  

    }); 
    
  }


  traeEditarEducacion(educ: any) {
    this.edu.id=educ.id
    this.form.controls['nombreE'].setValue(educ.nombreE);
    this.form.controls['descripcionE'].setValue(educ.descripcionE);
    this.form.controls['imgEducacion'].setValue(educ.imgEducacion);
    

  }

  edita() {
    this.edu.nombreE = this.form.value.nombreE;
    this.edu.descripcionE = this.form.value.descripcionE;
     this.edu.imgEducacion = this.form.value.imgEducacion;
    this.educacionS.update(this.edu.id, this.edu).subscribe(res => {
      alert("educacion editada con exito");
      this.form.reset();
      this.cargarEducacion();
    })

  }



}
