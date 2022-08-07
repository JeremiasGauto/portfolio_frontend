import { Component, OnInit } from '@angular/core';
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
  faTrashCan=faTrashCan
  
  constructor(private skillservice: SkillService, private tokenService:TokenService) { }
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






}
