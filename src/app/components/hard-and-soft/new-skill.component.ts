import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSkill: string = '';
  fotoSkill: string = '';
  porcentaje: number;

  constructor(private skillService: SkillService, private router:Router) { }

  ngOnInit(): void {
  }

   onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.fotoSkill, this.porcentaje);
    this.skillService.save(skill).subscribe(data => {
      alert("Skill agregada con exito");
      this.router.navigate(['home']);
    }, err => {
      alert("Falló");
    this.router.navigate(['home']);})

  }

}
