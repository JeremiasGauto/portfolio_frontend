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
  

  
  form: FormGroup;

  constructor(private educacionS: EducacionService, private tokenService: TokenService, private fb: FormBuilder) { 
    
     this.form = this.fb.group({
      nombreE: ['', Validators.required],
      descripcionE:['', Validators.required]
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
      descripcionE: this.form.value.descripcionE
    }
    
    this.educacionS.save(est).subscribe(data => {
      this.educacion.push(est);
      this.form.reset()
      

    });
  
    
  }

}
