import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  per:Persona[] = []
  persona: Persona = new Persona("", "", "", "", "");
  form: FormGroup;
  faEdit = faEdit


  constructor(public personaService: PersonaService, private fb: FormBuilder, private tokenService: TokenService) {

    this.form = this.fb.group({

      
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      img: ['', Validators.required],
      acercaDe: ['', Validators.required],
      bannerPersonal: ['', Validators.required],
    })
  }




  ngOnInit() {
    this.personaService.getPersona().subscribe(datos => { this.persona = datos })
  }

  cargarPersona(): void {
    this.personaService.lista().subscribe(
      data => { this.per = data; })
  }

  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')


  traeEditaPerfil(persona: any) {
    this.persona.id = persona.id
    this.form.controls['nombre'].setValue(persona.nombre);
    this.form.controls['apellido'].setValue(persona.apellido);
    this.form.controls['img'].setValue(persona.img);
    this.form.controls['acercaDe'].setValue(persona.acercaDe);
    this.form.controls['bannerPersonal'].setValue(persona.bannerPersonal);
    

  }

  edita() {
    this.persona.nombre = this.form.value.nombre;
    this.persona.apellido = this.form.value.apellido;
    this.persona.img = this.form.value.img;
    this.persona.acercaDe = this.form.value.acercaDe;
    this.persona.bannerPersonal = this.form.value.bannerPersonal;    
    this.personaService.update(this.persona).subscribe(res => {
      alert("perfil editado con exito");
      this.form.reset();
      this.cargarPersona();
      
      ;
    })
  }
}
