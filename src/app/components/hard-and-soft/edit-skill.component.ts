import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skills: Skill = null;

  constructor(private skillService: SkillService, private router: Router, private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(dato => {
      this.skills = dato;
    }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['home']);
        })

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(this.skills).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['home']);
        }
    )


  }

}
