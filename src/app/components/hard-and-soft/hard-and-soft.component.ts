import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})
export class HardAndSoftComponent implements OnInit {

 skill: Skill[] = []

  faEdit = faEdit
  faTrashCan = faTrashCan
  sk: Skill= new Skill('','',0);
  
  form: FormGroup;
  
  constructor(private skillservice: SkillService, private tokenService: TokenService, private fb: FormBuilder) { 
    
    this.form = this.fb.group({

      
      nombreSkill: ['', Validators.required],
      fotoSkill: ['', Validators.required],
      porcentaje:['', Validators.required],
    })
  }
  isLogged = false;

 ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged= true;
    } else {
      this.isLogged= false;
    }
      

  }

  cargarSkill(): void {
    this.skillservice.lista().subscribe(data => {
      this.skill = data;
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillservice.delete(id).subscribe(data => {
        this.cargarSkill();
      }, err => {
        alert("No se Pudo eliminar");
      })
    }
  }

  rolAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN')

agregarSkill() {
    
     
    const ski: Skill= {
      nombreSkill: this.form.value.nombreSkill,
      fotoSkill: this.form.value.fotoSkill,
      porcentaje:this.form.value.porcentaje
    }
    
    this.skillservice.save(ski).subscribe(data => {
      this.skill.push(ski)
      this.form.reset()
      this.cargarSkill()
      

    });
  
    
  }

  traeEditaSkill(skillastico: any) {
    this.sk.id=skillastico.id
    this.form.controls['nombreSkill'].setValue(skillastico.nombreSkill);
    this.form.controls['fotoSkill'].setValue(skillastico.fotoSkill);
    this.form.controls['porcentaje'].setValue(skillastico.porcentaje);
    

  }

  edita() {
    this.sk.nombreSkill = this.form.value.nombreSkill;
    this.sk.fotoSkill = this.form.value.fotoSkill;
    this.sk.porcentaje = this.form.value.porcentaje;
    this.skillservice.update( this.sk).subscribe(res => {
      alert("skill editada con exito");
      this.form.reset();
      this.cargarSkill();
    })

  }



}
